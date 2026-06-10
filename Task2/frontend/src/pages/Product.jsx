import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../components/Wrapper'
import products from "../json/products.json";
import ProductCard from '../components/ProductCard';

const Product = () => {

    const [productData, setProductData] = useState(products)
    const [search, setSearch] = useState('')

    const filterProduct = useMemo(() => {
        return productData.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    }, [productData, search])

    return (
        <div className='min-h-screen relative bg-gray-100  '>
            <div className='flex justify-between py-3 px-10 mb-5 bg-gray-200 '>
                <div className='flex gap-3 items-center'>
                    <Link to='/' className='text-2xl'>🔙</Link>
                    <h1 className='font-medium text-3xl ' >Product</h1>
                </div>
                <input type="text"
                    placeholder='Filter the product'
                    className='py-3 bg-gray-400 w-[400px] font-medium rounded-md outline-none  px-4 placeholder::bg-gray-50 text-white' onChange={(e) => { setSearch(e.target.value) }} />
            </div>

            <Wrapper>
                <div className=''>
                    <h1 className='text-2xl font-semibold text-gray-700 mb-5' >All Product : </h1>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-center items-center '>
                        {
                            filterProduct.length > 0 ?
                                filterProduct.map((item, index) => (
                                    <ProductCard item={item} index={index} />
                                ))
                                :
                                <div className='col-span-full flex justify-center'>
                                    <div className='flex flex-col items-center bg-gray-200 w-[500px] py-10 rounded-2xl' >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                                            className="text-gray-400 mx-auto"
                                        >
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <path d="m21 21-4.3-4.3"></path>
                                            <path d="M8 11h6"></path>
                                        </svg>
                                        <p className='text-lg text-red-600 font-medium'>No Product Found</p>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Product