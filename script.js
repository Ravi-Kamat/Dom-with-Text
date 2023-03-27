

const btn = document.getElementById("btn")
// const heading = document.getElementById("heading")
const span = document.querySelector(".text")


function changeText() {
    // let visible = span.style.display = "inline-block"
    // return visible.classList.toggle = "text"


    let heading = document.getElementById("heading");
    if (heading.innerHTML === "The most affordable learning platform") {
        heading.innerHTML = "The most affordable learning platform PW Skills";
    }
    else {
        heading.innerHTML = "The most affordable learning platform";
    }
}
btn.addEventListener("click", changeText)