const router = require("express").Router();
const wisherController = require("../../controllers/wisherController");

// Matches with "/api/wisher"
//creates using controller
router.route("/")
  .post(wisherController.create);

  
//matches /api/wisher/:email
router.route("/:email")
.get(wisherController.findOne)
.put(wisherController.update);

module.exports = router;