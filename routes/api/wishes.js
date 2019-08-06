const router = require("express").Router();
const wisherController = require("../../controllers/wisherController");

// Matches with "/api/wishes"
//finds all wishes wishes/creates using controller
router.route("/")
  .get(wishController.findAll)
  .post(wishController.create);

// Matches with "/api/wish /:id"
router
  .route("/:id")
  .get(wishController.findById)
  .put(wishController.update)
  .delete(wishController.remove);

module.exports = router;
