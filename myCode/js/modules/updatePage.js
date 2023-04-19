const body = document.querySelector("body")
const main = document.querySelector("main")
const header = document.querySelector("header")
const aside = document.querySelector("aside")
const getInfo = document.querySelectorAll(".mainBeforeChanges article")

function updatePage(){
    body.innerHTML = ""
    header.innerHTML = ""
    body.style.backgroundImage = "url('/slutexamination/myCode/img/stars.png'), linear-gradient(to right,#0C164D,#190B23)"
    main.classList.remove("mainBeforeChanges")
    main.classList.add("mainChanges")
    aside.classList.add("aroundthesunone")
    aside.classList.add("aroundthesuntwo")
}

export { updatePage }