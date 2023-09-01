const preloader = document.querySelector(".preloader");

// function xhr1999(url, cb) {
//     preloader.classList.add("active")
//     const x = new XMLHttpRequest();
//     x.open("GET", url);
//     x.send();
//     x.addEventListener("error", () => {
//         alert("перевірте зєднання з internet")
//     })
//     x.addEventListener("readystatechange", () => {
//         if (x.readyState === 4 && x.status >= 200 && x.status < 300) {
//             cb(JSON.parse(x.responseText))

//                 preloader.classList.remove("active")
//         } else if (x.readyState === 4) {
//             alert("Виникла помилка у Вашому запиті, оновіть сторінку!")
//         }
//     })
// }


async function fetch2015(url) {

    preloader.classList.add("active")

    try {
        const response = await fetch(url)
        const result = await response.json()
        showData(result)
    }
    catch (error) {
        console.error('error')
    }
}


function showData({ results }) {
    if (!Array.isArray(results)) return;

    const box = document.querySelector(".box");
    box.classList.add("box-content")
    box.innerText = ""

    results.forEach(({ name, image, id }) => {
        const div = document.createElement("div");
        const elName = document.createElement("h2");
        const img = document.createElement("img");
        div.classList.add("card");
        elName.innerText = name;
        img.src = image;
        img.alt = name;
        div.dataset.id = id;
        div.append(img, elName);
        box.append(div)
    })
    preloader.classList.remove("active")
}

/*
const btns = {
    characters = document.querySelector("[data-info='Characters']"),
    locations = document.querySelector("[data-info='Locations']"),
    episodes = document.querySelector("[data-info='Episodes']"),
}
*/

const [...allLi] = document.querySelectorAll("header li");

allLi.forEach(el => {
    if (el.innerHTML === "Characters") {
        el.addEventListener("click", () => {
            fetch2015('https://rickandmortyapi.com/api/character')
        })
    } else if (el.innerHTML === "Locations") {
        el.addEventListener("click", () => {
            fetch2015('https://rickandmortyapi.com/api/location')
        })
    } else if (el.innerHTML === "Episodes") {
        el.addEventListener("click", () => {
            fetch2015('https://rickandmortyapi.com/api/episode')
        })
    }
})





