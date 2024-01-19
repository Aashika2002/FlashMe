import React from 'react'
import logo from './logo.png'
import { Button, Navbar } from 'flowbite-react';
function NavigationBar() {
    return (

        <Navbar fluid rounded className='bg-black'>
            <Navbar.Brand >
                <img src={logo} className="mr-3 h-10 sm:h-16 " alt="Flowbite React Logo" />
                <span className=" tracking-normal sm:tracking-widest text-2xl sm:text-3xl  text-white font-nunito">Flash Me</span>
            </Navbar.Brand>
            <div className="flex md:order-2 ">
                <Button className='bg-pink-500 font-nunito '>Login</Button>
                <Navbar.Toggle />
            </div>
            
            <Navbar.Collapse  className='text-white  font-nunito  '>
                <Navbar.Link href="#" active  className='bg-pink-500' >
                    Home
                </Navbar.Link>
                <Navbar.Link href="#" className='text-white hover:text-pink-500'>About</Navbar.Link>
                <Navbar.Link href="#" className='text-white  hover:text-pink-500'>Gallery</Navbar.Link>
                <Navbar.Link href="#"className='text-white  hover:text-pink-500'>Apply</Navbar.Link>
                <Navbar.Link href="#" className='text-white  hover:text-pink-500'>Contact Us</Navbar.Link>
            </Navbar.Collapse>
          
        </Navbar>

    )
}

export default NavigationBar
