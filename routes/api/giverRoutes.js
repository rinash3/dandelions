const router = require("express").Router();
const giverController = require("../../controllers/giverController");

// Matches with "/api/giver"
//creates using controller
router.route("/")
  .post(giverController.create);


//matches /api/giver/:email
router.route("/:email")
.get(giverController.findOne)
.put(giverController.update);

module.exports = router;