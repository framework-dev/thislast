---
title: THIS LAST
toc: false
header: false
footer: false
sidebar: false
pager: false
---
<div id="v3" class="field">
  <div id=s0 class="spel this">THIS</div>
  <div id=s1 class="spel is">IS</div>
  <div id=s2 class="spel my">MY</div>
  <div id=s3 class="spel last">LAST</div>
  <div id=s4 class="spel time">TIME</div>
  <div id=s5 class="spel to">TO</div>
  <div id=s6 class="spel feel">FEEL</div>
  <div id=s7 class="spel hear">HEAR</div>
  <div id=s8 class="spel know">KNOW</div>
  <div id=s9 class="spel read">READ</div>
  <div id=s10 class="spel say">SAY</div>
  <div id=s11 class="spel see">SEE</div>
  <div id=s12 class="spel taste">TASTE</div>
  <div id=s13 class="spel touch">TOUCH</div>
  <div id=s14 class="spel our">OUR</div>
</div>

```js
const tsShow = [50,50,50,50,50,50,50,50]; // was [700,179,280,700,560,169,649,750];
const tsBetween = [700,179,280,700,560,169,649,750]; // was [0,40,0,149,300,0,450,0];
const thisLength = 7, verbLength = 8;
const transitionMs = 3050; // +50ms relative to the setting of 3000 for the transitions in style.css
const tsFactor = 4;
const {floor, max, random} = Math;
const randomIndex = (maxLen) => floor(random() * maxLen);
function sleep(millis) {
  if (millis < 0) millis = 0;
  return new Promise(resolve => setTimeout(resolve, millis));
}
function shuffle (b) {
  let a = b.slice(); // make a copy
  let i = a.length;
  if (i < 2) return a;
  while (--i > 0) {
    let j = ~~(Math.random() * (i + 1)); // ~~ is a common optimization for Math.floor
    let t = a[j];
    a[j] = a[i];
    a[i] = t;
  }
  return a;
}
console.log("v3");
const play = async (displayDiv, tsShow, tsBetween) => {
  console.log("in play");
  let thisLastIndex = 0;
  let lastVerbIndex = 0, wordDiv, lastWordDiv = document.getElementById("s6"),theDelay, lastDelay = tsFactor * tsBetween[6];
  let counter = 0;
  let verbIndex = 0, verbIndexArray = shuffle([6,7,8,9,10,11,12,13]);
  while (counter < Number.MAX_SAFE_INTEGER) {
    wordDiv = document.getElementById("s" + thisLastIndex);
    if (thisLastIndex == thisLength - 1) {
      // do {
      //   verbIndex = randomIndex(verbLength) + (thisLength - 1);
      // } while (verbIndex == lastVerbIndex);
      // lastVerbIndex = verbIndex;
      wordDiv = document.getElementById("s" + verbIndexArray[verbIndex]);
      verbIndex = (verbIndex + 1) % verbLength;
      if (verbIndex === 0) {
        do {
          verbIndexArray = shuffle(verbIndexArray);
        } while (verbIndexArray[0] === lastVerbIndex);
        lastVerbIndex = verbIndexArray[verbLength - 1];
      }
    }
    if (thisLastIndex == 2) {
      // one in three times 'our'
      wordDiv = document.getElementById("s" + (randomIndex(3) == 0 ? 14 : 2));
    }
    // before transform
    await sleep(tsFactor * tsShow[thisLastIndex]); // had added: transitionMs + 
    // set duration of the transform
    theDelay = tsFactor * tsBetween[thisLastIndex];
    wordDiv.style.transitionDuration = `transform ${theDelay}ms`;
    // evoke transform
    // wordDiv.style.opacity = 1;
    wordDiv.style.color = 'var(--color)';
    wordDiv.style.transform = "rotate3d(0,1,0,0deg)";
    // last word transforms at the same time
    // OPTION lastWordDiv.style.transform = `rotate3d(0,1,0,${randomIndex(2) == 1 ? "270" : "90"}deg)`;
    lastWordDiv.style.transform = `rotate3d(0,1,0,90deg)`;
    // await completions of the transform
    await sleep(100 + max(lastDelay, theDelay));
    wordDiv.style.color = 'var(--color)';
    // wordDiv.style.opacity = 0;
    // await sleep(50 + theDelay); // had added: transitionMs + 
    // transform done; reset variables
    thisLastIndex = ++thisLastIndex % thisLength;
    lastDelay = theDelay;
    lastWordDiv = wordDiv;
console.log(`thisLastIndex: ${thisLastIndex}; verbIndex: ${verbIndex} ${wordDiv.innerText} ${verbIndexArray}`)
    ++counter;
  }
}
play(document.getElementById("v3"), tsShow, tsBetween);
```