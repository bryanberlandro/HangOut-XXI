import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa6";

export function FooterLayout(){
    return (
        <>
        <div className="w-full px-[7%] pt-7 pb-10 text-center bg-sky-800 text-white flex flex-col gap-8">
            <div className="flex flex-col">
                <h1 className="text-xl font-semibold text-white contrast-125">HANGOUT.<span className="bg-gradient-to-br from-btn to-btn-focus bg-clip-text text-transparent font-bold">XXI</span></h1>
                <p className="text-sm font-normal text-neutral-300 mt-3">Great App For Movie Lovers in Indonesia! Platform From Cinema To Buy Movie Ticket And Choose Your Seat</p>
            </div>
            <div className="">
                <h1 className="font-semibold">Hangout Support</h1>
                <p className="text-sm text-neutral-300 mt-1">E-Mail : hangout@gmail.com</p>
            </div>
            <div className="flex flex-col items-center gap-2 ">
                <h1 className="font-semibold">Follow Us</h1>
                <div className="flex gap-4 text-2xl">
                    <FaInstagram/>
                    <FaTwitter/>
                    <FaWhatsapp/>
                    <FaFacebook/>
                </div>
            </div>
        </div>
        <div className="w-full py-3 bg-btn-focus text-white text-center">
            <p className="text-xs">2024 HANGOUT.XXI - PT SUKABILANG. ALL RIGHTS RESERVED.</p>
        </div>
        </>
    )
}