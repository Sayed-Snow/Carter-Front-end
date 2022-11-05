import validation from "./Formvalildation";

function getGenres (genres){
    let genre = [];
    genres.forEach(element => {
        genre.push(element.name)
    });
    let value = genre.join();
    return value
    validation()

}



export default getGenres