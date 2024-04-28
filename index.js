const btn = document.querySelector("button");
const vika = document.querySelector(".vika");
const imgVika = vika.querySelector("img")
const textVika = vika.querySelector("p")

btn.addEventListener("click", () => {
    vika.style.animation = "an 2s linear forwards"
})

imgVika.addEventListener("click", () => {
    textVika.style.color = "transparent"
    imgVika.style.width = "400px"
})