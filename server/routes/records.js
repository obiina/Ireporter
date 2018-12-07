const express = require('express');
const redFlags = require('../mock-data/records.js');


const router = express.Router();


router.post('/', (req, res) => {  
  const redFlag = {
    id: redFlags.length + 1,
    title: req.body.title,
    createdOn: req.body.createdOn,
    CreatedBy: req.body.CreatedBy,
    type: req.body.type,
    location: req.body.location,
    status: req.body.status,
    comment: req.body.comment,
  };


  res.status(200).json({
    message: 'creating red-flags',
    redFlags,
  });
  redFlags.push(redFlag);
});

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Getting all red-flags',
    redFlags,
  });
});

router.get('/user/:CreatedBy', (req, res) => {
  const userReports = redFlags.filter(redFlag => redFlag.CreatedBy === req.params.CreatedBy);
  res.status(200).json({ userReports });
});

router.get('/report/:user/:status', (req, res) => {
  const reportsStatus = redFlags.filter(redFlag => redFlag.CreatedBy === req.params.user);
  if (!reportsStatus) {
    throw new Error('user not found');
  } else {
    const mainStatus = reportsStatus.filter(main => main.status === req.params.status);
    console.log(mainStatus);
    res.status(200).json({
      mainStatus,
    });
  }
});


router.get('/report', (req, res, next) => {
  const Reportsids = redFlags.find(redFlag => redFlag.id === parseInt(req.query.id));
  console.log(Reportsids);
  res.status(200).json({ Reportsids });
});


router.delete('/report', (req, res) => {
  const id = req.query.id;
  const found = false;

  redFlags.forEach((redFlag, index) => {
    if (!found && redFlag.id === parseInt(id)) {
      redFlags.splice(redFlag, id);
      res.status(200).json({
        message: 'Successfully deleted red flag',
      });
    }
  });
});


router.put('/report', (req, res) => {
  const Reportsids = redFlags.filter(redFlag => redFlag.id === parseInt(req.body.id));
  const status = req.body.status;
  console.log(Reportsids);
  if (Reportsids) {
    Reportsids.forEach((redFlag, index) => {
      redFlag.status = status;
    });
  }
  res.status(200).json({
    message: 'Updated Successfully',
  });
});

router.patch('/report/:comment', (req, res) => {
  res.status(200).json({
    message: 'updated comment!',
    redFlagId: req.params.redFlagId.comment,

  });
});

router.patch('/report/:location', (req, res) => {
  res.status(200).json({
    message: 'updated location!',
    redFlagId: req.params.redFlagId.location,

  });
});

module.exports = router;
