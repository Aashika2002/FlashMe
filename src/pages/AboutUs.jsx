import React from 'react'

function AboutUs() {
    const AboutusImage = "https://techengage.com/wp-content/uploads/2019/08/pixabay-canon-camera.jpg";
    const imageURL = "https://vistapointe.net/images/photography-2.jpg";
    return (
        <div className="  bg-no-repeat sm:bg-no-repeat sm:bg-cover h-screen  " style={{ backgroundImage: `url(${imageURL})` }} >
            <div className='sm:mx-20 grid grid-cols-1  sm:grid-cols-2'>
                <div className="mx-2 sm:20">
                    <img className='sm:h-screen' src={AboutusImage} />
    
                </div>
                <div className="bg-black flex justify-center items-center flex-col ">
                    <h2 className='uppercase text-white  -tracking-tighter text-center py-5 sm:py-5 sm:text-3xl text-2xl font-semibold mt-5  font-nunito text-opacity-70'>About Us</h2>

                    <p className='text-white text-center mx-10 text-sm sm:text-base text-opacity-50 font-nunito -tracking-tighter'>We specialize in nature photography,family and senior portraits, often traveling to your destination to
                        capture the perfect moment in the perfect place.</p>
                    <ul className="uppercase text-pink-500 text-center sm:m-10 m-5 text-sm sm:text-base font-nunito flex justify-center items-center flex-col">


                        <li className='border border-pink-500 rounded p-3 w-40 hover:border-green-500 hover:text-green-500'><a href="#">Background</a>
                        
                        </li>
                        <div className=" h-7 sm:h-10 bg-pink-500 w-0.5 "></div>
                        <li className='border border-pink-500 rounded p-3 w-40 hover:border-green-500 hover:text-green-500'><a href="#">Work</a></li>

                        <div className="sm:h-10 h-7 bg-pink-500 w-0.5 "></div>

                        <li className='border border-pink-500 rounded p-3 w-40 hover:border-green-500 hover:text-green-500'><a href="#">Service</a></li>


                        <div className="sm:h-10 h-7 bg-pink-500 w-0.5"></div>

                        <li className='border border-pink-500 rounded p-3 w-40 hover:border-green-500 hover:text-green-500'><a href="#">Company vision</a></li>
                        <div className="sm:h-10 h-7  bg-pink-500 w-0.5"></div>

                        <li className='border border-pink-500 rounded p-3 w-40 hover:border-green-500 hover:text-green-500'><a href="#">Our focus</a></li>


                    </ul>

                </div>

            </div>
        </div>
    )
}

export default AboutUs
