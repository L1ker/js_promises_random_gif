function setup() {
  const key = "t0VhO5TvTZOUUoPGsx3SkBeP64WFeyOO";
  const url = `http://api.giphy.com/v1/gifs/random?api_key=${key}`;
  let canvas = document.querySelector("#defaultCanvas0");
  let img = document.getElementById("gif");
  let button = document.getElementById("refresh-button");
  canvas.style.display = "none";
  let test = "Testchange";

  function getGIF() {
    let promise = fetch(url);
    promise
      .then(response => {
        return response.json();
      })
      .then(object => {
        img.src = object.data.images["original"].url;
      });
  }

  button.onclick = () => getGIF();
}
