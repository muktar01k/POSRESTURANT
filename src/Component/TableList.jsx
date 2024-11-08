import Home from "../assets/home.svg"
import Menu from "../assets/menugray.png"
import Order from "../assets/orderGanGan.png"
import Payment from "../assets/payment.png"
import Setting from "../assets/setting.png"
import Table from "../assets/Table.png"
import Icon1 from "../assets/icons.png"
import Icon2 from "../assets/table.svg"
import Product from "../assets/product.svg"
import { Link } from "react-router-dom"
import TableImage from "../assets/tableimage.png"
import addSVG from "../assets/add.svg"
import minus from "../assets/minus.svg"
import tableImage from "../assets/table.svg"
import guessImage from "../assets/icons.png"
import { useState } from "react"


const TableList = () => {

    const [toggleTable, setToggleTable] = useState(false)
    const [count, setCount] = useState(0)


    const activeTable = () => {
        setToggleTable(!toggleTable)
    }

    const [toggleTable2, setToggleTable2] = useState(false)  
    const [count2, setCount2] = useState(0)


    const activeTable2 = () => {
        setToggleTable2(!toggleTable2)
    }

    return (

        <div className="">
            <div className="flex justify-center gap-[1rem]">
                <div className="flex relative flex-col justify-center items-center gap-[4rem] w-[7rem]  h-[40rem]">

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
                    <div className="cursor-pointer flex flex-col justify-center items-center">
                        <img src={Payment} alt="" />
                        <p className="text-[#A87F57] font-semibold">Payment</p>
                    </div>
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



                <div className="">
                    <div className="sm:h-[3.5rem] hidden sm:block">
                        <div className="flex justify-center items-center gap-[2rem] sm:gap-[38rem] sm:h-[3.5rem]">
                            <div className="">
                                <p className="font-semibold text-2xl ml-[1rem] sm:mt-1">TABLE LIST</p>
                            </div>
                            <div className="flex justify-center items-center  gap-[2rem] ml-[1.5rem] sm:ml-0">

                                <div className="mt-[1rem] bg-orange-200 w-[8rem] h-[3rem] text-center text-xl pt-[0.5rem] rounded-xl sm:mt-0">
                                    <p className="">First Floor</p>
                                </div>

                                <div className="mt-[1rem] bg-gray-200 w-[8rem] h-[3rem] text-center text-xl text-gray-400 pt-[0.5rem] rounded-xl sm:mt-0">
                                    <p className="">Second Floor</p>
                                </div>

                            </div>
                        </div>
                        <hr className="h-[10px] mt-[0.5rem]" />

                    </div>


                    <div className="">
                        <div className="">
                            <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-[0.5rem] sm:gap-8 justify-center place-items-center mt-4">
                             
                                    <div className="w-[8rem] hover:border-[2px] hover:border-green-600 rounded-xl  h-[8rem] relative">
                                        <img src={TableImage} alt="" onClick={activeTable2} className="cursor-pointer" />
                                        {
                                            toggleTable2 ? (
                                                <div className="absolute bottom-0 w-[7.8rem] h-[2.6rem]  rounded-b-xl bg-[#D9D9D9] flex justify-center gap-[1rem]">
                                                    <img className="w-[1.5rem]" onClick={() => setCount2((count) => count2 - 1)} src={minus} alt="" />
                                                    <p className="font-semibold  text-3xl">{count2}</p>
                                                    <img className="w-[1.5rem]" onClick={() => setCount2((count) => count2 + 1)} src={addSVG} alt="" />
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                    <div  >

                                        <div className="w-[8rem] hover:border-[2px] hover:border-green-600 rounded-xl  h-[8rem] relative">
                                            <img src={TableImage} alt="" onClick={activeTable} className="cursor-pointer" />
                                            {
                                                toggleTable ? (
                                                    <div className="absolute bottom-0 w-[7.8rem] h-[2.6rem]  rounded-b-xl bg-[#D9D9D9] flex justify-center gap-[1rem]">
                                                        <img className="w-[1.5rem]" onClick={() => setCount((count) => count - 1)} src={minus} alt="" />
                                                        <p className="font-semibold text-3xl">{count}</p>
                                                        <img className="w-[1.5rem]" onClick={() => setCount((count) => count + 1)} src={addSVG} alt="" />
                                                    </div>
                                                ) : null
                                            }
                                        </div>

                                    </div>
                                    <div className="w-[8rem] hover:border-[2px] hover:border-green-400 hover:rounded-xl">
                                        <img className=" cursor-pointer" src={TableImage} alt="" />
                                    </div>
                                    <div className="w-[8rem] hover:border-[2px] hover:border-green-400 hover:rounded-xl">
                                        <img className="w-[8rem]" src={TableImage} alt="" />
                                    </div>
                                    <div className="w-[8rem] hover:border-[2px] hover:border-green-400 hover:rounded-xl">
                                        <img className="w-[8rem]" src={TableImage} alt="" />
                                    </div>
                                    <div className="w-[8rem] hover:border-[2px] hover:border-green-400 hover:rounded-xl">
                                        <img className="w-[8rem]" src={TableImage} alt="" />
                                    </div>
                                    <div className="w-[8rem] hover:border-[2px] hover:border-green-400 hover:rounded-xl">
                                        <img className="w-[8rem]" src={TableImage} alt="" />
                                    </div>
                                    <div className="w-[8rem] hover:border-[2px] hover:border-green-400 hover:rounded-xl">
                                        <img className="w-[8rem]" src={TableImage} alt="" />
                                    </div>
                                </div>

                   
                        </div>

                    </div>

                    <hr className="h-[10px] mt-[0.5rem]" />
                    <div className="pt-[1rem] flex justify-center items-center gap-[25rem]">
                        <div className="flex gap-[6rem]">
                            <div className="flex gap-[1rem]">
                                <img src={Icon2} alt="" />
                                <p className="font-semibold">Table: 1</p>
                            </div>
                            <div className="flex gap-[1rem]">
                                <img src={Icon2} alt="" />
                                <p className="font-semibold">Guess: {count2}</p>
                            </div>

                        </div>

                        <div className="bg-[#4A5C2F] w-[14rem] h-[3.4rem] text-center text-white font-semibold pt-[1rem] rounded-xl">
                            <button>SELECT AND CONTINUE</button>
                        </div>
                    </div>
                </div>

                <hr className="w-[]" />

                <div className="hidden sm:block">
                    <div className="sm:bg-[white] sm:h-[30rem] sm:w-[20rem] sm:pl-[1rem] ">
                        <div className="sm:text-black sm:font-semibold sm:text-3xl ">
                            <p>ORDER #</p>
                        </div>
                        <div className="sm:text-[green] sm:font-semibold flex justify-between sm:mt-[1rem]">
                            <div className="sm:flex sm:gap-[0.5rem]">
                                <img className="sm:w-[1.5rem]" src={Icon1} alt="" />
                                <p>GUESS: {count2}</p>
                            </div>
                            <div className="">
                                <div className="sm:flex sm:gap-[0.5rem]">
                                    <img src={Icon2} alt="" />
                                    <p>TABLE:</p>
                                </div>
                            </div>
                        </div>
                        <hr className="sm:w-full sm:mt-[2rem] sm:h-[2px]" />

                        <div className="sm:flex sm:flex-col sm:items-center sm:justify-center sm:h-[30rem] sm:gap-[1rem]">
                            <div className="sm:text-center ">
                                <img className="sm:ml-[4.5rem]" src={Product} alt="" />
                                <p className="sm:font-semibold sm:text-xl sm:w-[15rem]">No Products In This Moment Added</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default TableList