import React from './react'



export function retrieveData() {
  const data = JSON.parse(localStorage.getItem("library"));

  if (data === null) return [];
  return data;
}

export function storeData(library) {
  localStorage.setItem("library", JSON.stringify(library));
}