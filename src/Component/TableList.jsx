import Icon1 from "../assets/icons.png"
import Icon2 from "../assets/table.svg"
import Product from "../assets/product.svg"
import TableImage from "../assets/tableimage.png"
import addSVG from "../assets/add.svg"
import minus from "../assets/minus.svg"
import { useContext, useState } from "react"
import SideBar from "../Shared/SideBar"
import { GuestContext } from "../Shared/GuestContext"


const TableList = () => {
    const { numOfGuest, setnumOfGuest } = useContext(GuestContext)
    const [toggleTable, setToggleTable] = useState(false)
    const [count, setCount] = useState(0)

    const activeTable = () => {
        setToggleTable(!toggleTable)
    }

    const handleGuestChange = (increment) => {
        const newCount = count + increment
        setCount(newCount)
        setnumOfGuest(newCount)
    }


    return (

        <div className="">
            <div className="flex justify-center gap-[1rem]">
                <SideBar />

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
                                    <img onClick={activeTable} src={TableImage} alt="" className="cursor-pointer" />
                                    {
                                        toggleTable ? (
                                            <div className="absolute bottom-0 w-[7.8rem] h-[2.6rem]  rounded-b-xl bg-[#D9D9D9] flex justify-center gap-[1rem]">
                                                <img 
                                                className="w-[1.5rem]"
                                                    src={minus}
                                                    onClick={() => handleGuestChange(-1)}
                                                    alt="Decrease Count" />
                                                <p className="font-semibold  text-3xl">{count}</p>
                                                <img
                                                 className="w-[1.5rem]" 
                                                 src={addSVG}
                                                 onClick={() => handleGuestChange(1)}
                                                  alt="" />
                                            </div>
                                        ) : null
                                    }
                                </div>
                                <div  >

                                    {/* <div className="w-[8rem] hover:border-[2px] hover:border-green-600 rounded-xl  h-[8rem] relative">
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
                                    </div> */}

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
                                <p className="font-semibold">Guess: {count}</p>
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
                                <p>GUESS: {count}</p>
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