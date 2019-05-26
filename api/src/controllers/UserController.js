const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.find({}).sort('moves');

    return res.json(users);
  },
  async store(req, res) {
    const { body } = req

    if (body.name && body.moves) {
      let user = await User.findOne({ name: body.name });

      if (user) {
        if (user.moves < body.moves) {
          user.moves = body.moves
          await user.save()
        }
      } else {
        user = await User.create(body);
      }

      const users = await User.find({}).sort('moves');

      req.io.emit('usersEmit', users);

      return res.json(user);
    }

    return res.status(400).send('Failed');
  }
}
