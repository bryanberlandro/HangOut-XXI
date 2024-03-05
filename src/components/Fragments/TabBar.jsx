import { Rupiah } from "../../utils/Rupiah"

export const TabBar = () => {
    return(
        <>
        <div className="w-full fixed flex justify-center items-center bottom-0 pb-2 px-4 h-max">
            <div className="w-full h-12 rounded-full py-7 px-10 bg-btn relative z-50 text-white flex items-center justify-between ">
                <div>
                    <h1 className="font-medium text-sm">1 item</h1>
                    <p className="text-neutral-300 text-xs">Pop Corn Hazelnut...</p>
                </div>
                <div className="flex items-center">
                    <h1 className="font-medium">{Rupiah(42000)}</h1>
                </div>
            </div>
        </div>
        </>
    )
}