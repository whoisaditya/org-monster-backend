const router = require("express").Router();

const user = require("../controllers/user");

router.post("/adduser", user.adduser);
router.put("/addorg/:id", user.addorg);
router.put("/removeorg/:id", user.removeorg);


module.exports = router;