const express = require('express');
const users = require('../mock-data/users');

const router = express.Router();
router.post('/', (req, res) => {
  const user = {
    id: users.length + 1,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    othernames: req.body.othernames,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    username: req.body.username,
    registered: req.body.registered,
    password: req.body.password,
    isAdmin: false,
  };

  res.status(200).json({
    message: 'Creating a User',
    user,
  });
  users.push(user);
});

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Getting all the users',
    users,
  });
});


router.post('/login', (req, res) => {
  const getuser = users.filter(user => user.username === req.body.username);
  const getmain = getuser.find(user => user.password === req.body.password);
  if (!getmain) {
    throw new Error(`Username provided is invalid ${req.body.username}`);
  }
  res.json({ getmain });
});


router.post('/admin', (req, res) => {
  const user = users.filter(user => user.username === req.body.username);
  const admincheck = user.find(admin => admin.isAdmin === true);
  if (!admincheck) {
    throw new Error(`You do not have Admin Access ${req.body.username}`);
  }
  res.json({ admincheck });
});


router.patch('/:usersId', (req, res) => {
  res.status(200).json({
    message: 'updated user!',
  });
});

module.exports = router;
