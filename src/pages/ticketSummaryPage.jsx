import { useParams } from "react-router-dom";
import { WhiteHeader } from "../components/Fragments/WhiteHeader";
import { Rupiah } from "../utils/Rupiah";
import { useState } from "react";
import { FaTicketSimple } from "react-icons/fa6";

export default function TicketSummaryPage(){
    const { id } = useParams()
    const ticketSummary = JSON.parse(localStorage.getItem('ticket_summary'));
    const totalTicket = ticketSummary.map(ticket => ticket.total_ticket)
    const [ fee, setFee ] = useState(totalTicket * 2000)

    function handleClearSummary(){
        localStorage.removeItem('ticket_summary')
    }

    if(!ticketSummary){
        return window.location.href = '/movies'
    }

    return (
        <>
        {ticketSummary.map(sum => (
            <div key={sum.id}>
                <WhiteHeader
                    onClick={handleClearSummary}
                    linkTo={`/movie/${id}/seats`}
                    location={sum.location}
                    name={sum.mall}
                    time={sum.time}
                />
                <div className="w-full flex px-[5%] py-5 gap-5 bg-white">
                    <div className="w-28 rounded-xl overflow-hidden">
                        <img 
                        src={sum.image} 
                        alt={sum.name} 
                        />
                    </div>
                    <div>
                        <h1 className="font-bold text-lg text-yellow-400">{sum.cinema}</h1>
                        <h1 className="font-medium">{sum.name}</h1>
                        <p className="text-xs mt-3">{sum.location}</p>
                        <p className="text-xs mt-1">{sum.time}</p>
                    </div>
                </div>
                <div className="bg-white my-3 px-[5%] py-5">
                    <div className="border-t-2 border-b-2 py-4 border-neutral-100 border-dotted">
                        <h1 className="font-semibold text-base">Detail Transaksi</h1>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between mt-4">
                                <p className="text-sm text-neutral-600">{sum.total_ticket} Tiket</p>
                                <div className="flex gap-2 font-medium text-sm">
                                    {sum.seats_number.map(seat => (
                                    <p key={seat.id}>{seat.seats}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-between text-sm text-neutral-600">
                                <p>Kursi Reguler</p>
                                <p className="font-medium text-black">
                                    {Rupiah(sum.price/sum.total_ticket)}
                                    <span className="text-neutral-400 text-xs ml-1">x {sum.total_ticket}</span>
                                </p>
                            </div>
                            <div className="flex justify-between text-sm text-neutral-600">
                                <p>Biaya Layanan</p>
                                <p className="font-medium text-black">
                                    {Rupiah(fee)}
                                    <span className="text-neutral-400 text-xs ml-1">x {sum.total_ticket}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full text-xs gap-2 text-neutral-400 flex items-center py-4 px-[5%] bg-white">
                    <FaTicketSimple/>
                    <p>Tidak ada promo / voucher saat ini</p>
                </div>
                <div className="fixed bottom-0 w-full">
                    <div className="py-4 px-[5%] flex items-center justify-between bg-white">
                        <h1 className="text-sm text-neutral-600">TOTAL BAYAR</h1>
                        <h1 className="font-medium">{Rupiah(sum.price + fee)}</h1>
                    </div> 
                    <button className="py-4 w-full text-white font-semibold bg-btn-focus">
                        BAYAR SEKARANG
                    </button>
                </div>
            </div>
        ))
        }
        </>
    )
}