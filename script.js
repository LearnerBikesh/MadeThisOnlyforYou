let contentEl = document.querySelector(".content");
let index = 1;
let btnEl = document.querySelector(".btn");
let popUpEl = document.querySelector(".popup");
const topEl = document.querySelector(".top");

let contentText = `Heyyy Annu,
           

            मैं नही चाहता था तुम मेरे बुलाने से आओ ,
            मैं चाहता था तुम रह ना पाओ और बहाने से आओ।
`

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
btnEl.addEventListener("click", () => {
  let d = new Date();
  let year = d.getFullYear();
  if (year !== 2024) {
    popUpEl.style.display = "flex";
    topEl.style.opacity = "0.2";
  } else {
    window.location.href = "MusicPlayer/Index17.html";
  }
});

window.onclick = (event)=>{
    if(!event.target.matches('.btn')){
        console.log("hey");
        if(popUpEl.style.display == 'flex'){
            popUpEl.style.display = 'none';
            topEl.style.opacity = "1";
        }
    }
}
popUpEl.addEventListener('click' , event => {
    event.stopPropagation();
})
