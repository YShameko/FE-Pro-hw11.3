"use strict";

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function handleClick() {
    const image = document.querySelector('img');
    const pictPath = image.src;
    let newPictPath = pictPath.slice(0, pictPath.lastIndexOf('/') + 1);
    const fileExt = pictPath.slice(pictPath.lastIndexOf('.'));
    newPictPath += getRandomInt(1, 9) + fileExt;
    image.setAttribute("src", newPictPath);
}  

const ourButton = document.querySelector('button');
if (ourButton) {
        ourButton.addEventListener('click', handleClick);
    } 
