import { useState } from 'react'
import grayHome from '../assets/grayhome.png'
import Home from "../assets/home.svg"
import Menu from "../assets/menu.svg"
import Order from "../assets/ordergray.png"
import { Link } from 'react-router-dom'

const Navigation = () => {

   const [toggleFooter, setToggleFooter] = useState(false)

   const activeFooter = () => {
      setToggleFooter(!toggleFooter)
   }


   return (
      <div className="pt-[4rem]">
         <div className="flex justify-center gap-[6rem] bg-[#FFFFFF] h-[4rem] shadow-xl">
            <div className="">
               <img className='ml-[0.4rem] w-[1.5rem]' src={Home} alt="" />
               <p className=' text-[#A87F57] font-semibold'>Home</p>
            </div>
            <Link to="/Menu" >
               <div className="cursor-pointer">

                  <img className='ml-[0.4rem] w-[1.3rem]' src={Menu} alt="" />
                  <p className='text-[#A87F57] font-semibold'>Menu</p>
               </div>
            </Link>
            <Link to="/Payment">
               <div className="cursor-pointer">
                  <img className='ml-[0.4rem] w-[1.3rem]' src={Order} alt="" />
                  <p className='text-[#A87F57] font-semibold'>Order</p>
               </div>
            </Link>
         </div>
      </div>
   )
}

export default Navigation