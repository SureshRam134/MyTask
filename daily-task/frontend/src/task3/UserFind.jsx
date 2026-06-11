import React, { useMemo, useState } from 'react'

const UserFind = () => {
    const [find, setFind] = useState('')
    const [users, setUsers] = useState([
        { id: 1, name: "Sudhan" },
        { id: 2, name: "Kumar" },
        { id: 3, name: "Ravi" }
    ])
    const userFind = useMemo(() => {
        if (!find) return users
        const user = users.find((item, inx) => item.id === Number(find))
        return user ? [user] : []
    }, [users, find])
    return (
        <div>
            <h1> Ques-2 : find the user id. </h1>
            <div className='flex'>
                <p>User Find : </p>
                <input type="text" name="" id="" className='border  mx-2  px-2 ' placeholder='find user' onChange={(e) => { setFind(e.target.value) }} />
            </div>
            <table>
                <thead>
                    <tr>
                        <td>N.No</td>
                        <td>Name</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userFind.length > 0 ?
                        userFind.map((itm, inx) => (
                            <tr key={inx}>
                                <td>{itm.id}</td>
                                <td>{itm.name}</td>
                            </tr>
                        ))
                        : 
                        <tr>
                            <td>No User Found</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserFind