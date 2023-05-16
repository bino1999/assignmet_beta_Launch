const express = require("express");
const router = express.Router();
const empController = require("../controllers/empController");

router.post("/addEmployee", empController.createEmployee);
router.get("/getAllEmployees", empController.getEmployees);
router.delete("/deleteEmployee/:id", empController.deleteEmployee);
router.get("/getSingleEmployee/:id", empController.getEmployeeById);
router.put("/updateEmployee/:id", empController.updateEmployee);

module.exports = router;
