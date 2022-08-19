const mongodb = require('mongodb');
const = require('../models/artist');

const ObjectId = mongodb.ObjectId;

exports.gets = (req, res, next) => {
  .fetchAll()
    .then(artist => {
      res.render('artist/profile', {
        artist: artist,
        pageTitle: 'Artist',
        path: '/artist/profile'
      });
    })
    .catch(err => console.log(err));
};
