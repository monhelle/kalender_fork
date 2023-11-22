let form = document.querySelector(".form")
const body = document.querySelector("body")

html = `<form>
<label for="name">Skriv navnet ditt her</label><br>
<input type="text" for="name"><br><br>
<label for="answer">Skriv svaret ditt her</label><br>
<input type="text" for="answer"><br><br>
<input type="submit" value="Send inn">
</form>`

form.innerHTML = html

body.innerHTML += `
<div class="clickLeft"></div>
<div class="clickRight"></div>
`

const left = document.querySelector(".clickLeft")
const right = document.querySelector(".clickRight")

let currentDate = new Date()
let currentUrl = window.location.pathname.split('/')

if(currentUrl[2] == 1){
    console.log("start")
    left.addEventListener("click", () => {
        window.location = `/`
    })
    right.addEventListener("click", () => {
        let date = Number(currentUrl[2]) 
        window.location = `/december/${date + 1}`
    })

} else if (currentUrl[2] == currentDate.getDate()){
    left.addEventListener("click", () => {
        let date = Number(currentUrl[2])
        window.location = `/december/${date - 1}`
    })
    right.addEventListener("click", () => {
        window.alert("Det er ikke den datoen ennå")
    })

}else if(currentUrl[2] == 24){
    left.addEventListener("click", () => {
        let date = Number(currentUrl[2])
        window.location = `/december/${date - 1}`
    })
    right.addEventListener("click", () => {
        window.location = `/`
    })

} else{
    left.addEventListener("click", () => {
        let date = Number(currentUrl[2])
        window.location = `/december/${date - 1}`
        localStorage.setItem('box' + `${date - 1}`, 'opened');
    })
    right.addEventListener("click", () => {
        let date = Number(currentUrl[2]) 
        window.location = `/december/${date + 1}`
        localStorage.setItem('box' + `${date + 1}`, 'opened');
    })
}