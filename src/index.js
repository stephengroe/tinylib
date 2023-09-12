import "./style.css";
import Book from './book';

// Dummy content
const ggs = new Book(9780393317558, "Guns, Germs, and Steel", "Jared Diamond");

function buildPage() {
  const body = document.querySelector("body");
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "wrapper");
  wrapper.textContent = JSON.stringify(ggs);

  body.append(wrapper);
}

buildPage();