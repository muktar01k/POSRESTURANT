import { useContext, useEffect, useState } from "react"
import Logo from "../assets/POS.svg"
import Menu from "../assets/burger.png"
import Add from "../assets/add.svg"
import Icon1 from "../assets/icons.png"
import Icon2 from "../assets/table.svg"
import Product from "../assets/product.svg"
import Search from "../assets/search.svg"
import Calendar from "../assets/calendar.svg"
import { SearchContext } from "../Shared/SearchContext"

const NavBar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    const [dateTime, setDateTime] = useState("")

    const { setSearchTerm } = useContext(SearchContext)

    const activeToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        try {
            const date = new Date();
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true  // Use 12-hour format (AM/PM)
            };
            const formattedDate = date.toLocaleString('en-US', options); // Formats both date and time
            setDateTime(formattedDate);  // Set formatted date/time to state
        } catch (error) {
            console.error("Error formatting date:", error); // Catch and log any error
        }

    }, []);

    return (
        
        <div className="">
            <nav className=" flex justify-center items-center gap-[3rem] pt-[2rem] h-[3rem] sm:gap-[30rem]">
                <div className="sm:flex sm:justify-center sm:items-center sm:gap-[6rem]">
                    <div className="">
                        <img src={Logo} alt="" />
                    </div>

                    <div className="hidden sm:block">
                        <div className="w-[19rem] flex justify-center items-center gap-[0.5rem] bg-[#ECF3F5] h-[3rem] rounded-xl">
                            <input onChange={(e)=>setSearchTerm(e.target.value)} className="bg-[#ECF3F5] w-[15.5rem] border-none" type="text" placeholder="Search Products Or any order..." />
                            <img src={Search} alt="" />
                        </div>
                    </div>
                </div>

                <div className=" sm:flex sm:justify-center sm:items-center sm:gap-[1rem]">
                    <div className="hidden sm:flex sm:justify-center sm:items-center sm:gap-[1rem]">
                        <img src={Calendar} alt="" />
                        <p>{dateTime}</p>
                    </div>
                    <div className="flex justify-center gap-[1.5rem]">
                        <div className="flex gap-[2rem]">
                            <div className="flex bg-[#B1CED4] h-[3rem] w-[9rem] rounded-xl justify-center items-center gap-[0.5rem]">
                                <img className="w-[2rem]" src={Add} alt="" />
                                <p>ADD TABLE</p>
                            </div>
                        </div>
                        <div onClick={activeToggle} className="sm:hidden">
                            {
                                toggleMenu ? (
                                    <p className="font-bold text-5xl w-[3rem] text-center">X</p>
                                ) : (
                                    <img className="w-[3rem] mt-[0.9rem]" src={Menu} alt="" />
                                )
                            }
                        </div>
                    </div>
                </div>

            </nav>
            <hr className="w-full mt-[2rem] h-[2px]" />
            <div className="">
                {
                    toggleMenu && (
                        <div className="bg-[white] shadow-2xl h-screen w-full pl-[1rem] pt-[1rem] mt-[1rem] ">
                            <div className="text-black font-semibold text-3xl ">
                                <p>ORDER #</p>
                            </div>
                            <div className="text-[green] font-semibold flex gap-[10rem] mt-[1rem]">
                                <div className="flex gap-[0.5rem]">
                                    <img className="w-[1.5rem]" src={Icon1} alt="" />
                                    <p>GUESS:</p>
                                </div>
                                <div className="">
                                    <div className="flex gap-[0.5rem]">
                                        <img src={Icon2} alt="" />
                                        <p>TABLE:</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="w-full mt-[2rem] h-[2px]" />

                            <div className="flex flex-col items-center justify-center h-[30rem] gap-[1rem]">
                                <div className="text-center ">
                                    <img className="ml-[4.5rem]" src={Product} alt="" />
                                    <p className="font-semibold text-xl w-[15rem]">No Products In This Moment Added</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div >

    )
}

export default NavBar