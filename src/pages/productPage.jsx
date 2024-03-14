import { Header } from "../components/Fragments/Header";
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ProdCard } from "../components/Elements/ProductCard/ProdCard";
import { FilterBtnLayout } from "../components/Layouts/FilterBtnLayout";
import { useContext, useEffect, useState } from "react";
import { FoodData } from "../data/FoodData";
import { TabBar } from "../components/Fragments/TabBar";
import { Rupiah } from "../utils/Rupiah";
import { CartList } from "../context/CartItem";
import { FaMagnifyingGlass, FaSearchengin } from "react-icons/fa6";
import { UserProfile } from "../context/User";

export default function FoodPage(){
    const banners = [
        {
            id: 1,
            image: '/img/food-hero.jpg'
        },
        {
            id: 2,
            image: '/img/banner-2.jpg'
        },
        {
            id: 3,
            image: '/img/promo-2.jpg'
        },
        {
            id: 4,
            image: '/img/promo-1.jpg'
        },
    ]
    const [products, setProducts] = useState([])
    const {cart, setCart} = useContext(CartList)
    const {user, setUser} = useContext(UserProfile)


    useEffect(() => {
        setProducts(FoodData)
    }, [])

    return(
        <>
        <Header
        name={'Hangout Food'}
        linkTo={'/'}
        />
        <div className="">
            <div className="px-[5%] w-full relative bg-white py-4 rounded-b-md ">
                <div className="max-w-60">
                    <h1 className="text-xl font-semibold">Hello, {user ? user[0].fullname : ''}</h1>
                    <p className="text-sm text-neutral-600">Mau nonton sambil nyemil ?</p>
                </div>
                <div className="w-full rounded-full border-2 px-3 py-2 flex items-center gap-4 mt-4 mb-4 bg-white">
                    <div>
                        <FaMagnifyingGlass
                        className="text-neutral-600"
                        />
                    </div>
                    <input 
                    type="text" 
                    placeholder="Popcorn, Milkshake, etc..."
                    className="outline-none text-sm"
                    />
                </div>
                <div className="w-full overflow-hidden mt-2">
                    <h1 className="font-semibold text-sm">Kategori</h1>
                    <FilterBtnLayout/>
                </div>
            </div>
            <div className="mt-2 py-4 mb-20 px-[5%] bg-white">
                <h1 className="font-semibold text-sm">Rekomendasi untukmu</h1>
                <p className="text-xs">Makan enak, mood enak, nonton jadi enak</p>
                <div className="w-full flex flex-col gap-3 mt-4">
                    {products.map(product => (
                        <ProdCard
                        key={product.id}
                        image={product.image}
                        alt={product.name}
                        productName={product.name}
                        cinema={product.cinema}
                        size={product.size}
                        price={Rupiah(product.price)}
                        id={product.id}
                        rating={product.rating}
                        />
                    ))}
                </div>
            </div>
        </div>
        <TabBar 
        item={cart}
        to={'/cart'}
        />
        </>
    )
}