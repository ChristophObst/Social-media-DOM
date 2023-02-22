console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

// Elemente als Variablen definieren:
const article = document.createElement("article");
const paragraph = document.createElement("p");
const footer = document.createElement("footer");
const span = document.createElement("span");
const button = document.createElement("button");

// den Variablen die Styles zuordnen:
article.classList.add("post");
paragraph.classList.add("post__content");
footer.classList.add("post__footer");
span.classList.add("post__username");
button.classList.add("post__button");

// den Elementen Text zuordnen:
paragraph.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
span.textContent = "@username";
button.textContent = "♥ Like";

// die Variablen als Elemente anfügen:
document.body.append(article);
article.append(paragraph);
article.append(footer);
footer.append(span);
footer.append(button);

// Button aktivieren:
button.addEventListener("click", handleLikeButtonClick);
