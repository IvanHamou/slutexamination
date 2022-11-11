const main = document.querySelector('main');
const btn = document.querySelector('button');


const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';
// API nyckel att använda ifall man enbart siktar på godkänt: solaris-vKkkQHqQboi7c6JF

btn.addEventListener('click', async function() {

async function getKey() {
    const response = await fetch(`${BASE_URL}/keys`, { method: 'POST' });
    const data = await response.json();
    console.log(data);
}

async function getPlanets() {
    const response = await fetch(`${BASE_URL}/bodies`, {
        headers: {
            'x-zocom': 'solaris-vKkkQHqQboi7c6JF'
        }
    });
    const data = await response.json();
    console.log(data);
    updateDOM(data);

    let askd = data.bodies 
    console.log(data.bodies[1]);

}

function updateDOM(data) {
    main.innerHTML = ""
    let template = ""

    template =`
    <article>
        <h1>${data.bodies[1].name}</h1>
    </article>`

    console.log(data.name);

    main.insertAdjacentHTML('beforeend', template);
}

getKey()
getPlanets();



})/*


const btn = document.querySelector('button');

async function getKey() {
    const response = await fetch(`${BASE_URL}/keys`, { method: 'POST' });
    const data = await response.json();
    console.log(data);
}


btn.addEventListener('click', async function(){

    const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';

    const resp =  await fetch(`${BASE_URL}/bodies`);
    const data = await resp.json();
    console.log(data);
    data.forEach(beer => {
        let el = `
        <article>
            <img src="${beer.image_url}" alt="${beer.name}" />
            <h2>${beer.name}</h2>
            <p>${beer.description}</p>
            <p>styrka: ${beer.ph}%</p>
        </article>
        `

        document.querySelector('main').insertAdjacentHTML('beforeend', el)
    });


})*/