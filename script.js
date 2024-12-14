// api used for cards information :- https://potterapi-fedeperin.vercel.app/en/characters

let clutter = ``

function deleteBtn(button){
    // event.target is the element that triggered the event. For example, 
    // if the user clicks the "Delete" button, event.target will refer to that button
    //And after targeting te button then we use `.closest()` to get it's parent div or container

    // const card = event.target.closest(".card");
    // const cardIndex = this.getAttribute("index")

    const removeCard = button.closest(".card")

    if (removeCard) {
        removeCard.remove();
        alert("User Deleted")
    }
}


async function getData(){
    const container = document.querySelector(".container")
    const res = await fetch("https://potterapi-fedeperin.vercel.app/en/characters")
    const chars = await res.json()
    
    if (res.ok) {
        chars.forEach(character => {
            clutter += `<div class="card p-4 rounded m-4">
            <div class="heading font-semibold mb-2 text-2xl text-purple-600"><h1>${character.fullName}</h1></div>
            <div class="image"><img class="rounded object-fill" src=${character.image} alt=""></div>
            <div class="description mt-3 mb-4">
                <p class="text-xl text-purple-400">${character.birthdate}</p>
                <p class="text-xl text-purple-400">${character.hogwartsHouse}</p>
            </div>
                <div class="deleteBtn">
                    <button class="bg-red-600 rounded px-6 py-3" onclick="deleteBtn(this)">Delete</button>
                </div>
            </div>`

            container.innerHTML = clutter
        });
        window.addEventListener( "scroll" , animate)
    }
}

function animate(){
    const cards = document.querySelectorAll(".card")
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY

    cards.forEach(card => {
        const offset = card.offsetTop - 100
        const height = card.offsetHeight

        if(scrollTop + windowHeight >= offset && scrollTop < offset + height){
            card.classList.add("show-animate")
        } else {
            card.classList.remove("show-animate")
        }
    });
}

getData()