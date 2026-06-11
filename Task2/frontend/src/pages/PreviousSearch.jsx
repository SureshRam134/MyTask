import React, { useContext, useEffect, useRef, useState } from 'react'
import Darkmode from '../components/Darkmode';
import Wrapper from '../components/Wrapper';
import { Link } from 'react-router-dom';
import { ContextCreate } from '../context/ProvideContext';

const PreviousSearch = () => {

    const { darkModeFunction, darks } = useContext(ContextCreate)
    const [search, setSearch] = useState("");
    const [currentSearch, setCurrentSearch] = useState("");
    const [previousSearch, setPreviousSearch] = useState("");
    const prevRef = useRef("");

    useEffect(() => {
        setPreviousSearch(prevRef.current);
        prevRef.current = currentSearch;
    }, [currentSearch]);

    const handleSearch = () => {
        if (!search.trim()) return;
        setCurrentSearch(search);
        setSearch("");
    };


    return (
        <Darkmode>
            <div className='h-screen '>
                <div className='flex justify-between py-3 px-10 mb-5 bg-gray-200 '>
                    <div className='flex gap-3 items-center'>
                        <Link to='/' className='text-2xl'>🔙</Link>
                        <h1 className='font-medium text-3xl ' >Search Tracker</h1>
                    </div>
                    <button className='text-base py-2 px-4 bg-blue-800 text-white rounded-md' onClick={() => { darkModeFunction() }}>{darks ? "Dark Mode" : "Light Mode"}</button>
                </div>
                <Wrapper>
                    <div className="p-5">
                        <h1 className="text-2xl font-bold mb-4">
                            Previous Search Tracker
                        </h1>

                        <input
                            type="text"
                            placeholder="Enter Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="border p-2 rounded placeholder:text-gray-400 outline-none"
                        />

                        <button onClick={handleSearch} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer outline-none" >
                            Search
                        </button>

                        <div className="mt-5">
                            <h2>Current Search: {currentSearch}</h2>
                            <h2>Previous Search: {previousSearch}</h2>
                        </div>
                    </div>

                </Wrapper>
            </div>
        </Darkmode>
    )
}

export default PreviousSearch