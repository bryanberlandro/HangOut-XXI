import { useParams } from "react-router-dom"
import { FoodData } from "../data/FoodData"
import { Header } from "../components/Fragments/Header"
import { FaStar } from "react-icons/fa6"
import { FilterBtn } from "../components/Fragments/FilterBtn"
import { Rupiah } from "../utils/Rupiah"
import { useEffect, useState } from "react"

export default function ProductDetails(){
    const { id } = useParams()
    const isSameId = FoodData.find(food => food.id.toString() === id)
    const cartLocal = JSON.parse(localStorage.getItem('cart'))
    const [product, setProduct] = useState(cartLocal)
    
    function handleAddToCart(){
        if(product){
            // Apakah ada produk dengan id yang sama di dalam product
            const existingProduct = product.find(prod => prod.id === isSameId.id)
            if(existingProduct){
                // Produk sudah ada, tambah quantity
                const updateProduct = {
                    ...existingProduct,
                    quantity: existingProduct.quantity + 1,
                    stock: existingProduct.stock - 1
                }
                // Update Product di dalam keranjang
                const updateProductList = product.map(item => 
                    item.id === isSameId.id ? updateProduct : item    
                )

                setProduct(updateProductList)
            } else {
                // Produk belum ada di keranjang, tambah produk baru
                setProduct(
                    [...product, {
                        ...isSameId, 
                        quantity: 1, 
                        stock: product.stock - 1
                        }
                    ])
            }
            window.location.href = '/food'
        } else {
            // Tidak ada produk sama sekali, tambahkan produk pertama kedaalam keranjang
            setProduct([{...isSameId, quantity: 1}])
            window.location.href = '/food'
        }
    }

    function handleBuyNow(){
        if(product){
            // Apakah ada produk dengan id yang sama di dalam product
            const existingProduct = product.find(prod => prod.id === isSameId.id)
            if(existingProduct){
                // Produk sudah ada, tambah quantity
                const updateProduct = {
                    ...existingProduct,
                    quantity: existingProduct.quantity + 1,
                    stock: existingProduct.stock - 1
                }
                // Update Product di dalam keranjang
                const updateProductList = product.map(item => 
                    item.id === isSameId.id ? updateProduct : item    
                )

                setProduct(updateProductList)
            } else {
                // Produk belum ada di keranjang, tambah produk baru
                setProduct(
                    [...product, {
                        ...isSameId, 
                        quantity: 1, 
                        stock: isSameId.stock - 1
                        }
                    ])
            }
            window.location.href = '/cart'
        } else {
            // Tidak ada produk sama sekali, tambahkan produk pertama kedaalam keranjang
            setProduct([{...isSameId, quantity: 1, stock: isSameId.stock - 1}])
            window.location.href = '/cart'
        }
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(product))
    }, [product])
    
    console.log(product)
    
    return(
        <>
        <Header 
        name={'Food Details'}
        linkTo={'/food'}
        />
        <div className="w-full h-52 overflow-hidden relative bg-gradient-to-t from-white">
            <img 
            src={isSameId.image} 
            alt="" 
            className="w-full mix-blend-multiply h-full object-cover"
            />
        </div>
        <div className="px-8 pt-4 bg-white">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-neutral-500 text-xs">Bundle Extra</p>
                    <h1 className="font-semibold text-lg">{isSameId.name}</h1>
                </div>
                <div className="flex flex-col items-end">
                    <h1 className="text-lg font-medium">{Rupiah(isSameId.price)}</h1>
                    <div className="flex text-sm items-center gap-1">
                        <FaStar className="text-yellow-500"/>
                        <p>{isSameId.rating.rate} / {isSameId.rating.count} rates</p>
                    </div>
                </div>
            </div>
            <div className="my-6 max-w-60">
                <h1 className="font-medium">Product Details</h1>
                <p className="text-sm text-neutral-600">{isSameId.details}</p>
            </div>
            <div className="">
                <h1 className="text-neutral-600 font-medium">Size Minuman</h1>
                <div className="gap-2 flex mt-3">
                    <FilterBtn name={'Small'}/>
                    <FilterBtn name={'Medium'}/>
                    <FilterBtn name={'Large'}/>
                </div>
            </div>
            <div>
                <p>{isSameId.stock}</p>
            </div>

        </div>
        <div className="flex w-full pb-2 px-1 gap-1 fixed justify-between bottom-0">
            <button onClick={handleAddToCart} className="cursor-pointer rounded-md py-3 w-[50%]  flex justify-center text-btn border-btn border-2 font-semibold bg-white mt-4 ">
                <h1>Add To Cart</h1>
            </button>
            <button onClick={handleBuyNow} className="cursor-pointer rounded-md py-3 w-[50%] flex justify-center text-white font-semibold bg-btn mt-4 ">
                <h1>Buy Now</h1>
            </button>
        </div>
        </>
    )
}