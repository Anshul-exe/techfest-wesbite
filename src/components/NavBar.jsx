import React from 'react'
import { IoSearch } from 'react-icons/io5';

export default function NavBar() {
    return (
        <div className='flex justify-between items-center'>
            <div className='font-bold text-xl cursor-default'>
                Glitch
            </div>

            <div className='flex justify-between w-1/2 font-semibold'>
                <button>Home</button>
                <button>About Us</button>
                <button>Past Events</button>
                <button>Sponsors</button>
            </div>

            <button>
                <IoSearch className='text-2xl' />
            </button>
        </div>
    )
}
