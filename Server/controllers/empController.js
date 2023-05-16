const Employee = require("../model/empModel");

const createEmployee = (req, res) => {
  const employee = new Employee(req.body);

  employee
    .save()
    .then(() => {
      res.status(201).send(employee);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

const getEmployees = (req, res) => {
  Employee.find()
    .then((employee) => {
      res.send(employee);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

// const getEmployeeById = (req, res) => {
//   const id = req.params.id;

//   Employee.findById(id)
//     .then((employee) => {
//       if (!employee) {
//         return res.status(404).send();
//       }

//       res.send(employee);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// };

const getEmployeeById = (req, res) => {
  Employee.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(404).json({ noCartfound: "No Cart found" }));
}





const updateEmployee = (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  Employee.findByIdAndUpdate(id, updates, { new: true })
    .then((employee) => {
      if (!employee) {
        return res.status(404).send();
      }

      res.send(employee);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};


const deleteEmployee = (req, res) => {
  const id = req.params.id;

  Employee.findByIdAndDelete(id)
    .then((employee) => {
      if (!employee) {
        return res.status(404).send();
      }

      res.send(employee);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

module.exports = {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
