const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Getting all red-flags',
  });
});


const redFlags = [
  {
    id: 1,
    createdOn: 3 / 25 / 2015,
    CreatedBy: 'Micheal',
    type: 'red-flag',
    location: 'Garrison',
    status: 'Under Investigation',
    Images: 'report.jpg',
    Videos: 'dummy.mp4',
    comment: "They're Killing everyone",

  },

  {
    id: 2,
    createdOn: 3 / 25 / 2015,
    CreatedBy: 'John',
    type: 'red-flag',
    location: 'Garrison',
    status: 'Under Investigation',
    Images: 'report.jpg',
    Videos: 'dummy.mp4',
    comment: "They're Killing everyone",

  },

  {
    id: 3,
    createdOn: 3 / 25 / 2015,
    CreatedBy: 'Prince',
    type: 'red-flag',
    location: 'Garrison',
    status: 'Under Investigation',
    Images: 'report.jpg',
    Videos: 'dummy.mp4',
    comment: "They're Killing everyone",

  },
];
router.post('/', (req, res, next) => {
  const incident = {
    id: req.body.id,
    createdOn: req.body.createdOn,
    CreatedBy: req.body.CreatedBy,
    type: req.body.type,
    location: req.body.location,
    status: req.body.status,
    Images: req.body.Images,
    Videos: req.body.Videos,
    comment: req.body.comment,

  };
  
  res.status(200).json({
    message: 'creating red-flags',
    incident,


  });
  redFlags.push(incident);
});

router.get('/:redFlagId', (req, res, next) => {
  const id = req.params.redFlagId;
  if (id === '2') {
    res.status(200).json({
      message: 'You are one of the users',
      id,
    });
  } else {
    res.status(200).json({
      message: 'you passes an id',
      id,
    });
  }
});

router.patch('/:redFlagId/comment', (req, res, next) => {
  res.status(200).json({
    message: 'updated comment!',
    redFlagId: req.params.redFlagId.comment,

  });
});

router.patch('/:redFlagId/location', (req, res, next) => {
  res.status(200).json({
    message: 'updated location!',
    redFlagId: req.params.redFlagId.location,

  });
});

router.patch('/:redFlagId', (req, res, next) => {
  res.status(200).json({
    message: 'updated user!',
    redFlagId: req.params.redFlagId,

  });
});
router.delete('/:redFlagId/comment', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted comment!',
    redFlagId: req.params.redFlagId.comment,
  });
});

router.delete('/:redFlagId', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted redFlag!',
    redFlagId: req.params.redFlagId,
  });
});

module.exports = router;
