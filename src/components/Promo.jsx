import { FaFire } from 'react-icons/fa6'
import banner from '../assets/img/banner-3.jpg'
import { Ads } from './Ads'

export function Promo(){
    return(
        <>
        <div className="px-[5%] mb-5">
            <div className='flex gap-2 items-center text-lg'>
            <h1 className="font-medium">Hangout Food</h1>
            <FaFire className='text-red-400'/>
            </div>
            <p className="text-sm text-zinc-500 mt-1">Nonton lebih asik bareng cemilan favoritmu. Pesannya lebih mudah pake Hangout food !</p>
            <div className="w-full rounded-md h-24 relative overflow-hidden mt-4">
                <img src={banner} alt="" className='w-full h-full object-cover'/>
            </div>
        </div>
            <Ads/>
        </>
    )
}