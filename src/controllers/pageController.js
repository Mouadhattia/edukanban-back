const { Page } = require('../models/Page');
const { Section } = require('../models/Section');

// Create a new page
const createPage = async (req, res) => {
  try {
    const { site_id, title, slug, is_homepage } = req.body;

    // Check if slug is already used in this site
    const existingPage = await Page.findOne({ site_id, slug });
    if (existingPage) {
      return res.status(400).json({ message: 'Slug is already in use for this site' });
    }

    // If this is homepage, ensure no other homepage exists
    if (is_homepage) {
      const existingHomepage = await Page.findOne({ site_id, is_homepage: true });
      if (existingHomepage) {
        return res.status(400).json({ message: 'A homepage already exists for this site' });
      }
    }

    // Get highest order_index and add 1
    const highestOrder = await Page.findOne({ site_id }).sort('-order_index');
    const order_index = highestOrder ? highestOrder.order_index + 1 : 0;

    const page = new Page({
      site_id,
      title,
      slug,
      is_homepage,
      order_index
    });

    await page.save();

    res.status(201).json(    page   );
  } catch (error) {
    res.status(500).json({ message: 'Error creating page', error: error.message });
  }
};

// Get all pages for a site
const getPages = async (req, res) => {
  try {
    const { site_id } = req.params;
    const pages = await Page.find({ site_id }).sort('order_index');

    res.json(pages);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pages', error: error.message });
  }
};

// Get single page with its sections
const getPage = async (req, res) => {
  try {
    const page = await Page.findById(req.params.id);
    if (!page) {
      return res.status(404).json({ message: 'Page not found' });
    }

    const sections = await Section.find({ page_id: page._id }).sort('order_index');

    res.json({
      page,
      sections
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching page', error: error.message });
  }
};

// Update page
const updatePage = async (req, res) => {
  try {
    const { title, slug, is_homepage } = req.body;
    const page = await Page.findById(req.params.id);

    // Check if page exists
    // Check if page exists

    if (!page) {
      return res.status(404).json({ message: 'Page not found' });
    }
  
    // Check slug uniqueness if changed
    if (slug && slug !== page.slug) {


      const existingPage = await Page.findOne({
        site_id: page.site_id,
        slug,
        _id: { $ne: page._id }
      });
      if (existingPage) {
        return res.status(400).json({ message: 'Slug is already in use for this site' });
      }
    }


    // Handle homepage status change
    if (typeof is_homepage !== 'undefined' && is_homepage !== page.is_homepage) {
      if (is_homepage) {
        // Remove homepage status from other pages
        await Page.updateMany(
          { site_id: page.site_id, is_homepage: true },
          { is_homepage: false }
        );
      } else {
        // Ensure at least one homepage exists
        const homepageCount = await Page.countDocuments({
          site_id: page.site_id,
          is_homepage: true,
          _id: { $ne: page._id }
        });
        if (homepageCount === 0) {
          return res.status(400).json({ message: 'Cannot remove homepage status: site must have a homepage' });
        }
      }
    }

    // Update fields
    if (title) page.title = title;
    if (slug) page.slug = slug;
    if (typeof is_homepage !== 'undefined') page.is_homepage = is_homepage;

    await page.save();

    res.json(
      
      page
    );
  } catch (error) {
    res.status(500).json({ message: 'Error updating page', error: error.message });
  }
};

// Update page order
const updatePageOrder = async (req, res) => {
  try {
    const { pages } = req.body; // Array of { id, order_index }
    
    // Update each page's order
    await Promise.all(
      pages.map(({ id, order_index }) =>
        Page.findByIdAndUpdate(id, { order_index })
      )
    );

    res.json({ message: 'Page order updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating page order', error: error.message });
  }
};

// Delete page
const deletePage = async (req, res) => {
  try {
  
    
    const page = await Page.findById(req.params.id);
   
    
    if (!page) {
      return res.status(404).json({ message: 'Page not found' });
    }
    

    // Prevent deletion of the only homepage
    if (page.is_homepage) {
      const homepageCount = await Page.countDocuments({
        site_id: page.site_id,
        is_homepage: true
      });
      if (homepageCount <= 1) {
        return res.status(400).json({ message: 'Cannot delete the only homepage' });
      }
    }

    // Delete all sections associated with the page
    await Section.deleteMany({ page_id: page._id });
    // Delete the page
    await Page.findByIdAndDelete(page._id);

    res.json({ message: 'Page deleted successfully' });
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: 'Error deleting page', error: error.message });
  }
};

module.exports = {
  createPage,
  getPages,
  getPage,
  updatePage,
  updatePageOrder,
  deletePage
};