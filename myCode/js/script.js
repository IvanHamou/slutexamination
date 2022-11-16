const body = document.querySelector("body")
const main = document.querySelector("main")
const header = document.querySelector("header")
const aside = document.querySelector("aside")
const getInfo = document.querySelectorAll(".mainBeforeChanges article")

//paste in the url
const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com'
        //fetch key
        async function getKey() {
            const response = await fetch(`${BASE_URL}/keys`, { method: 'POST' })
            const data = await response.json()
            return data.key
        }
        //function to remove and add content to the body of the page 
        function updatePage(){
            body.innerHTML = ""
            header.innerHTML = ""
            body.style.backgroundImage = "url('/slutexamination/myCode/img/stars.png'), linear-gradient(to right,#0C164D,#190B23)"
            main.classList.remove("mainBeforeChanges")
            main.classList.add("mainChanges")
            aside.classList.add("aroundthesunone")
            aside.classList.add("aroundthesuntwo")
        }
        //fetch bodies
        async function getPlanets() {
            const key = await getKey()

            const response = await fetch(`${BASE_URL}/bodies`, {
                method: 'GET', 
                headers: {
                    'x-zocom': key

                }
            })
            const data = await response.json()
            
            /*loop, eventListener and AdjacentHTML to generate 
            the correct information for each planet*/
            for (let i = 0; i < getInfo.length; i++) {
                getInfo[i].addEventListener(`click`, () => {

                    updatePage()
                    getInfo[i].classList.remove("venus")

                    codeToReplace = `
                    <aside>
                        <section class = "sun"></section>
                        <section class = "aroundthesunone"></section>
                        <section class = "aroundthesuntwo"></section>
                    </aside>
                    <main class = "mainChanges">
                        <section class="description">
                            <h1>${data.bodies[i + 1].name}</h1>
                            <h3>${data.bodies[i + 1].latinName}</h3>
                            <p>${data.bodies[i + 1].desc}</p>
                        </section>
                        <hr class="divider">
                        <section class="stats">
                            <article>
                                <h4>OMKRETS</h4>
                                <p class="circumference">${data.bodies[i + 1].circumference} ${ " km"}</p>
                            </article>
                            <article>
                                <h4>KM FRÅN SOLEN</h4>
                                <p class="distance">${data.bodies[i + 1].distance} ${ " km"}</p>
                            </article>
                            <article>
                                <h4>MAX TEMPERATUR</h4>
                                <p class="tempday">${data.bodies[i + 1].temp.day} ${"C"}</p>
                            </article>
                            <article>
                                <h4>MIN TEMPERATUR</h4>
                                <p class="tempnight">${data.bodies[i + 1].temp.night} ${"C"}</p>
                            </article>
                        </section>
                        <hr class="divider">
                        <section class="moons">
                            <h4>MÅNAR</h4>
                            <p class="moonsp">${data.bodies[i + 1].moons}</p>
                        </section> 
                    </main>
                    <footer><img src="/slutexamination/myCode/img/Zocom-logo-white 1.png" alt="ZoCom">`   
                    body.insertAdjacentHTML('beforeend', codeToReplace);

                    /*declaring the aside design and change its color 
                    depending on which planet gets clicked */
                    const sun = document.querySelector(".sun")
                    console.log(sun);

                    if (data.bodies[i].id == 0){
                        sun.style.backgroundColor = "#888888";
                    }
                    else if (data.bodies[i].id == 1){
                        sun.style.backgroundColor = "#E7CDCD";
                    }
                    else if (data.bodies[i].id == 2){
                        sun.style.backgroundColor = "#428ED4";
                    }
                    else if (data.bodies[i].id == 3){
                        sun.style.backgroundColor = "#EF5F5F";
                    }
                    else if (data.bodies[i].id == 4){
                        sun.style.backgroundColor = "#E29468";
                    }
                    else if (data.bodies[i].id == 5){
                        sun.style.backgroundColor = "#C7AA72";
                    }
                    else if (data.bodies[i].id == 6){
                        sun.style.backgroundColor = "#C9D4F1";
                    }
                    else {
                        sun.style.backgroundColor = "#7A91A7";
                    }


                })
            }   
        
            /*loop, eventListener and AdjacentHTML to generate 
            the correct information for the sun*/
            const sun = document.querySelector(".sun")
            console.log(sun);

                sun.addEventListener(`click`, () => {


                    updatePage()
                    codeToReplace = `
                    <aside>
                    <section class = "sun"></section>
                    <section class = "aroundthesunone"></section>
                    <section class = "aroundthesuntwo"></section>
                </aside>
                <main class = "mainChanges">
                    <section class="description">
                    <h1>${data.bodies[0].name}</h1>
                    <h3>${data.bodies[0].latinName}</h3>
                    <p>${data.bodies[0].desc}</p>
                </section>
                <hr class="divider">
                <section class="stats">
                    <article>
                        <h4>OMKRETS</h4>
                        <p class="circumference">${data.bodies[0].circumference} ${ " km"}</p>
                    </article>
                    <article>
                        <h4>KM FRÅN SOLEN</h4>
                        <p class="distance">${data.bodies[0].distance} ${ " km"}</p>
                    </article>
                    <article>
                        <h4>MAX TEMPERATUR</h4>
                        <p class="tempday">${data.bodies[0].temp.day} ${"C"}</p>
                    </article>
                    <article>
                        <h4>MIN TEMPERATUR</h4>
                        <p class="tempnight">${data.bodies[0].temp.night} ${"C"}</p>
                    </article>
                </section>
                <hr class="divider">
                <section class="moons">
                    <h4>MÅNAR</h4>
                    <p class="moonsp">${data.bodies[0].moons}</p>
                </section> 
                </main>
                <footer><img src="/slutexamination/myCode/img/Zocom-logo-white 1.png" alt="ZoCom">`   
                body.insertAdjacentHTML('beforeend', codeToReplace);
                })
            

        }   

        getKey()
        getPlanets();











