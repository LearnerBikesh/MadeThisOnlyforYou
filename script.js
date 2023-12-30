let contentEl = document.querySelector(".content");
let index = 1;
let btnEl = document.querySelector(".btn");
let popUpEl = document.querySelector(".popup");
const topEl = document.querySelector(".top");
const bodyEl = document.querySelector("body");
let contentText = `Heyyy Annu,
As the clock ticks towards a new year, my love for you deepens with each passing moment. In the tapestry(complexity) of time, our journey together is woven with threads of laughter, shared dreams, and the warmth of your presence by my side. As we stand on the cusp of a new beginning, I find myself grateful for the beautiful moments we've created and excited for the countless ones that lie ahead.

In your eyes, I see the reflection of a thousand possibilities, and in your embrace, I find the comfort of a home I never knew I needed. This new year isn't just a change in dates, it's a canvas waiting for us to paint it with the vibrant(exciting) hues(shades) of our love. Together, we'll craft a story filled with adventures, resilience, and the unwavering(constant) bond that defines us.

As the stars illuminate the midnight sky, I am reminded of the sparkle in your eyes that lights up my darkest days. Your laughter is the melody that resonates in my heart, and your love is the poetry that dances on my soul. In this coming year, I promise to cherish you even more, to be your pillar of strength, and to celebrate every triumph and face every challenge hand in hand.

May the upcoming year bring us moments of joy that outweigh the sorrows, and may our love continue to grow, resilient as a timeless oak. Let's make memories that linger in our hearts, like the sweet fragrance of a blooming flower. With you, every day is an adventure, and I eagerly await the new chapters we'll write together in the book of our lives.

So here's to us, to our love that transcends(gone beyond) time, and to the countless tomorrows that we'll navigate together. Happy New Year, my love. Thank you for being my constant, my confidant, and the love of my life. Cheers to a year filled with love, laughter, and endless possibilities with you.

As I sit down to pen this letter, my heart races with the thoughts of you - your smile, the way your laughter plays like music in my ears, and the intoxicating allure(attraction) that is uniquely yours. There's a fire in my soul that only you can ignite, and with every beat of my heart, it chants your name(sometimes at night too).

From the moment our eyes first locked, a magnetic pull drew me to you, and since then, my world has been brighter, more vibrant, and undeniably filled with passion. Your presence is an aphrodisiac(things that stimulates sexual desire), and the chemistry between us is like a symphony of desire, building to crescendos that leave us breathless.

In the quiet moments, I find myself yearning for the taste of your lips, the warmth of your skin pressed against mine, and the electric current that courses through our bodies when our desires collide. The way your fingertips trace patterns on my skin sends shivers down my spine, awakening a primal hunger that only you can satiate.

Our love is a dance of flames, and I revel(enjoy) in the heat that radiates from our connection. Behind closed doors, where inhibitions melt away, we explore the depths of passion, creating an intimate world that is exclusively ours. Your moans are the sweetest melody, echoing the pleasure that courses through our entwined(interwine) bodies.

In the realm of desire, you are my muse, and our intimacy is a canvas where we paint with the colors of our most primal instincts. Your whispered fantasies are secrets only shared between us, forging a bond that goes beyond the physical, transcending into the sacred space where our souls entwine.

As I write these words, I can't help but smile at the mischievous spark in your eyes, the one that promises adventures untold. Our love is a journey, and every stolen glance, every lingering touch, is a chapter in the story of us. Together, we script a narrative that celebrates the boundless dimensions of our connection.

So, my love, let's continue to explore the uncharted territories of passion, embracing the naughty whispers that dance between us. Here's to the laughter, the shared secrets, and the tantalizing moments that make our love an exhilarating adventure.

With all my love and desire, Happy new year darling
            `;

const type = () => {
  let newContent = contentText.slice(0, index);
  contentEl.innerText = newContent;
  if (index != contentText.length) {
    index++;
  } else {
    return;
  }
  setTimeout(() => {
    type();
  }, 50);
};
type();

let d = new Date();
let year = d.getFullYear();
let date = d.getDate();
// document.querySelector(".video").style.display = 'none';

const videoEL = document.querySelector(".video");
// let playme = setInterval(()=>{

//   const audioEl = document.querySelector("audio");
//   if(date === 1){
//     videoEL.src = "fireworks.mp4";
//     videoEL.style.display = "block";
//     videoEL.style.zIndex = "-1";
//     setTimeout(()=>{
//       videoEL.src = "newYear.mp4";
//       setTimeout(()=>{
//         bodyEl.style.backgroundImage = "url('alexander-grey-J3m69BAg30s-unsplash.jpg')";
//       } , 20000)
//     } , 20000)
//     clearInterval(playme);
//   } , 2000);

let playme = setInterval(() => {
  const audioEl = document.querySelector("audio");
  if (date === 1) {
    videoEL.src = "fireworks.mp4";
    videoEL.style.display = "block";
    videoEL.style.zIndex = "-1";
    setTimeout(() => {
      videoEL.src = "newYear.mp4";
      setTimeout(() => {
        bodyEl.style.backgroundImage =
          "url('alexander-grey-J3m69BAg30s-unsplash.jpg')";
      }, 20000);
    }, 20000);
    clearInterval(playme);
  }
}, 2000);

btnEl.addEventListener("click", () => {
  if (year !== 2024) {
    popUpEl.style.display = "flex";
    topEl.style.opacity = "0.2";
  } else {
    window.location.href = "MusicPlayer/Index17.html";
  }
});

window.onclick = (event) => {
  if (!event.target.matches(".btn")) {
    if (popUpEl.style.display == "flex") {
      popUpEl.style.display = "none";
      topEl.style.opacity = "1";
    }
  }
};
popUpEl.addEventListener("click", (event) => {
  event.stopPropagation();
});
