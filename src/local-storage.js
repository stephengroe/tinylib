import React, { useState } from 'react'

function LocalStorage() {
  // Get from local storage
  const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
  const [books, setBooks] = useState(storedBooks);
  
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
}

export function retrieveData() {
  const data = JSON.parse(localStorage.getItem("library"));

  if (data === null) return [];
  return data;
}

export function storeData(library) {
  localStorage.setItem("library", JSON.stringify(library));
}