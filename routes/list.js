const router = require("express").Router();
const user = require("../model/user");
const List = require("../model/list");

//add task
router.post("/addtask", async (req, res) => {
  try {
    const { title, body, id } = req.body;
    const existinguser = await user.findById(id);
    if (existinguser) {
      const list = new List({
        title,
        body,
        user: existinguser,
      });

      await list.save().then(() => res.status(200).json({ list }));
      existinguser.List.push(list);
      existinguser.save();
    }
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(200).json({ message: "Internal server error" });
  }
});

//update task
router.put("/updatetask/:id", async (req, res) => {
  try {
    const { title, body, id } = req.body;

    const updatedList = await List.findByIdAndUpdate(req.params.id, {
      title,
      body,
    });
    updatedList
      .save()
      .then(() => res.status(200).json({ message: "Task Updated" }));
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//delete Task
router.delete("/deletetask/:id", async (req, res) => {
  try {
    const deletedList = await List.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task Deleted" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
// get task
router.get("/gettask/:id", async (req, res) => {
  try {
    const existinguser = await List.find({ user: req.params.id }).sort({
      createdAt: -1,
    });

    if (existinguser.length !== 0) {
      res.status(200).json({ list: existinguser });
    }
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(200).json({ message: "no Task" });
  }
});

module.exports = router;
