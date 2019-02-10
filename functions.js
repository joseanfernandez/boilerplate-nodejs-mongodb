const User = require('./models/user');
const Item = require('./models/item');
const Log = require('./log');

async function getUsers(path) {
  const data = await User.find({}, (err, users) => {
    if (err) {
      return {};
    } else {
      if (users.length === 0) {
        Log.warning('There are no ' + path);
        return {};
      } else {
        Log.success('Getting ' + path);
        return users;
      }
    }
  });

  return data;
}

async function getUser(path, id) {
  const data = await User.findById(id, (err, users) => {
    if (err) {
      return {};
    } else {
      if (users.length === 0) {
        Log.warning('There is no ' + path);
        return {};
      } else {
        Log.success('Getting ' + path);
        return users;
      }
    }
  });

  return data;
}



async function getItems(path) {
  const data = await Item.find({}, (err, items) => {
    if (err) {
      return {};
    } else {
      if (items.length === 0) {
        Log.warning('There are not ' + path);
        return {};
      } else {
        Log.success('Getting ' + path);
        return items;
      }
    }
  });
  
  return data;
}


module.exports = {
  getUsers,
  getUser,
  getItems,
}