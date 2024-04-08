/* eslint-disable react/prop-types */
const Banner = ({banner}) =>{
    return (
        <>
        <div className='h-44 md:h-64 w-full relative overflow-hidden xl:h-[500px]'>
            <img src={banner.image} alt="" className='w-full h-full object-cover'/>
        </div>
        </>
    )
}

export default Banner;