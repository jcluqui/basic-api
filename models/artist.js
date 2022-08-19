const mongodb = require("mongodb");
const getDb = require('../util/database').getDb;

class Artist {
  constructor(first_name, last_name, song_id, served_quantity, server_date) {
    this.first_name: first_name;
    this.last_name: last_name;
    this.song_id: song_id;
    this.served_quantity: served_quantity;
    this.server_date: server_date;
  }

static findById(artistId) {
    const db = getDb();
    return db
      .collection('artists')
      .find({_id: new mongodb.ObjectId(artistId)})
      .next()
      .then(artist => {
        console.log(artist);
        return artist;
      })
      .catch(err => {
        console.log(err);
    });
  }
}

module.exports = Artist;
