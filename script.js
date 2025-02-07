document.getElementById("no").addEventListener("mouseover", function() {
    let x = Math.random() * window.innerWidth * 0.8;
    let y = Math.random() * window.innerHeight * 0.8;
this.style.left = x + "px";
this.style.top = y + "px";
});
 
document.getElementById("yes").addEventListener("click", function() {
    alert("Yay! I knew it ❤️🥰");
});