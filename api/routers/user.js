const router = require("express").Router();

const user = require("../controllers/user");

router.put("/addorg/:id", user.addorg);
router.put("/removeorg/:id", user.addorg);


module.exports = router;