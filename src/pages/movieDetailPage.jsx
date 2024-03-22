import { useParams } from "react-router-dom";
import NotFoundPage from "./notFoundPage";
import { Header } from "../components/Fragments/Header";
import { MoviesData } from "../data/MoviesData"
import { useEffect, useState } from "react";
import { SelectedMovieLayout } from "../components/Layouts/SelectedMovieLayout";

export default function MovieDetailPage(){
    const { id } = useParams();
    const selectedMovie = MoviesData.find((movie) => movie.id.toString() === id);
    const [ schedule, setSchedule ] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function handleSelectTime(movie, time){
        setSchedule([
            {
                id: movie.id, 
                name: selectedMovie.name,
                mall: movie.mall, 
                location: movie.location, 
                cinema: movie.cinema, 
                price: movie.price, 
                time: time,
                image: selectedMovie.image
            }
        ])
    }

    function handleBuyTicket(){
        if(schedule == null){
            alert("Pilih dulu waktu yang anda inginkan !")
            return 
        }
        window.location.href = '/movie/' + id + '/seats'
    }

    useEffect(() => {
        localStorage.setItem('movie_schedule', JSON.stringify(schedule))
    }, [schedule])


    if(!selectedMovie){
        return <NotFoundPage/>
    }

    return(
        <>
        <Header 
        name={'HANGOUT'}
        linkTo={'/'}
        />
        <SelectedMovieLayout
        selectedMovie={selectedMovie}
        schedule={schedule}
        onClick={handleSelectTime}
        chooseSeat={handleBuyTicket}
        />
        </>
    )

}