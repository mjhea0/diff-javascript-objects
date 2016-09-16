function getDiff(oldList, updatedList, callback) {
  // iterate through old list
  const removedAndChangedUsers = oldList.map((item) => {
    // is old user in the new list?
    const user = findUserById(item.id, updatedList);
    // no? => call callback
    if (!user) {
      const userObject = {
        type: 'REMOVED',
        id: item.id
      };
      return userObject;
    }
    // yes? => check to see if the user has been changed
    return listChanges(item, user);
  });
  // get new users
  const newUsers = newUsers(oldList, updatedList);
  // add new users to the list
  callback(null, removedAndChangedUsers.concat(newUsers));
}

// *** helpers *** //

function findUserById(id, array) {
  return array.filter((user) => user.id === id)[0];
}

function newUsers(oldList, updatedList) {
  // iterating through the new list
  return updatedList.map((prev, curr) => {
    // is new user in the old list?
    const user = findUserById(curr.id, oldList);
    // no?
    if (!user) {
      const newObject = curr;
      newObject.type = 'ADD';
      return newObject;
    }
    // yes?
    return prev;
  });
}

function listChanges(currentUser, newUser) {
  const updatedUser = {
    id: currentUser.id,
    type: 'CHANGE'
  };
  for (let prop in currentUser) {
    if (currentUser[prop] !== newUser[prop]) {
      updatedUser[prop] = newUser[prop];
    }
  }
  return updatedUser;
}

module.exports = {
  getDiff
};
