/* eslint-disable react/prop-types */
import { ActorsFrag } from "../Fragments/ActorsFrag";
import { Synopsis } from "../Fragments/Synopsis";

export function SynopsisLayout({selectedMovie, actor, actorProfile}){
    return(
        <>
        <div className="py-4 px-4 bg-white">
        <Synopsis
            selectedMovie={selectedMovie}
        />
        <div className="mt-6 mb-8 bg-white">
            <ActorsFrag
            actor={actor}
            actorProfile={actorProfile}
            />
        </div>

        </div>
        </>
    )
}