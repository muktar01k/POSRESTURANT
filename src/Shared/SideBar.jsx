import { Link } from "react-router-dom"
import Menu from "../assets/menugray.png"
import Order from "../assets/orderGanGan.png"
import Payment from "../assets/payment.png"
import Setting from "../assets/setting.png"
import Home from "../assets/home.svg"


const SideBar = ({className}) => {

    return (
        <div className="">
            <div className={`flex relative flex-col justify-center items-center gap-[4rem] w-[7rem]  h-[40rem] ${className}`}>

                <div className="absolute left-[7rem]  h-full w-[2px] bg-gray-200"></div>
                <Link to="/">
                    <div className="cursor-pointer flex flex-col justify-center items-center">
                        <img src={Home} alt="" />
                        <p className="text-[#A87F57] font-semibold">Home</p>
                    </div>
                </Link>

                <Link to="/Menu">
                    <div className="cursor-pointer flex flex-col justify-center items-center">
                        <img src={Menu} alt="" />
                        <p className="text-[#A87F57] font-semibold">Menu</p>
                    </div>
                </Link>
                <Link to="/Payment">
                    <div className="cursor-pointer flex flex-col justify-center items-center">
                        <img src={Payment} alt="" />
                        <p className="text-[#A87F57] font-semibold">Payment</p>
                    </div>
                </Link>
                <div className="cursor-pointer flex flex-col justify-center items-center">
                    <img src={Order} alt="" />
                    <p className="text-[#A87F57] font-semibold">Order</p>
                </div>
                <div className="cursor-pointer flex flex-col justify-center items-center">
                    <img src={Setting} alt="" />
                    <p className="text-[#A87F57] font-semibold">Settings</p>
                </div>
                <p>V.1.0</p>
            </div>
        </div>
    )
}

export default SideBar