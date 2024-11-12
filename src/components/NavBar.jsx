import React from 'react'
import { IoSearch } from 'react-icons/io5';

export default function NavBar() {
    return (
        <div className='flex justify-between items-center bg-transparent w-full'>
            <div className='font-bold text-3xl cursor-default'>
                Glitch
            </div>

            <div className='flex justify-between w-1/2 font-semibold text-lg'>
                <button>Home</button>
                <button>About Us</button>
                <button>Past Events</button>
                <button>Sponsors</button>
            </div>

            <button>
                <IoSearch className='text-3xl' />
            </button>
        </div>
    )
}
