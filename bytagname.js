function byTagName(node, tagName) {
    // Your code here.
  }

function setup() {
    console.log(byTagName(document.body, "h1").length);
    // → 1
    console.log(byTagName(document.body, "span").length);
    // → 3
    let para = document.querySelector("p");
    console.log(byTagName(para, "span").length);
    // → 2
}

  document.addEventListener('DOMContentLoaded', setup);