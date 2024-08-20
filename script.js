let jokeTxt = document.querySelector(".jokeTxt");
let getJokeBtn = document.querySelector(".getJokeBtn");

let url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

function getJoke() {
  jokeTxt.classList.remove("active");
  fetch(url)
    .then((jokes) => jokes.json())
    .then((joke) => {
      jokeTxt.innerHTML = `${joke.joke}`;
      console.log(joke.joke);
      jokeTxt.classList.add("active");
    });
}

getJokeBtn.addEventListener("click", () => {
  getJoke();
});
