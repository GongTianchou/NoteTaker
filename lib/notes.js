
const fs = require('fs');

function getNotes(){
  const rawData = fs.readFileSync('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Successfully retrieved note.')
      return data;
    }
  });
  const notes = JSON.parse(rawData);
  return notes;
}

function addNote(note){
  let notes = getNotes();
  notes.push(note);
  fs.writeFileSync('./db/db.json', JSON.stringify(notes, null, 2), (err) => {
    if(err){
      console.error(err)
    } else {
      console.log('Successfully added note.')
    }
  })
  return notes;
}

function deleteNote(id){
  const notes = getNotes();
  const updatedNotes = notes.filter(note => note.id !== id);
  fs.writeFileSync('./db/db.json', JSON.stringify(updatedNotes, null, 2), (err) => {
    if(err){
      console.error(err)
    } else {
      console.log('Successfully deleted note.')
    }
  })
  return notes;
}

module.exports = {
  getNotes,
  addNote,
  deleteNote
}