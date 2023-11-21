let form = document.querySelector(".form")

html = `<form>
<label for="name">Skriv navnet ditt her</label><br>
<input type="text" for="name"><br><br>
<label for="answer">Skriv svaret ditt her</label><br>
<input type="text" for="answer"><br><br>
<input type="submit" value="Send inn">
</form>`

form.innerHTML = html