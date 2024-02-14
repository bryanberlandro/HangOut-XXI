import { FaBuilding} from "react-icons/fa6";

export function MovieSchedule(){
    return (
        <>
        <div className="w-full flex flex-col gap-2">
            <div className="py-4 px-4 w-full bg-white flex flex-col gap-4">
                <div className="flex justify-between w-full">
                    <div>
                        <div className="flex gap-2">
                            <FaBuilding/>
                            <h1 className="font-semibold">Cinere</h1>
                        </div>
                        <p className="text-neutral-400 text-xs mt-1">Cinere Mall Lt.3</p>
                    </div>
                    <div className="bg-gradient-to-l py-1 px-4 h-max from-yellow-700 to-yellow-400 rounded-sm">
                        <p className="text-xs text-white font-semibold tracking-wider ">XXI</p>
                    </div>
                </div>
                <div className="flex justify-between w-full">
                    <h1 className="text-sky-800 text-sm">2D</h1>
                    <p className="font-semibold ">Rp35.000</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <button disabled className="bg-neutral-200 text-neutral-400 py-1 px-5 rounded-md">13:00</button>
                    <button disabled className="bg-neutral-200 text-neutral-400 py-1 px-5 rounded-md">14:55</button>
                    <button className="bg-white focus:bg-btn-focus focus:text-white border-2 py-1 px-5 rounded-md">16:55</button>
                    <button className="bg-white focus:bg-btn-focus focus:text-white border-2 py-1 px-5 rounded-md">18:45</button>
                    <button className="bg-white focus:bg-btn-focus focus:text-white border-2 py-1 px-5 rounded-md">20:20</button>
                </div>
            </div>
            <div className="py-4 px-4 w-full bg-white flex flex-col gap-4 mb-8">
                <div className="flex justify-between w-full">
                    <div>
                        <div className="flex gap-2">
                            <FaBuilding/>
                            <h1 className="font-semibold">Depok Mall CGV</h1>
                        </div>
                        <p className="text-neutral-400 text-xs mt-1">DMall Depok Lt.4</p>
                    </div>
                    <div className="bg-gradient-to-l py-1 px-4 h-max from-red-700 to-red-400 rounded-sm">
                        <p className="text-xs text-white font-semibold tracking-wider ">CGV</p>
                    </div>
                </div>
                <div className="flex justify-between w-full">
                    <h1 className="text-sky-800 text-sm">2D</h1>
                    <p className="font-semibold ">Rp35.000</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <button disabled className="bg-neutral-200 text-neutral-400 py-1 px-5 rounded-md">13:00</button>
                    <button disabled className="bg-neutral-200 text-neutral-400 py-1 px-5 rounded-md">14:55</button>
                    <button className="bg-white focus:bg-btn-focus focus:text-white border-2 py-1 px-5 rounded-md">16:55</button>
                    <button className="bg-white focus:bg-btn-focus focus:text-white border-2 py-1 px-5 rounded-md">18:45</button>
                    <button className="bg-white focus:bg-btn-focus focus:text-white border-2 py-1 px-5 rounded-md">20:20</button>
                </div>
            </div>
        </div>
        </>
    )
}