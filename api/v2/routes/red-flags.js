const express = require('express');
const multer = require('multer');
const router = express.Router();
const storage = multer({
  dest: 'uploads/',
  filename: function(req, file, cb){
    cb(null, file.imageName + '-' +Date.now() + path.extname(file.originalname)); 
  }
});

const upload = multer({
  storage: storage
}).any('imageName','videoName')


const redFlags = [
  {
    id: 1,
    createdOn: '3 / 25 / 2015',
    CreatedBy: 'Micheal',
    type: 'red-flag',
    location: 'Garrison',
    status: 'Draft',
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
    status: 'Draft',
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
    status: 'Draft',
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
    status: 'Draft',
    Images: 'pics/report.jpg',
    Videos: 'dummy.mp4',
    comment: "They're Killing everyone",

  },
];
router.post('/',storage.any(), (req, res, next) => {  
  console.log(req.files);
  const redFlag = {
    id: redFlags.length + 1,
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

router.get('/report/:user/:status', (req, res, next) => {  
  const reportsStatus = redFlags.filter(redFlag => redFlag.CreatedBy === req.params.user);
  if (!reportsStatus) {
    throw new Error('user not found');
  }else{
  const mainStatus = reportsStatus.filter(main  => main.status === req.params.status)
  console.log(mainStatus);
  res.status(200).json({ 
    mainStatus
    });
  }
});


router.get('/report', (req, res, next) => {
  const Reportsids = redFlags.find(redFlag => redFlag.id === parseInt(req.query.id))
  console.log(Reportsids);
  res.status(200).json({ Reportsids });
});


router.delete('/report/:id', (req, res, next) => {
 const id = req.params.id;
 var found = false;
 redFlags.forEach(function(redFlag, index){
   if(!found && redFlag.id === parseInt(id)){
     redFlags.splice(index, 1);
   }
 });
    res.send('Successfully deleted red flag');
});


router.put('/report', (req, res, next) => {
  const Reportsids = redFlags.filter(redFlag => redFlag.id === parseInt(req.body.id))
    const status = req.body.status;
    console.log(Reportsids);
  if(Reportsids){ 
    Reportsids.forEach(function(redFlag, index){
  redFlag.status = status; 
    })
 }
  res.status(200).json({
    message: 'Updated Successfully'
  });
});

router.patch('/report/:comment', (req, res, next) => {
  res.status(200).json({
    message: 'updated comment!',
    redFlagId: req.params.redFlagId.comment,

  });
});

router.patch('/report/:location', (req, res, next) => {
  res.status(200).json({
    message: 'updated location!',
    redFlagId: req.params.redFlagId.location,

  });
});



router.delete('/:redFlagId', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted redFlag!',
    redFlagId: req.params.redFlagId,
  });
});

module.exports = router;
