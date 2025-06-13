const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const siteController = require('../controllers/siteController');
const pageController = require('../controllers/pageController');
const sectionController = require('../controllers/sectionController');

// Site routes

router.post('/sites',  siteController.createSite);
router.get('/sites',  siteController.getSites);
router.get('/sites/:id',  siteController.getSite);
router.put('/sites/:id',  siteController.updateSite);
router.delete('/sites/:id',  siteController.deleteSite);
router.put('/sites/:id/settings',  siteController.updateSiteSettings);

// Page routes
router.post('/pages',  pageController.createPage);
router.get('/sites/:site_id/pages',  pageController.getPages);
router.get('/pages/:id',  pageController.getPage);
router.put('/pages/:id',  pageController.updatePage);
router.put('/pages/order',  pageController.updatePageOrder);
router.delete('/pages/:id',  pageController.deletePage);

// Section routes
router.post('/sections',  sectionController.createSection);
router.get('/pages/:page_id/sections',  sectionController.getSections);
router.get('/sections/:id',  sectionController.getSection);
router.put('/sections/:id',  sectionController.updateSection);
router.post('/sections/order',  sectionController.updateSectionOrder);
router.delete('/sections/:id',  sectionController.deleteSection);
router.post('/sections/:id/duplicate',  sectionController.duplicateSection);

module.exports = router;