if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  const items = document.getElementById("container");

  async function generateWikiItem(breed) {

    const url1 = "https://dog.ceo/api/breed/" + breed + "/images/random";
    const imgPromise = await fetch(url1);
    const imgJSON = await imgPromise.json();

    console.log(imgJSON);

    const url2 = "https://en.wikipedia.org/api/rest_v1/page/summary/" + breed;
    const textPromise = await fetch(url2);
    const textJSON = await textPromise.json();

    let div1 = document.createElement("div");
    let h1 = document.createElement("h1");
    let div2 = document.createElement("div");
    let p = document.createElement("p");
    let div3 = document.createElement("div");
    let img = document.createElement("img");

    div1.classList.add("wiki-item");
    h1.classList.add("wiki-header");
    div2.classList.add("wiki-content");
    p.classList.add("wiki-text");
    div3.classList.add("img-container");
    img.classList.add("wiki-img");

    h1.innerText = breed;
    p.innerText = textJSON.extract;
    img.src = imgJSON.message;

    div1.appendChild(h1);
    div1.appendChild(div2);
    div2.appendChild(p);
    div2.appendChild(div3);
    div3.appendChild(img);
    items.appendChild(div1);
  }
  
  generateWikiItem("affenpinscher");
  generateWikiItem("beagle");
  generateWikiItem("corgi");
  generateWikiItem("dachshund");
  generateWikiItem("shihtzu");
}
