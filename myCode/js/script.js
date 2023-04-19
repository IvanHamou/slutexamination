import { updatePage } from "./modules/updatePage.js"


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, addDoc, collection, deleteDoc, getDocs, doc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBWE2tEpkckDrhxvw0r0Bj2KxC9oZRA7Lo",
  authDomain: "solaris-bc040.firebaseapp.com",
  projectId: "solaris-bc040",
  storageBucket: "solaris-bc040.appspot.com",
  messagingSenderId: "98304726415",
  appId: "1:98304726415:web:c5a3b8bbe1e83bde62e7fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const body = document.querySelector("body")
const main = document.querySelector("main")
const header = document.querySelector("header")
const aside = document.querySelector("aside")
const getInfo = document.querySelectorAll(".mainBeforeChanges article")

//paste in the url
const BASE_URL = 'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/solaris-api'
        //fetch key
        async function getKey() {
            const response = await fetch(`${BASE_URL}/keys`)
            const data = await response.json()
            return data.key
        }
        //function to remove and add content to the body of the page 

        //fetch bodies      a
        async function getPlanets() {
            //const key = await getKey()

            //const response = await fetch(`${BASE_URL}/bodies`, {
                const response = await fetch("../js/data.json",{
                method: 'GET'});
                const data = await response.json()
                //headers: {
                //    'x-zocom': key
//
                //}
            //})





            /*loop, eventListener and AdjacentHTML to generate 
            the correct information for each planet*/
            for (let i = 0; i < getInfo.length; i++) {
                getInfo[i].addEventListener(`click`, () => {

                    updatePage()
                    getInfo[i].classList.remove("venus")

                    const codeToReplace = `
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
                        <section class="theButtons">
                        <button class="button1">Spara som favorit</button>
                        <button class="button2">Ta bort som favorit</button>
                        </section>
                    </main>
                    <footer><img src="/slutexamination/myCode/img/Zocom-logo-white 1.png" alt="ZoCom">`   
                    body.insertAdjacentHTML('beforeend', codeToReplace);

                    /*declaring the aside design and change its color 
                    depending on which planet gets clicked */
                    const sun = document.querySelector(".sun")
                    const button1 = document.querySelector(".button1")
                    const button2 = document.querySelector(".button2")

                    if (data.bodies[i].id == 0){
                        sun.style.backgroundColor = "#888888";
                        button1.style.backgroundColor = "#888888";
                    }
                    else if (data.bodies[i].id == 1){
                        sun.style.backgroundColor = "#E7CDCD";
                        button1.style.backgroundColor = "#E7CDCD";
                    }
                    else if (data.bodies[i].id == 2){
                        sun.style.backgroundColor = "#428ED4";
                        button1.style.backgroundColor = "#428ED4";
                    }
                    else if (data.bodies[i].id == 3){
                        sun.style.backgroundColor = "#EF5F5F";
                        button1.style.backgroundColor = "#EF5F5F";
                    }
                    else if (data.bodies[i].id == 4){
                        sun.style.backgroundColor = "#E29468";
                        button1.style.backgroundColor = "#E29468";
                    }
                    else if (data.bodies[i].id == 5){
                        sun.style.backgroundColor = "#C7AA72";
                        button1.style.backgroundColor = "#C7AA72";
                    }
                    else if (data.bodies[i].id == 6){
                        sun.style.backgroundColor = "#C9D4F1";
                        button1.style.backgroundColor = "#C9D4F1";
                    }
                    else {
                        sun.style.backgroundColor = "#7A91A7";
                        button1.style.backgroundColor = "#7A91A7";
                    }

                       
                         
                         
                       
                        button1.addEventListener("click", removeEvent)

                        function removeEvent() {
                            let clicks = false
                            let selectedPlanet = data.bodies[i + 1].name
                            saveToDatabase(selectedPlanet)
                            getAllPlanets()
                            button1.innerText="Planeten har sparats som favorit!"
                            clicks = true 
                            if (clicks = true ) {
                                button1.removeEventListener("click", removeEvent)
                            }
                            console.log(clicks);
                        }
                    
                    
                     
                    button2.addEventListener("click", () => {
                    
                        let selectedPlanet = data.bodies[i + 1].name
                        removeFromDatabase(selectedPlanet)
                        button2.innerText="Planeten har tagits bort som favorit!"
                        //removeFromDatabase()
                        getAllPlanets()
                        button1.addEventListener("click", removeEvent)
                        })
                    
                    
                })
                               
            }   
        
            /*loop, eventListener and AdjacentHTML to generate 
            the correct information for the sun*/
            const sun = document.querySelector(".sun")
            

                sun.addEventListener(`click`, () => {


                    updatePage()
                    const codeToReplace = `
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
                <section class="theButtons">
                <button class="button1">Spara som favorit</button>
                <button class="button2">Ta bort som favorit</button>
                </section>
                </main>
                <footer><img src="/slutexamination/myCode/img/Zocom-logo-white 1.png" alt="ZoCom">`   
                body.insertAdjacentHTML('beforeend', codeToReplace);

                const button1 = document.querySelector(".button1")
                const button2 = document.querySelector(".button2")
                button1.style.backgroundColor = "#FFD029";

                button1.addEventListener("click", () => {

                    let selectedPlanet = data.bodies[0].name
                    saveToDatabase(selectedPlanet)
                    button1.innerText="Solen har sparats som favorit!"

                })

                button2.addEventListener("click", () => {
                    
                    //let selectedPlanet = data.bodies[i + 1].name
                    //saveToDatabase(selectedPlanet)
                    button2.innerText="Planeten har sparats som favorit!"

                })

            })
            console.log(getAllPlanets());
                
        }   

        //getKey()
        getPlanets();

        let planetID
        async function saveToDatabase(selectedPlanet) {
            await addDoc(collection(db, 'Planets'), {  
                selectedPlanet
            });   
            
        }

        async function removeFromDatabase() {
            
            console.log(planetID);
            await deleteDoc(doc(db, "Planets", planetID))// where("selectedPlanet", "==", ""))

        }

        async function getAllPlanets() {
            const selected = await getDocs(collection(db, 'Planets'));  
             
            selected.forEach(planet => {
                console.log(planet.data()); 
                planetID = planet.id 
                
            });    
            
            //click()
        }

        //getAllPlanets()










