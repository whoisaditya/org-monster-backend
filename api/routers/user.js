const router = require("express").Router();
const user = require("../controllers/user");

router.post("/adduser", user.adduser);
router.put("/updateorg/:id", user.updateorg);

module.exports = router;