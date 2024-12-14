const cards = document.querySelectorAll(".card")

window.onscroll = () => {
    cards.forEach(card => {
        const top = window.scrollY
        const offset = card.offsetTop - 150
        const height = card.offsetHeight

        if(top >= offset && top < offset + height){
            card.classList.add("show-animate")
            console.log("Show animate")
        } else {
            card.classList.remove("show-animate")
        }
    });
}