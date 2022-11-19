const express = require("express");
const router = express.Router();
const userController = require("../controllers/user_controller");
const middleware = require("../middleware/users");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
router.post("/loadregister", userController.getCalls);
router.post("/markup", userController.markCall);
router.post("/register", middleware.validateRegister, userController.register);
router.post("/login", userController.login);

module.exports = router;
