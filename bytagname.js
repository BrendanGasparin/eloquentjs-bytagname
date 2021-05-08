/*
    bytagname.js
    Date: 2021-05-09
    A function that takes a node and a string, then returns an array of all the node's descendants that have a tag matching the string.
    This is an exercise from https://eloquentjavascript.net/14_dom.html.
*/

// return all child elements of node that have the given tag name
function byTagName(node, tagName) {
    return node.getElementsByTagName(tagName);
  }

// test byTagName() function
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