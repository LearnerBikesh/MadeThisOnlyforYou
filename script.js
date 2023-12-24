let contentEl = document.querySelector(".content");
let index = 1;
let btnEl = document.querySelector(".btn");
let popUpEl = document.querySelector(".popup");
const topEl = document.querySelector(".top");

let contentText = `Heyyy Annu,
            Another year is about to pass since we are together(if we still are) , I just want to tell you that the day i asked you that question (from where this started) i have never thought of another girls to be my gf not even friend , believe me i have never loved someone like i loved you not even my family . Since it's like 5 years have passed we both changed a lot , the innocent girl that i loved is not there anymore and i am changed too.

            I know annu you will never admit my love and will always question my loyality and my character . In recent time i realized that i was forcing you to love me , i am really sorry for that. I think i wanted to be loved and that too by you only.

            मैं नही चाहता था तुम मेरे बुलाने से आओ ,
            मैं चाहता था तुम रह ना पाओ और बहाने से आओ।

            I have spend a very good time with you and fighting together were one of them. All these year annu I have never thought of leaving you but past few months and your words made me feel like that you are not happy with me.
            From now on i will never ask anything from you, be with me if you want to but if you feel that you don't love me anymore please say it , it's ok darling you didn't have to spend your life with person you choose in your adolescence , you deserve better atleast better than me .
            
            Those days i have just one prayer , god please keep us(me and you) together , but i never asked whether you wanted to be with me or not and i thing that is where i made the mistake. I just want to give you a happy life . I want you to be happy doesn't matter with me or without me, just be happy live a good life that's all matter annu.


            Made a music player for you, some songs through which i want to say many things if you can understand and some to remember old days.
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