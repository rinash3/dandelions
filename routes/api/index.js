const path = require("path");
const router = require("express").Router();
const givers = require("./giverRoutes");
const wishes = require("./wishesRoutes");
const wishers = require("./wisherRoutes");

router.use("/givers", givers);
router.use("/wishes",wishes);
router.use("/wishers",wishers);

module.exports=router;