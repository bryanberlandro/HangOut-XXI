import {  FaPlay, FaShare, FaStar, FaThumbsUp, FaTicket } from "react-icons/fa6";
import { RiLogoutBoxFill } from "react-icons/ri";
import { ListItem } from "../components/Elements/ListItem/ListItem";
import { Header } from "../components/Fragments/Header";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserProfile } from "../context/User";

export default function ProfilePage(){
    const { user, setUser } = useContext(UserProfile) 
    const userProfile = user[0]

    return(
        <>
            <Header 
            name={'Akun Saya'}
            linkTo={'/'}
            />
            <div className="w-full px-[5%] py-5 bg-white">
                <div className="flex gap-4 items-center justify-center flex-col w-full">
                    {!user 
                    ?   <Link to={'/login'}>
                            <div className="py-2 px-8 text-sm bg-btn text-white rounded-md">Masuk Atau Daftar Akun</div>
                        </Link>
                    : <>
                    <div className="rounded-full w-20 h-20 shadow-soft overflow-hidden">
                    <img src="/img/jason-statham.jpg" alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="text-black text-center">
                    <h1 className="text-sm font-semibold">{userProfile.fullname}</h1>
                    <p className="text-xs text-neutral-500 mt-1">{userProfile.email}</p>
                </div>
                    </>
                    }
                    
                </div>
            </div>
            <div className="w-full mt-5">
                <div className="w-full bg-white">
                    <ListItem name={'Dapatkan Reward'}>
                        <FaStar className="text-neutral-500"/>
                    </ListItem>
                    <ListItem name={'Voucher Saya'}>
                        <FaTicket className="text-neutral-500"/>
                    </ListItem>
                </div>
                <div className="w-full bg-white mt-2">
                    <ListItem name={'Film Favorit'}>
                        <FaPlay className="text-neutral-500"/>
                    </ListItem>
                    <ListItem name={'Konten Yang Disukai'}>
                        <FaThumbsUp className="text-neutral-500"/>
                    </ListItem>
                </div>
                <div className="w-full bg-white mt-2">
                    <ListItem name={'Bagikan HANGOUT.XXI & Dapatkan Poin'}>
                        <FaShare className="text-neutral-500"/>
                    </ListItem>
                    <Link to={'/login'}>
                        <ListItem name={'Log Out'}>
                            <RiLogoutBoxFill className="text-neutral-500"/>
                        </ListItem>
                    </Link>
                </div>
            </div>
            <div className="w-full mt-20 flex justify-center items-center">
                <h1 className="font-bold tracking-widest text-neutral-300 text-xl">HANGOUT</h1>
            </div>
        </>
    )
}