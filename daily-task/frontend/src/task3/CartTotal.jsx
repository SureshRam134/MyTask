import React, { useMemo, useState } from 'react'

const CartTotal = () => {
    const [carts, setCarts] = useState(
        [
            { id: 1, name: "Laptop", price: 50000 },
            { id: 2, name: "Mobile", price: 20000 },
            { id: 3, name: "Keyboard", price: 1500 }
        ]
    )
    const [search, setSearch] = useState('')


    const productFilter = useMemo(() => {
        if (!search.trim()) return carts
        return carts.filter((itm, inx) => (
            itm.name.toLowerCase().includes(search.toLowerCase())
        ))
    }, [carts, search])

    const totalPrice = useMemo(() => {
        return productFilter.reduce((acc, item) => {
            return acc + item.price
        }, 0)
    }, [carts, search])
    return (
        <div>
            <h1> Ques-4 : Calculate Total Cart Amount (reduce())</h1>
            <div className='flex'>
                <p>Filter Product : </p>
                <input type="text" name="" id="" className='border  mx-2  px-2 ' placeholder='filter product' onChange={(e) => { setSearch(e.target.value) }} />
            </div>
            <div className='flex gap-4 py-5 px-4'>

                {
                    productFilter.length > 0 ?
                        productFilter.map((itm, inx) => (
                            <div key={inx} className='border p-5'>
                                <p>{itm.name}</p>
                                <p>{itm.price}</p>
                            </div>
                        ))
                        :
                        <div>
                            <p>No Product Found</p>
                        </div>
                }

            </div>

            <div>
                <p>Total Prduct : {carts.length}</p>
                <p>Total Amount : {totalPrice}</p>
            </div>
        </div>
    )
}

export default CartTotal