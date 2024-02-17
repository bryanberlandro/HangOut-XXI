/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function Notification({display}){
    return(
        <>
            <div className={`w-full ${display} text-xs items-center text-white justify-between px-6 overflow-hidden z-50 sticky top-14 bg-btn py-3`}>
                <p>Kamu belum punya akun?</p>
                <Link to={'/login'}>
                    <div className="rounded-xl bg-white px-4 py-1">
                        <p className="font-medium text-btn-focus text-xs">MASUK / DAFTAR</p>
                    </div>
                </Link>
            </div>
        </>
    )
}