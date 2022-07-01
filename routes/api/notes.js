const path = require('path');
const router = require('express').Router();
const { getNotes, addNote, deleteNote} = require('../../lib/notes');
const fs = require('fs');
const {v4: uuid } = require('uuid');


router.get('/notes', function(req, res) {
  console.log(`${req.method} route /api/notes`)
  const notes = getNotes();
  res.json(notes);
});

router.post('/notes', function(req, res) {
  const {title, text} = req.body
  const id = uuid()
  const newNote = {id, title, text}
  addNote(newNote)

  const response = {
    status: 'success'
  }
  res.json(response);
  console.log(`${req.method} route /api/notes`)
});

router.delete('/notes/:id', function(req, res) {

  const {id} = req.params
  deleteNote(id)

  const response = {
    status: 'success'
  }
  res.json(response);
  console.log(`${req.method} route /notes/:id`)
});


module.exports = router;