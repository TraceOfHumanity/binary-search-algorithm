import React from 'react'
import Info from './Info'

const MainHeader = () => {
    return (
        <div className='flex w-fit my-0 mx-auto z-10 relative'>
            <Info />
            <h1 className='text-lg font-extrabold from-sky-600 to-red-800 bg-gradient-to-r bg-clip-text text-transparent bg-200% animate-gradient'>
                Binary search algorithm
            </h1>
        </div>
    )
}

export default MainHeader