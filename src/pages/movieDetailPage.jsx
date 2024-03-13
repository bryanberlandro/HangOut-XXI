import { useParams } from "react-router-dom";
import NotFoundPage from "./notFoundPage";
import { Header } from "../components/Fragments/Header";
import { MoviesData } from "../data/MoviesData"
import { useEffect } from "react";
import { SelectedMovieLayout } from "../components/Layouts/SelectedMovieLayout";

export default function MovieDetailPage(){
    const { id } = useParams();
    const selectedMovie = MoviesData.find((movie) => movie.id.toString() === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


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
        />
        </>
    )

}