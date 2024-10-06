play = async (displayDiv, tsShow, tsBetween) => {
  console.log("in play");
  const verbs = ["SEE", "HEAR", "TOUCH", "TASTE", "KNOW", "FEEL"];
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
    wordDiv.classList.add("spel time");
    wordDiv.innerText = thisLast[thisLastIndex];
    wordDiv.style.opacity = 0;
    console.log(thisLast[thisLastIndex]); // DEBUG
    displayDiv.appendChild(wordDiv);
    console.log(wordDiv); // DEBUG
    await Promises.delay(100); // time for the page to register the new element
    wordDiv.style.opacity = 1;
    await Promises.delay(1600 + 2 * tsShow[thisLastIndex]);
    // wordDiv.style.opacity = 0;
    wordDiv.style.transform = "rotate3d(0,1,0,90deg)";
    await Promises.delay(1600 + 2 * tsBetween[thisLastIndex]);
    displayDiv.removeChild(wordDiv);
    thisLastIndex = ++thisLastIndex % thisLast.length;
  }
}
export { play };