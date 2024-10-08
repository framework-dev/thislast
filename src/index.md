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
  <div id=s0 class="spel this" style="transform:rotate3d(0,1,0,90deg)">THIS</div>
  <div id=s1 class="spel is" style="transform:rotate3d(0,1,0,90deg)">IS</div>
  <div id=s2 class="spel my" style="transform:rotate3d(0,1,0,90deg)">MY</div>
  <div id=s3 class="spel last" style="transform:rotate3d(0,1,0,90deg)">LAST</div>
  <div id=s4 class="spel time" style="transform:rotate3d(0,1,0,90deg)">TIME</div>
  <div id=s5 class="spel to" style="1;transform:rotate3d(0,1,0,90deg)">TO</div>
  <div id=s6 class="spel feel" style="transform:rotate3d(0,1,0,90deg)">FEEL</div>
  <div id=s7 class="spel hear" style="transform:rotate3d(0,1,0,90deg)">HEAR</div>
  <div id=s8 class="spel know" style="transform:rotate3d(0,1,0,90deg)">KNOW</div>
  <div id=s9 class="spel read" style="transform:rotate3d(0,1,0,90deg)">READ</div>
  <div id=s10 class="spel say" style="transform:rotate3d(0,1,0,90deg)">SAY</div>
  <div id=s11 class="spel see" style="transform:rotate3d(0,1,0,90deg)">SEE</div>
  <div id=s12 class="spel taste" style="transform:rotate3d(0,1,0,90deg)">TASTE</div>
  <div id=s13 class="spel touch" style="transform:rotate3d(0,1,0,90deg)">TOUCH</div>
</div>

```js
// import { play } from "./player.js";
const tsShow = [700,179,280,700,560,169,649,750];
const tsBetween = [0,40,0,149,300,0,450,0];
const thisLength = 7, verbLength = 8;
const transitionMs = 3050;
const tsFactor = 1.2;
const randomIndex = (maxLen) => Math.floor(Math.random() * maxLen);
function sleep(millis) {
  if (millis < 0) millis = 0;
  return new Promise(resolve => setTimeout(resolve, millis));
}
console.log("v3");
const play = async (displayDiv, tsShow, tsBetween) => {
  console.log("in play");
  let thisLastIndex = 0;
  let verbIndex, lastVerbIndex = 0, wordDiv, lastWordDiv = document.getElementById("s6");
  let counter = 0;
  while (counter < Number.MAX_SAFE_INTEGER) {
    wordDiv = document.getElementById("s" + thisLastIndex);
    if (thisLastIndex == thisLength - 1) {
      do {
        verbIndex = randomIndex(verbLength) + (thisLength - 1);
      } while (verbIndex == lastVerbIndex);
      lastVerbIndex = verbIndex;
      wordDiv = document.getElementById("s" + verbIndex);
    }
    wordDiv.style.transform = "rotate3d(0,1,0,0deg)";
    lastWordDiv.style.transform = `rotate3d(0,1,0,${randomIndex(2) == 1 ? "270" : "90"}deg)`;
    await sleep(transitionMs + tsFactor * tsShow[thisLastIndex]);
    await sleep(transitionMs + tsFactor * tsBetween[thisLastIndex]);
    thisLastIndex = ++thisLastIndex % thisLength;
    lastWordDiv = wordDiv;
    ++counter;
  }
}
play(document.getElementById("v3"), tsShow, tsBetween);
```