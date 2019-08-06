const db = require("../models");

// Defining methods for the WishsController
module.exports = {
  //finds wish by id
  findById: function(req, res) {
    db.Wish
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //creates wish where the wish object should already be made in req.body
  create: function(req, res) {
    db.Wish
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //TO UPDATE STATUS SENT/COMPLETED/NOT SHIPPED/ ETC.
  update: function(req, res) {
    db.Wish
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //incase wisher decides to delete their wish or giver wants to remove from their list
  remove: function(req, res) {
    db.Wish
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
