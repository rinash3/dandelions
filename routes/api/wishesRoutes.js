const router = require("express").Router();
const wishController = require("../../controllers/wishController");

// Matches with "/api/wishes"
//creates using controller
router.route("/")
  .post(wishController.create);

// Matches with "/api/wishes /:id"
router
  .route("/:email")
  .get(wishController.findById)
  .put(wishController.update)
  .delete(wishController.remove);

module.exports = router;
