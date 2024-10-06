---
title: THIS LAST
toc: false
style: style.css
header: false
footer: false
sidebar: false
pager: false
---
<div id="v3" class="field"></div>

```js
// import { play } from "./player.js";
const tsShow = [270,179,280,810,560,169,649,750];
const tsBetween = [0,40,0,149,760,0,459,0];
function sleep(millis) {
  if (millis < 0) millis = 0;
  return new Promise(resolve => setTimeout(resolve, millis));
}
const play = async (displayDiv, tsShow, tsBetween) => {
  console.log("in play");
  const verbs = ["SEE", "HEAR", "TASTE", "KNOW", "FEEL"];
  const randomIndex = () => Math.floor(Math.random() * verbs.length);
  let thisLast = ["THIS", "IS", "MY", "LAST", "TIME", "TO", ""];
  let thisLastIndex = 0;
  let wordDiv;
  let counter = 0;
  while (counter < 100) {
    // await Promises.delay(3000);
    if (thisLastIndex == thisLast.length - 1) {
      thisLast[thisLastIndex] = verbs[randomIndex()];
    }
    wordDiv = document.createElement("div");
    wordDiv.classList.add("spel","time");
    wordDiv.innerText = thisLast[thisLastIndex];
    wordDiv.style.opacity = 0;
    // console.log(thisLast[thisLastIndex]); // DEBUG
    displayDiv.appendChild(wordDiv);
    // console.log(wordDiv); // DEBUG
    await sleep(100); // time for the page to register the new element
    wordDiv.style.opacity = 1;
    await sleep(1600 + 2 * tsShow[thisLastIndex]);
    // wordDiv.style.opacity = 0;
    wordDiv.style.transform = "rotate3d(0,1,0,90deg)";
    await sleep(1600 + 2 * tsBetween[thisLastIndex]);
    displayDiv.removeChild(wordDiv);
    thisLastIndex = ++thisLastIndex % thisLast.length;
  }
}
play(document.getElementById("v3"), tsShow, tsBetween);
```