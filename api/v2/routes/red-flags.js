const express = require('express');

const router = express.Router();

const redFlags = [
  {
    id: 1,
    createdOn: '3 / 25 / 2015',
    CreatedBy: 'Micheal',
    type: 'red-flag',
    location: 'Garrison',
    status: 'Under Investigation',
    Images: 'pics/report.jpg',
    Videos: 'dummy.mp4',
    comment: "They're Killing everyone",

  },

  {
    id: 2,
    createdOn: '3 / 25 / 2015',
    CreatedBy: 'John',
    type: 'red-flag',
    location: 'Garrison',
    status: 'Under Investigation',
    Images: 'pics/report.jpg',
    Videos: 'dummy.mp4',
    comment: "They're Killing everyone",

  },

  {
    id: 3,
    createdOn: '3 / 25 / 2015',
    CreatedBy: 'TheSnitch',
    type: 'red-flag',
    location: 'port harcourt',
    status: 'Under Investigation',
    Images: 'pics/report.jpg',
    Videos: 'dummy.mp4',
    comment: "They're Killing everyone",

  },
  {
    id: 4,
    createdOn: '3/ 25 / 2015',
    CreatedBy: 'TheSnitch',
    type: 'red-flag',
    location: 'Garrison',
    status: 'Under Investigation',
    Images: 'pics/report.jpg',
    Videos: 'dummy.mp4',
    comment: "They're Killing everyone",

  },
];
router.post('/', (req, res, next) => {
  const redFlag = {
    id: redFlags.length + 1,
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
    redFlags,
  });
  redFlags.push(redFlag);
});

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Getting all red-flags',
    redFlags,
  });
});

router.get('/user/:CreatedBy', (req, res, next) => {
  const userReports = redFlags.filter(redFlag => redFlag.CreatedBy === req.params.CreatedBy);
  res.status(200).json({ userReports });
});


router.get('/report', (req, res, next) => {
  const Reportsids = redFlags.find(redFlag => redFlag.id === parseInt(req.query.id))
  console.log(Reportsids);
  res.status(200).json({ Reportsids });
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
