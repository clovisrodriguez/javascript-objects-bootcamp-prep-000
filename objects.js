var playlist = {
  artistName: "songTitle"
};

function updatePlaylist (object, propertie, value) {
  object.propertie = value
  return object
}

function removeFromPlaylist (object, propertie) {
  delete object.propertie
  return object
}