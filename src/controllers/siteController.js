const Site = require("../models/Site").Site;
const SiteSettings = require("../models/SiteSettings").SiteSettings;
const Page = require("../models/Page").Page;
const Section = require("../models/Section").Section;
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Configure multer for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = "uploads/images";
    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png|gif|webp|svg/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error("Allowed image types: JPEG, JPG, PNG, GIF, WEBP, SVG"));
  },
}).single("image");

// Create a new site
const createSite = async (req, res) => {
  try {
    const { name, domain, schoolId } = req.body;

    // Validate input
    if (!name || !domain) {
      return res.status(400).json({ message: "Name and domain are required" });
    }

    // Check if domain is already taken
    const existingSite = await Site.findOne({ domain });
    if (existingSite) {
      return res.status(400).json({ message: "Domain is already in use" });
    }

    // Create new site
    const site = new Site({
      name,
      domain,
      status: "draft",
      schoolId,
    });
    await site.save();

    // Create default site settings
    const siteSettings = new SiteSettings({
      site_id: site._id,
      colors: {
        primary: "#000000",
        secondary: "#ffffff",
        accent: "#007bff",
        background: "#ffffff",
        text: "#000000",
      },
      fonts: {
        heading: "Arial",
        body: "Arial",
      },
      seo: {
        title: site.name,
        description: "",
        keywords: [],
      },
    });
    await siteSettings.save();
    const siteData = { ...site._doc, settings: siteSettings };
    res.status(201).json(siteData);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating site", error: error.message });
  }
};

// Get all sites (with pagination and filtering)
const getSites = async (req, res) => {
  try {
    const { status, schoolId } = req.query;
    const query = {};
    query.schoolId = schoolId;
    // Add status filter if provided
    if (status && status != "all") {
      query.status = status;
    }

    // Add search filter if provided

    const sites = await Site.find(query)

      .sort({ created_at: -1 })
      .exec();

    res.json(sites);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching sites", error: error.message });
  }
};

// Get single site by ID with all related data
const getSite = async (req, res) => {
  try {
    const site = await Site.findById(req.params.id);
    if (!site) {
      return res.status(404).json({ message: "Site not found" });
    }

    // Get site settings
    const settings = await SiteSettings.findOne({ site_id: site._id });

    // Get all pages for this site
    const pages = await Page.find({ site_id: site._id }).sort("order_index");

    // Get all sections for each page
    const pagesWithSections = await Promise.all(
      pages.map(async (page) => {
        const sections = await Section.find({ page_id: page._id }).sort(
          "order_index"
        );
        return {
          ...page.toObject(),
          sections,
        };
      })
    );

    res.json({ ...site._doc, settings, pages: pagesWithSections });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching site", error: error.message });
  }
};

// Update site
const updateSite = async (req, res) => {
  try {
    const { name, domain, status, image_url } = req.body;
    const site = await Site.findById(req.params.id);

    if (!site) {
      return res.status(404).json({ message: "Site not found" });
    }

    // Check domain uniqueness if changed
    if (domain && domain !== site.domain) {
      const existingSite = await Site.findOne({ domain });
      if (existingSite) {
        return res.status(400).json({ message: "Domain is already in use" });
      }
    }

    // Update fields
    if (name) site.name = name;
    if (domain) site.domain = domain;
    if (status) site.status = status;
    if (image_url) site.image_url = image_url;

    await site.save();

    // Get site settings to include in response
    const settings = await SiteSettings.findOne({ site_id: site._id });
    const siteData = { ...site._doc, settings };

    res.json(siteData);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating site", error: error.message });
  }
};

// Delete site
const deleteSite = async (req, res) => {
  try {
    const site = await Site.findById(req.params.id);
    if (!site) {
      return res.status(404).json({ message: "Site not found" });
    }

    // Delete associated settings
    await SiteSettings.deleteOne({ site_id: site._id });
    // Delete the site
    await site.delete();

    res.json({ message: "Site deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting site", error: error.message });
  }
};

// Update site settings
const updateSiteSettings = async (req, res) => {
  try {
    const {
      colors,
      fonts,
      logo_url,
      favicon_url,
      social_links,
      analytics,
      seo,
    } = req.body;
    const settings = await SiteSettings.findOne({ site_id: req.params.id });

    if (!settings) {
      return res.status(404).json({ message: "Site settings not found" });
    }

    // Update fields if provided
    if (colors) settings.colors = { ...settings.colors, ...colors };
    if (fonts) settings.fonts = { ...settings.fonts, ...fonts };
    if (logo_url) settings.logo_url = logo_url;
    if (favicon_url) settings.favicon_url = favicon_url;
    if (social_links) settings.social_links = social_links;
    if (analytics) settings.analytics = analytics;
    if (seo) settings.seo = { ...settings.seo, ...seo };

    await settings.save();
    res.json(settings);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating site settings", error: error.message });
  }
};

// Upload image
const uploadImage = (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log(err);
      return res
        .status(400)
        .json({ message: "File upload error", error: err.message });
    } else if (err) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const imageUrl = `/api/builder/images/${req.file.filename}`;
    res.json({
      url: imageUrl,
      filename: req.file.filename,
    });
  });
};

// Get image
const getImage = (req, res) => {
  const filename = req.params.filename;
  const imagePath = path.join(__dirname, "../../uploads/images", filename);

  if (!fs.existsSync(imagePath)) {
    return res.status(404).json({ message: "Image not found" });
  }

  res.sendFile(imagePath);
};

module.exports = {
  createSite,
  getSites,
  getSite,
  updateSite,
  deleteSite,
  updateSiteSettings,
  uploadImage,
  getImage,
};
