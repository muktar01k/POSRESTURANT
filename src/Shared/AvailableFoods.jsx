import { useState } from "react"

import Home from "../assets/home.svg"
import Menu1 from "../assets/menugray.png"
import Order from "../assets/orderGanGan.png"
import Payment from "../assets/payment.png"
import Setting from "../assets/setting.png"
// import AvailableFood from "../Shared/AvailableFoods"
import Chicken from "../assets/chicken.png"
import Pepper from "../assets/chilli-2.svg"
import Icon1 from "../assets/icons.png"
import Icon2 from "../assets/table.svg"
import Product from "../assets/product.svg"
import Chips from "../assets/chips.png"
import Salad from "../assets/salad.png"
import Gabage from "../assets/gabage.png"
import Bread from "../assets/bread.png"



const AvailableFood = ({ Food, FoodName, FoodCategory, OneLetter, FoodPepper,addToOrder,price,foodImage }) => {

    // const [quantity, setQuantity] = useState(1)

    // const [toggleFood, setToggleFood] = useState(false)

    // const activeFood = () => {
    //     setToggleFood(!toggleFood)
    // }

    // const increasementQuantity = (e) => {
    //     e.stopPropagation()
    //     setQuantity((prevQuantity) => prevQuantity + 1)
    // }

    // const decreaseQuantity = (e) => {
    //     e.stopPropagation()
    //     setQuantity((prevQuantity) => {
    //         if (prevQuantity > 1) {
    //             return prevQuantity - 1
    //         }
    //         return 1
    //     })

    // }

    return (
        <div className="">
            <div onClick={()=> addToOrder(FoodName,price,foodImage)} className="w-[12.688rem]   rounded-xl">
                <div className="rounded-t-xl ">
                    <img className="" src={Food} alt={FoodName} />
                </div>
                <div className="bg-[#D8E6E9] h-[4.450rem] pt-[0.5rem] rounded-b-xl cursor-pointer relative">

                    <div className="">
                        <p className="text-center font-semibold">{FoodName}</p>
                        <div className="flex justify-center gap-[1rem] pt-[0.5rem]">
                            <p>{FoodCategory}:</p>
                            <div className="flex gap-[0.3rem]">
                                <div className="w-[1.438rem] h-[1.438rem] bg-orange-300 text-center rounded-xl">
                                    <p className="font-semibold">{OneLetter}</p>
                                </div>
                                <img className="w-[2rem]" src={FoodPepper} alt="" />
                                <p>${price}</p>
                            </div>


                        </div>
                    </div>
                    {/* {
                        toggleFood && (
                            <div className="">
                                <div className="absolute bottom-0 w-full bg-gray-100 rounded-b-xl flex justify-center gap-[1.5rem] py-2 h-[4.450rem]">
                                    <button className="font-semibold text-xl bg-gray-200 rounded-xl w-[1rem]" onClick={decreaseQuantity}>-</button>
                                    <p>{quantity}</p>
                                    <button className=" bg-gray-200 rounded-lg" onClick={increasementQuantity}>+</button>
                                </div>

                            </div>
                        )
                    } */}
                </div>
            </div>
        </div>

    )
}

export default AvailableFood