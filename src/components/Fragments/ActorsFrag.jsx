/* eslint-disable react/prop-types */
export function ActorsFrag({actor, actorProfile}){
    return (
        <>
            <h1 className="font-semibold text-lg">Actors</h1>
                <div className="flex gap-2 mt-4">
                    {actor.map(actor => (
                        <div key={actor.id} className="text-center">
                            {
                                actorProfile
                                ?   <div className="w-32 h-44 relative rounded-md   shadow-soft overflow-hidden">
                                    <img src={actorProfile} alt=""    className="w-full h-full object-cover"/>
                                </div>
                                :   <div className="w-32 h-44 rounded-md border-2 shadow-soft bg-gradient-to-br from-neutral-300 via-white to-neutral-200">
                                </div>
                            }
                            <p className="mt-3 text-sm">{actor.name}</p>
                        </div>
                    ))
                    }
                </div>
        </>
    )
}