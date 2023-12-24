const body = document.querySelector("body");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = (Math.random() * 100)+"vw";
    heart.style.fontSize = ((Math.random() * 30 ) + 5) + "px";
    heart.style.animationDuration = (Math.random()*3)+8+"s"
    body.appendChild(heart);
}
setInterval(createHeart,800);
setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart")
    if (heartArr.length > 30) {
       heartArr[0].remove()
    }
    console.log(heartArr);
},200)
