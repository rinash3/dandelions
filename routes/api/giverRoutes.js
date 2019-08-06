const router = require("express").Router();
const giverController = require("../../controllers/giverController");

// Matches with "/api/giver"
//creates using controller
router.route("/")
  .post(giverController.create);

// Matches with "/api/giver/:id"
router
  .route("/:id")
  .get(giverController.findById)
  

//matches /api/giver/:email
router.route("/:email")
.get(giverController.findOne)
.put(giverController.update);

module.exports = router;