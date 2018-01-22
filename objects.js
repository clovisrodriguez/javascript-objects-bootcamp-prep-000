var playlist = {
  artistName: "song title"
};

function updatePlaylist (object, propertie, value) {
  object.propertie = value
  return object
}

function removeFromPlaylist (object, propertie) {
  delete object.propertie
  return object
}