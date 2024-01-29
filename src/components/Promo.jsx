import { FaFire } from 'react-icons/fa6'
import banner from '../assets/img/promo-1.jpg'
import { Ads } from './Ads'

export function Promo(){
    return(
        <>
        <div className="px-[5%] mb-5 mt-20 md:px-[8%]">
            <div className='flex gap-2 items-center text-lg'>
            <h1 className="font-medium">Hangout Food</h1>
            <FaFire className='text-red-400 animate-bounce'/>
            </div>
            <p className="text-sm text-zinc-500 mt-1">Nonton lebih asik bareng cemilan favoritmu. Pesannya lebih mudah pake Hangout food !</p>
            <div className="w-full rounded-md h-32 relative overflow-hidden mt-4 md:h-52 md:mt-6">
                <img src={banner} alt="" className='w-full h-full object-cover'/>
            </div>
        </div>
            <Ads/>
        </>
    )
}