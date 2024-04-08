import { Link } from "react-router-dom"

const MovieFrag = ({movie}) => {
    return(
        <Link to={`/movie/${movie.id}`}  className="w-full h-full object-cover">
            <img src={movie.image} alt=""  className="w-full h-full object-cover"/>
        </Link>
    )
}

export default MovieFrag;