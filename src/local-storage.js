function retrieveLibrary() {
  return JSON.parse(localStorage.getItem('library')) || [];
}

function updateLibrary(library) {
  localStorage.setItem("library", JSON.stringify(library));
}

export { retrieveLibrary, updateLibrary };