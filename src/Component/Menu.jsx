import { Link } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "../assets/home.svg"
import Menu1 from "../assets/menugray.png"
import Order from "../assets/orderGanGan.png"
import Payment from "../assets/payment.png"
import Setting from "../assets/setting.png"
import AvailableFood from "../Shared/AvailableFoods"
import Chicken from "../assets/chicken.png"
import Pepper from "../assets/chilli-2.svg"
import Icon1 from "../assets/icons.png"
import Icon2 from "../assets/table.svg"
import Product from "../assets/product.svg"
import Chips from "../assets/chips.png"
import Salad from "../assets/salad.png"
import Gabage from "../assets/gabage.png"
import Bread from "../assets/bread.png"
import { useContext, useState } from "react"
import { SearchContext } from "../Shared/SearchContext"


const Menu = () => {

    const [order, setOrder] = useState([])
    const addToOrder = (foodName, price, foodImage) => {
        const existingItem = order.find((item) => item.name === foodName)

        if (existingItem) {
            setOrder(
                order.map((item) =>
                    item.name === foodName ? { ...item, quantity: item.quantity + 1 } : item
                )
            )
        } else {
            setOrder([...order, { name: foodName, quantity: 1, price, Image: foodImage }])
        }
    }
    const clearOrders = () => {
        setOrder([]) 
    }
    const subtotal = order.reduce((total, item) => total + item.quantity * item.price, 0)
    const servicecharges = order.length * 1
    const total = subtotal + servicecharges

    const { searchTerm } = useContext(SearchContext); 
    const foodList = [
        {
            Food: Chicken,
            FoodName: "CHICKEN WINGS",
            FoodCategory: "CATEGORY",
            OneLetter: "N",
            FoodPepper: Pepper,
            addToOrder: addToOrder,
            price: 20,
            foodImage: Chicken,
        },
        {
            Food: Chips,
            FoodName: "FRENCH FRIES",
            FoodCategory: "CATEGORY",
            OneLetter: "G",
            FoodPepper: "hidden",
            addToOrder: addToOrder,
            price: 15,
            foodImage: Chips,
        },
        {
            Food: Salad,
            FoodName: "SUMMER SALAD",
            FoodCategory: "CATEGORY",
            OneLetter: "M",
            FoodPepper: Pepper,
            addToOrder: addToOrder,
            price: 11,
            foodImage: Salad,
        },
        {
            Food: Gabage,
            FoodName: "GARBAGE",
            FoodCategory: "CATEGORY",
            OneLetter: "G",
            FoodPepper: Pepper,
            addToOrder: addToOrder,
            price: 12,
            foodImage: Gabage,
        },
        {
            Food: Bread,
            FoodName: "BREAD",
            FoodCategory: "CATEGORY",
            OneLetter: "G",
            FoodPepper: Pepper,
            addToOrder: addToOrder,
            price: 19,
            foodImage: Bread,
        },
        {
            Food: Chicken,
            FoodName: "Chicken",
            FoodCategory: "CATEGORY",
            OneLetter: "G",
            FoodPepper: Pepper,
            addToOrder: addToOrder,
            price: 24,
            foodImage: Chicken,
        },
        {
            Food: Chips,
            FoodName: "Chips",
            FoodCategory: "CATEGORY",
            OneLetter: "G",
            FoodPepper: Pepper,
            addToOrder: addToOrder,
            price: 12,
            foodImage: Chips,
        },
        {
            Food: Salad,
            FoodName: "SALAD",
            FoodCategory: "CATEGORY",
            OneLetter: "G",
            FoodPepper: Pepper,
            addToOrder: addToOrder,
            price: 12,
            foodImage: Salad,
        },
        {
            Food: Bread,
            FoodName: "Bread",
            FoodCategory: "CATEGORY",
            OneLetter: "G",
            FoodPepper: Pepper,
            addToOrder: addToOrder,
            price: 12,
            foodImage: Bread,
        },
        {
            Food: Chicken,
            FoodName: "Chicken",
            FoodCategory: "CATEGORY",
            OneLetter: "G",
            FoodPepper: Pepper,
            addToOrder: addToOrder,
            price: 12,
            foodImage: Chicken,
        },
        {
            Food: Gabage,
            FoodName: "GARBAGE",
            FoodCategory: "CATEGORY",
            OneLetter: "G",
            FoodPepper: Pepper,
            addToOrder: addToOrder,
            price: 12,
            foodImage: Gabage,
        },
        {
            Food: Chips,
            FoodName: "CHIPS",
            FoodCategory: "CATEGORY",
            OneLetter: "G",
            FoodPepper: Pepper,
            addToOrder: addToOrder,
            price: 12,
            foodImage: Chips,
        },

    ];

    const filteredFoods = foodList.filter((food) =>
        food.FoodName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="">
            <NavBar />
            <div className="flex justify-center gap-[4rem]">
                <div className="">
                    <div className="flex relative flex-col justify-center items-center gap-[4rem] w-[7rem]  h-[40rem]">

                        <div className="absolute left-[7rem] top-0 h-screen w-[2px] bg-gray-200"></div>
                        <Link to="/">
                            <div className="cursor-pointer flex flex-col justify-center items-center">
                                <img src={Home} alt="" />
                                <p className="text-[#A87F57] font-semibold">Home</p>
                            </div>
                        </Link>

                        <Link to="/Menu">
                            <div className="cursor-pointer flex flex-col justify-center items-center">
                                <img src={Menu1} alt="" />
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
                </div>


                <div className="pt-[2rem] min-h-[40rem] flex-grow">
                    {filteredFoods.length > 0 ? (
                        <div className="grid sm:grid-cols-4 items-center  gap-x-8 gap-y-4">
                            {filteredFoods.map((food, index) => (
                                <AvailableFood
                                    key={index}
                                    Food={food.Food}
                                    FoodName={food.FoodName}
                                    FoodCategory={food.FoodCategory}
                                    OneLetter={food.OneLetter}
                                    FoodPepper={food.FoodPepper}
                                    addToOrder={food.addToOrder}
                                    price={food.price}
                                    foodImage={food.foodImage}
                                />
                            ))}

                        </div>
                    ) : (
                        <p className="text-center text-lg mt-10">No food available for "{searchTerm}"</p>
                    )
                    }
                </div>
                {/* <hr className="h-[10px] mt-[0.5rem]" /> */}

                <div className="relative">
                    <div className="absolute h-screen w-[2px] bg-gray-200"></div>
                    <div className="bg-[white] h-[30rem] w-[25rem] pl-[1rem] ">
                        <div className="text-black font-semibold text-3xl ">
                            <p>ORDER #</p>
                        </div>
                        <div className="text-[green] font-semibold flex gap-[8rem] mt-[1rem]">
                            <div className="flex gap-[0.5rem]">
                                <img className="w-[1.5rem]" src={Icon1} alt="" />
                                <p>GUESS:{ }</p>
                            </div>
                            <div className="">
                                <div className="flex gap-[0.5rem]">
                                    <img src={Icon2} alt="" />
                                    <p>TABLE:</p>
                                </div>
                            </div>
                        </div>
                        <hr className="w-full mt-[2rem] h-[2px] bg-gray-300" />
                        <div className="">
                            <div className="">
                                {order.length === 0 ? (
                                    <div className="sm:flex sm:flex-col sm:items-center sm:justify-center sm:h-[30rem] sm:gap-[1rem]">
                                        <div className="sm:text-center">
                                            <img className="sm:ml-[4.5rem]" src={Product} alt="No Products" />
                                            <p className="sm:font-semibold sm:text-xl sm:w-[15rem]">No Products In This Moment Added</p>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        {order.map((item, index) => (
                                            <div className="pt-[1rem]" key={index}>
                                                <div className="bg-[#EAF0F0] h-[5rem] w-[23rem] pt-[1rem] rounded-xl">
                                                    <div className="flex justify-center gap-[5rem]">
                                                        <div className="flex gap-[1rem]">
                                                            <img className="w-[3rem]" src={item.Image} alt={item.name} />
                                                            <div className="">
                                                                <p className="font-semibold">{item.name}</p>
                                                                <p className="font-bold text-xl">${item.price}</p>
                                                            </div>
                                                        </div>
                                                        <div className="">
                                                            <p className="font-semibold">Quantity</p>
                                                            <p className="font-bold text-center text-xl">{item.quantity}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        {/* Show balance details and buttons only when items are added */}
                                        <div className="mt-[1rem] font-semibold w-[23rem] rounded-t-xl border-2 border-dashed border-gray-400 h-[24rem] pt-[1.5rem]">
                                            <div className="">
                                                <div className="flex text-xl justify-center gap-[12rem]">
                                                    <p className="">SubTotal</p>
                                                    <p>${subtotal.toFixed(2)}</p>
                                                </div>
                                                <div className="flex text-xl justify-center gap-[6rem] pt-[1.5rem]">
                                                    <p>Service Charges 10%</p>
                                                    <p>${servicecharges.toFixed(2)}</p>
                                                </div>
                                                <div className="w-full border-2 border-dashed border-gray-400 mt-[2rem]"></div>
                                                <div className="flex text-3xl font-semibold justify-center gap-[8rem] mt-[4rem]">
                                                    <p>Total:</p>
                                                    <p>${total.toFixed(2)}</p>
                                                </div>
                                                <div className="flex justify-center gap-[2rem] mt-[3rem]">
                                                    <div className="w-[10rem] h-[3.625rem] bg-[#EC5A5A] rounded-xl shadow-sm">
                                                        <button onClick={clearOrders} className="w-[10rem] h-[3.625rem] text-center text-xl">CLEAR ORDERS</button>
                                                    </div>
                                                    <div className="w-[10rem] h-[3.625rem] bg-[#B1CED4] rounded-xl shadow-sm">
                                                        <button className="w-[10rem] h-[3.625rem] text-center text-xl">SEND ORDERS</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}
export default Menu