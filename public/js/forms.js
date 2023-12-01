let form = document.querySelector(".form")
const body = document.querySelector("body")

const left = document.querySelector(".clickLeft")
const right = document.querySelector(".clickRight")

html = `<form id="answerform" method='POST'>
    <label for="name">Skriv navnet ditt her (viken epost</label><br>
    <input name="epost" type="text" for="name" placeholder="deg@viken.no"><br><br>
    <label for="answer">Skriv svaret ditt her</label><br>
    <input name="svar" type="text" for="svar"><br><br>
    <input type="submit" value="Send inn">
</form>`

form.innerHTML = html;
form.addEventListener('submit', (event)=> {
    const url = window.location;
    console.log(url);
});

// body.innerHTML += `
// <div class="clickLeft"></div>
// <div class="clickRight"></div>
// `

// let currentDate = new Date()
// let currentUrl = window.location.pathname.split('/')

// if(currentUrl[2] == 1){
//     console.log("start")
//     left.addEventListener("click", () => {
//         window.location = `/`
//     })
//     right.addEventListener("click", () => {
//         let date = Number(currentUrl[2]) 
//         window.location = `/december/${date + 1}`
//     })

// } else if (currentUrl[2] == currentDate.getDate()){
//     left.addEventListener("click", () => {
//         let date = Number(currentUrl[2])
//         window.location = `/december/${date - 1}`
//     })
//     right.addEventListener("click", () => {
//         window.alert("Det er ikke den datoen ennå")
//     })

// }else if(currentUrl[2] == 24){
//     left.addEventListener("click", () => {
//         let date = Number(currentUrl[2])
//         window.location = `/december/${date - 1}`
//     })
//     right.addEventListener("click", () => {
//         window.location = `/`
//     })

// } else{
//     left.addEventListener("click", () => {
//         let date = Number(currentUrl[2])
//         window.location = `/december/${date - 1}`
//         localStorage.setItem('box' + `${date - 1}`, 'opened');
//     })
//     right.addEventListener("click", () => {
//         let date = Number(currentUrl[2]) 
//         window.location = `/december/${date + 1}`
//         localStorage.setItem('box' + `${date + 1}`, 'opened');
//     })
// }