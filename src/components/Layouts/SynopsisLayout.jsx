/* eslint-disable react/prop-types */
import { ActorsFrag } from "../Fragments/ActorsFrag";
import { Synopsis } from "../Fragments/Synopsis";

export function SynopsisLayout({selectedMovie, actor, actorProfile}){
    return(
        <>
        <div className="py-4 px-4">
        <Synopsis
            selectedMovie={selectedMovie}
        />
        <div className="mt-6">
            <ActorsFrag
            actor={actor}
            actorProfile={actorProfile}
            />
        </div>

        </div>
        </>
    )
}