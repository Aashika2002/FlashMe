import React from 'react'

function ContactUs() {
    const imageURL = "https://www.jagranimages.com/images/newimg/02062023/02_06_2023-best_camera_for_photography_23430190.jpg";
    return (
        <div className="h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url(${imageURL})` }}>
            <div className='bg-black h-screen bg-opacity-50 '>
                <div className='flex justify-center items-center flex-col '>
                    <h1 className='text-pink-400 sm:text-5xl text-3xl font-nunito tracking-widest mt-8 sm:mb-5  mb-2 font-semibold  '>Flash Me</h1>
                    <p className='text-white font-nunito text-base sm:text-xl mx-7 sm:mx-32 text-center'>To us photography is about people being real and then letting us paint a picture of that moment to remember it forever. This is the story that matters most: real people, real stories, real moments.</p>
                </div>
                <div className='flex justify-center items-center flex-col '>
                    <h1 className='text-white sm:text-3xl text-lg font-nunito tracking-widest sm:py-6 py-4 font-semibold'>Contact Us</h1>
                    <p className='text-white font-nunito text-base sm:text-lg mx-10 sm:mx-80 text-center'>We would love to visit with you by phone or in person and talk about your wedding, event, portrait session or video project.</p>
                </div>
                <div className='flex justify-center items-center'>
                <div className='bg-black bg-opacity-50 w-96 sm:w-2/5  h-1/6 mb-5'>
                    <form action="https://getform.io/f/bd294aed-3883-455b-94a9-00ee9bc92cb3" method ="post" className='grid gird-cols-1 sm:py-6 px-3 py-5 '>
                        
                        <input className="border-pink-400 bg-transparent rounded-3xl  placeholder-white py-3 font-nunito text-base my-3 mx-5 text-white" type="text" placeholder='Name' required={true}/>
                        
                        <input className="border-pink-400 bg-transparent rounded-3xl  placeholder-white py-3 font-nunito text-base my-3 mx-5 text-white" type="email" placeholder='Email' required={true}/>
                        
                        <textarea rows="4" className="border-pink-400 bg-transparent placeholder-white rounded-3xl py-3 font-nunito text-base my-3 mx-5 text-white" type="textarea" placeholder='Suggestions' required={true}/>
                        <div className='flex justify-center items-center sm:mt-3 mb-0 mt-2'>
                        <button type="submit" className='rounded-full w-32 border-2 border-pink-400 text-xl font-nunito bg-pink-400 py-2 px-10 text-white hover:bg-transparent '>Send</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>

        </div>
    )
}

export default ContactUs
