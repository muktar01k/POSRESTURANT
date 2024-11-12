import SideBar from "../Shared/SideBar"
import NavBar from "./NavBar"
import Icon2 from "../assets/table.svg"
import Clock from '../assets/clock.svg'


const Payment = () => {

    return (
        <div className="">
            <div className="flex ">
                <div className="">
                    <SideBar />
                </div>
                <div className="">
                    <div className="">
                    <div className="flex justify-center items-center gap-[2rem] sm:gap-[38rem] sm:h-[3.5rem]">
                        <div className="">
                            <p className="font-semibold text-2xl ml-[1rem] sm:mt-1">ORDER #:</p>
                        </div>
                        <div className="flex justify-center items-center  gap-[2rem] ml-[1.5rem] sm:ml-0">

                            <div className="flex gap-[0.5rem]">
                                <img src={Icon2} alt="" />
                                <p>TABLE: <span className="text-orange-400 font-semibold ">1</span></p>
                            </div>

                            <div className="flex gap-[0.5rem]">
                                <img src={Clock} alt="" />
                                <p>TIME: <span className="text-orange-400 font-semibold ">20:00 PM</span></p>
                            </div>

                        </div>
                       
                    </div>
                    <div className="h-[0.1rem] bg-gray-300"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment