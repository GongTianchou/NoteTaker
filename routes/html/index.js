const path = require('path');
const router = require('express').Router();

router.get('/', function(req, res) {
  console.log(`${req.method} route /`)
  res.sendFile(path.join(__dirname, '../../public/index.html'))
});

router.get('/notes', function(req, res) {
  console.log(`${req.method} route /notes`)
  res.sendFile(path.join(__dirname, '../../public/notes.html'))
});


router.get('*', function(req, res) {
  console.log(`${req.method} route *`)
  res.sendFile(path.join(__dirname, '../../public/index.html'))
});

module.exports = router;