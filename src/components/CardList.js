import Card from "./Card";
import './NavBar.css'


const CardList = ({movies}) => {



    return(
        <div className="grid">
        {movies.map((movie, i) =>{
            return(
                <Card
                    key = {i}
                    title ={movies[i].title}
                    overview={movies[i].overview}
                    vote_average={movies[i].vote_average}
                    poster_path={movies[i].poster_path}
                    id= {movies[i].id}


                    />
                

            )
        })}
   
        </div>
    )
}

export default CardList