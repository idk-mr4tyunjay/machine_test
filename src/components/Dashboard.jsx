import React from 'react'

const Dashboard = () => {
  return (
    <div className='text-white'>
        <div className='flex-col justify-center text-center m-5'>
            <h1 className='text-4xl font-semibold p-5'>Science Fiction Stories</h1>
            <div className='flex justify-evenly m-5'>
                <div className='flex bg-blue-600 rounded-full py-2 px-4'> <img src="" alt="new" />New</div>
                <div className='flex rounded-full py-2 px-4 bg-amber-400'> <img src="" alt="progress" /> in progress</div>
                <div className='flex bg-lime-600 rounded-full py-2 px-4'> <img src="" alt="completed" />Completed</div>
                <div className='bg-gradient-to-r from-blue-500 to-pink-500 rounded-full py-2 px-4'>Clear All</div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard