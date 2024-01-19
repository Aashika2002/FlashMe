import React from 'react'

function Home() {

    const imageURL = "https://www.adorama.com/alc/wp-content/uploads/2018/07/shutterstock_170815865.jpg";
    // const myimage="https://images.unsplash.com/photo-1590071089561-2087ff1fc418?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="  bg-no-repeat sm:bg-no-repeat sm:bg-cover h-screen  " style={{ backgroundImage: `url(${imageURL})` }}>
            <div className='text-center font-nunito bg-black h-screen bg-opacity-70 '>
                <div className="">
                    <h2 className='text-pink-500 text-3xl sm:text-5xl font-semibold pt-20 -tracking-tighter '>Welcome to Flash Me Photography</h2>
                </div>
                <div className=' w-full flex justify-center items-center mt-10 mb-0'  >
                    <h3 className= 'bg-white bg-opacity-10 w-96 text-white text-2xl sm:text-3xl font-normal p-1.5 '>Photography Studio</h3>
                    </div>
                <blockquote className='text-white text-xl mx-10 my-20  sm:mx-60 sm:my-50 sm:text-xl'>
                    “Photography for me is not looking, it’s feeling. If you can’t feel what you’re looking at, then
                    you’re never going to get others to feel anything when they look at your pictures.”
                    <br></br>
                    <span className='text-pink-500 tracking-widest font-normal uppercase'>--Don McCullin</span>
                </blockquote>
            </div>

        </div>
    )
}

export default Home
