module.exports = function(app, User)
{
  app.get('/user', async (req, res) => {
    const user = await User.find({});
    res.json(user);
  });

  app.get('/user/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) res.status(404).send("No user found");
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.post('/user', async (req, res) => {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.json(savedUser);
  });

  app.patch('/user/:id/done', async (req, res) => {
    try {
      let user = await User.findOne({ id: req.params.id });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      user.done = req.body.done;
      await user.save();
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  app.patch('/user/:id/nickName', async (req, res) => {
    try {
      let user = await User.findOne({ id: req.params.id });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      user.nickName = req.body.nickName;
      await user.save();
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  app.delete('/user/:id', async (req, res) => {
    try {
      let user = await User.findOneAndDelete({ id: req.params.id });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "User successfully deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
}
