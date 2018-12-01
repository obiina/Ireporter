const express = require('express');

const router = express.Router();
const users = [
  {
    id: 1,
    firstname: 'Obinna',
    lastname: 'Chimezie',
    othernames: 'Neville',
    email: 'Obinna932@gmail.com',
    phoneNumber: '080288209',
    username: 'TheSnitch',
    registered: '3 / 25 / 2015',
    isAdmin: false,
  },
  {
    id: 2,
    firstname: 'David',
    lastname: 'Nnamdi',
    othernames: 'Neville',
    email: 'Obinna932@gmail.com',
    phoneNumber: '080288209',
    username: 'Thecoolguy',
    registered: '3 / 25 / 2015',
    isAdmin: false,
  },
  {
    id: 3,
    firstname: 'James',
    lastname: 'Chidi',
    othernames: 'Neville',
    email: 'Obinna932@gmail.com',
    phoneNumber: '080288209',
    username: 'Thereporter',
    registered: '3 / 25 / 2015',
    isAdmin: true,
  },
];

router.post('/', (req, res, next) => {
  const user = {
    id: users.length + 1,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    othernames: req.body.othernames,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    username: req.body.username,
    registered: req.body.registered,
    isAdmin: false,
  };

  res.status(200).json({
    message: 'Creating a User',
    user,
  });
  users.push(user);
});

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Getting all the users',
    users,
  });

});




router.post('/login', (req, res, next) => {  
  const user = users.find(user => user.username === req.body.username);
  if (!user) {
    throw new Error(`Username provided is invalid ${req.body.username}`);
}
res.json({ user })
});


router.post('/admin', (req, res, next) => {  
  const user = users.filter(user => user.username === req.body.username);
  const admincheck = user.find(admin => admin.isAdmin === true);
  if (!admincheck) {
    throw new Error(`You do not have Admin Access ${req.body.username}`);
}
res.json({ admincheck })
});



router.patch('/:usersId', (req, res, next) => {
  res.status(200).json({
    message: 'updated user!',
  });
});

module.exports = router;
