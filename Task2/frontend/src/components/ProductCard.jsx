import React from 'react'

const ProductCard = ({ item = [], index = null }) => {
    return (

        <div className='group w-[240px] h-auto bg-white rounded-4xl '>
            <div className='w-[240px] h-[240px] relative overflow-hidden rounded-t-4xl cursor-pointer '>
                <img src={item.image} alt={item.name} className='w-full h-[240px] rounded-t-4xl translate-all duration-300 group-hover:scale-110' />
                <span className=' absolute top-5 right-5 text-2xl' >🤍</span>
            </div>
            <div className=' pt-5 pb-10 px-3 flex flex-col gap-1'>
                <h1 className='text-xl font-medium '>{item.name}</h1>
                <p className='text-sm text-gray-600'>{item.category}</p>
                <p className='text-lg  '>stock - {item.stock}</p>
                <div className='flex justify-between items-center gap-2'>
                    <p className='px-5 py-2 border border-gray-900  text-gray-800 font-medium rounded-lg'>{item.price}</p>
                    <button className='px-5 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-700 cursor-pointer'>Add Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard