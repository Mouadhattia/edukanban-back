const { Section } = require("../models/Section");
const { Page } = require("../models/Page");

// Create a new section
const createSection = async (req, res) => {
  try {
    const { page_id, type, label, content, order_index } = req.body;

    // Verify page exists
    const page = await Page.findById(page_id);
    if (!page) {
      return res.status(404).json({ message: "Page not found" });
    }

    console.log("order_index", order_index);
    // Increment order_index of existing sections with the same page_id
    // and order_index >= the incoming order_index
    await Section.updateMany(
      { page_id, order_index: { $gte: order_index } },
      { $inc: { order_index: 1 } }
    );

    // Create and save the new section
    const section = new Section({
      page_id,
      type,
      label,
      content,
      order_index,
    });

    await section.save();

    res.status(201).json(section);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating section",
      error: error.message,
      validationError: error.errors,
    });
  }
};

// Get all sections for a page
const getSections = async (req, res) => {
  try {
    const { page_id } = req.params;
    const sections = await Section.find({ page_id }).sort("order_index");

    res.json(sections);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching sections", error: error.message });
  }
};

// Get single section
const getSection = async (req, res) => {
  try {
    const section = await Section.findById(req.params.id);
    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }

    res.json(section);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching section", error: error.message });
  }
};

// Update section
const updateSection = async (req, res) => {
  try {
    const { type, label, content } = req.body;
    const section = await Section.findById(req.params.id);

    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }

    // Update fields
    if (type) section.type = type;
    if (label) section.label = label;
    if (content) section.content = content;

    await section.save();

    res.json(section);
  } catch (error) {
    res.status(500).json({
      message: "Error updating section",
      error: error.message,
      validationError: error.errors, // Include mongoose validation errors if any
    });
  }
};

// Update section order
const updateSectionOrder = async (req, res) => {
  try {
    const { sectionId, newIndex } = req.body;

    // Get the section to move
    const section = await Section.findById(sectionId);
    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }

    const oldIndex = section.order_index;
    const pageId = section.page_id;

    // Find the target section with the new index on the same page
    const targetSection = await Section.findOne({
      page_id: pageId,
      order_index: newIndex,
    });
    if (!targetSection) {
      return res
        .status(404)
        .json({ message: "Target section not found at the new index" });
    }

    // Step 1: Temporarily move one to a neutral index to avoid unique conflict
    await Section.findByIdAndUpdate(targetSection._id, { order_index: -1 });

    // Step 2: Update the moving section to the new index
    await Section.findByIdAndUpdate(sectionId, { order_index: newIndex });

    // Step 3: Move the original target to the old index
    await Section.findByIdAndUpdate(targetSection._id, {
      order_index: oldIndex,
    });
    const pageSections = await Section.find({ page_id: pageId }).sort(
      "order_index"
    );
    res.json(pageSections);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating section order", error: error.message });
  }
};

// Delete section
const deleteSection = async (req, res) => {
  try {
    const section = await Section.findById(req.params.id);

    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }

    const { page_id, order_index } = section;

    // Step 1: Delete the section first to avoid duplicate key conflict
    await section.deleteOne();

    // Step 2: Decrement order_index of all following sections
    await Section.updateMany(
      { page_id, order_index: { $gt: order_index } },
      { $inc: { order_index: -1 } }
    );

    res.json({ message: "Section deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error deleting section", error: error.message });
  }
};

// Duplicate section
const duplicateSection = async (req, res) => {
  try {
    const originalSection = await Section.findById(req.params.id);
    if (!originalSection) {
      return res.status(404).json({ message: "Section not found" });
    }

    // Get highest order_index and add 1
    const highestOrder = await Section.findOne({
      page_id: originalSection.page_id,
    }).sort("-order_index");
    const order_index = highestOrder ? highestOrder.order_index + 1 : 0;

    // Create new section with same content but new order
    const newSection = new Section({
      page_id: originalSection.page_id,
      type: originalSection.type,
      label: `${originalSection.label} (Copy)`,
      content: originalSection.content,
      order_index,
    });

    await newSection.save();

    res.status(201).json({
      message: "Section duplicated successfully",
      section: newSection,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error duplicating section", error: error.message });
  }
};

module.exports = {
  createSection,
  getSections,
  getSection,
  updateSection,
  updateSectionOrder,
  deleteSection,
  duplicateSection,
};
