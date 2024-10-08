---
title: THIS LAST
toc: false
style: style.css
header: false
footer: false
sidebar: false
pager: false
---
<div id="v3" class="field">
  <div id=s0 class="spel this" style="opacity:1;transform:rotate3d(0,1,0,90deg)">THIS</div>
  <div id=s1 class="spel is" style="opacity:1;transform:rotate3d(0,1,0,90deg)">IS</div>
  <div id=s2 class="spel my" style="opacity:1;transform:rotate3d(0,1,0,90deg)">MY</div>
  <div id=s3 class="spel last" style="opacity:1;transform:rotate3d(0,1,0,90deg)">LAST</div>
  <div id=s4 class="spel time" style="opacity:1;transform:rotate3d(0,1,0,90deg)">TIME</div>
  <div id=s5 class="spel to" style="opacity:1;1;transform:rotate3d(0,1,0,90deg)">TO</div>
  <div id=s6 class="spel feel" style="opacity:1;transform:rotate3d(0,1,0,90deg)">FEEL</div>
  <div id=s7 class="spel hear" style="opacity:1;transform:rotate3d(0,1,0,90deg)">HEAR</div>
  <div id=s8 class="spel know" style="opacity:1;transform:rotate3d(0,1,0,90deg)">KNOW</div>
  <div id=s9 class="spel read" style="opacity:1;transform:rotate3d(0,1,0,90deg)">READ</div>
  <div id=s10 class="spel see" style="opacity:1;transform:rotate3d(0,1,0,90deg)">SEE</div>
  <div id=s11 class="spel taste" style="opacity:1;transform:rotate3d(0,1,0,90deg)">TASTE</div>
  <div id=s12 class="spel touch" style="opacity:1;transform:rotate3d(0,1,0,90deg)">TOUCH</div>
</div>

```js
// import { play } from "./player.js";
const tsShow = [270,179,280,810,560,169,649,750];
const tsBetween = [0,40,0,149,760,0,459,0];
const thisLength = 7;
const transitionMs = 4100;
const tsFactor = 1;
function sleep(millis) {
  if (millis < 0) millis = 0;
  return new Promise(resolve => setTimeout(resolve, millis));
}
console.log("v3");
const play = async (displayDiv, tsShow, tsBetween) => {
  console.log("in play");
  const verbs = ["FEEL", "HEAR", "KNOW", "READ", "SEE", "TASTE", "TOUCH"];
  const randomIndex = () => Math.floor(Math.random() * verbs.length);
  // let thisLast = ["THIS", "IS", "MY", "LAST", "TIME", "TO", ""];
  let thisLastIndex = 0;
  let verbIndex, lastVerbIndex = 0, wordDiv, wordClass, lastWordDiv = document.getElementById("s6");
  let counter = 0;
  while (counter < 100) {
    // await Promises.delay(3000);
    wordDiv = document.getElementById("s" + thisLastIndex);
    if (thisLastIndex == thisLength - 1) {
      do {
        verbIndex = randomIndex() + 6;
      } while (verbIndex == lastVerbIndex);
      lastVerbIndex = verbIndex;
      wordDiv = document.getElementById("s" + verbIndex);
      // wordDiv.classList.add(word.toLowerCase());
    }
    // wordDiv.classList.add("spel","time");
    // wordDiv.innerText = thisLast[thisLastIndex];
    // wordDiv.style.opacity = 0;
    // console.log(thisLast[thisLastIndex]); // DEBUG
    // displayDiv.appendChild(wordDiv);
    await sleep(100); // time for the page to register the new element
    // wordDiv.style.opacity = 1;
    wordDiv.style.transform = "rotate3d(0,1,0,0deg)";
    lastWordDiv.style.transform = "rotate3d(0,1,0,90deg)";
    await sleep(transitionMs + tsFactor * tsShow[thisLastIndex]);
    // wordDiv.style.opacity = 0;
    await sleep(transitionMs + tsFactor * tsBetween[thisLastIndex]);
    // displayDiv.removeChild(wordDiv);
    // if (thisLastIndex == thisLength - 1) {
    //   wordDiv.classList.remove(word.toLowerCase());
    // }
    thisLastIndex = ++thisLastIndex % thisLength;
    // await sleep(1600);
    // wordDiv.style.opacity = 0;
    lastWordDiv = wordDiv;
  }
}
play(document.getElementById("v3"), tsShow, tsBetween);
```