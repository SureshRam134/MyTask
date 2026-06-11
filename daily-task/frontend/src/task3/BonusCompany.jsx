import React, { useMemo, useState } from 'react'

const BonusCompany = () => {

    const [find, setFind] = useState('')
    const [customer, setCustomer] = useState([
        { id: 1, customer: "John", amount: 5000, status: "Completed" },
        { id: 2, customer: "David", amount: 3000, status: "Pending" },
        { id: 3, customer: "Sam", amount: 7000, status: "Completed" },
        { id: 4, customer: "Peter", amount: 2000, status: "Pending" }
    ])

    const customerFind = useMemo(() => {
        if (!find.trim()) return customer
        const ctmr = customer.find((item, inx) => item.id === Number(find))
        return ctmr ? [ctmr] : []
    }, [customer, find])

    const customerFilter = useMemo(() => {
        return customerFind.filter(item => (item.status === "Completed"))
    }, [customerFind])

    const revenueAmount = useMemo(() => {
        return customerFilter.reduce((acc, itm) => (acc + itm.amount), 0)
    }, [customerFilter])

    return (
        <div>
            <h1> Ques-5 :  Bonus Company-Level Task  (map + filter + find + reduce). </h1>
            <div className='flex'>
                <p>Student Find : </p>
                <input type="text" name="find" id="" className='border  mx-2  px-2 ' placeholder='Customer Find' onChange={(e) => { setFind(e.target.value) }} />
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <td>N.No</td>
                            <td>Customer</td>
                            <td>Amount</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customerFind.length === 0 ?
                                <tr>
                                    <td>No Customer Here</td>
                                </tr> :

                                customerFilter.map((itm, inx) => (
                                    <tr key={inx}>
                                        <td>{itm.id}</td>
                                        <td>{itm.customer}</td>
                                        <td>{itm.amount}</td>
                                        <td>{itm.status}</td>
                                    </tr>
                                ))
                        }

                        <tr>
                            <td></td>
                            <td>Total Revenue</td>
                            <td> {revenueAmount}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default BonusCompany