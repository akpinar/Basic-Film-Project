const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

const ui = new UI();

eventListener();

function eventListener(){
    form.addEventListener("submit",addFilm);



}

function addFilm(e){

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === ""){
        alert(" Film ismi alanı boş bırakılmaz.");
    }
    else if(director === "" ){
        alert(" Yönetmen adı alanı boş bırakılmaz.");

    }
    else if(url === ""){
        alert(" url alanı boş bırakılmaz.");

    }

    else{
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm);
 


    }






    e.preventDefault();
}