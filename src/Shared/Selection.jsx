// import { useState } from "react"
// import SelectImage from "../assets/item.png"
// import TableImage from "../assets/tableimage.png"
// import addSVG from "../assets/add.svg"
// import minus from "../assets/minus.svg"
// import tableImage from "../assets/table.svg"
// import guessImage from "../assets/icons.png"

// const Selection = () => {

//     const [toggleTable, setToggleTable] = useState(false)
//     const [count, setCount] = useState(0)


//     const activeTable = () => {
//         setToggleTable(!toggleTable)
//     }

//     const [toggleTable2, setToggleTable2] = useState(false)  
//     const [count2, setCount2] = useState(0)


//     const activeTable2 = () => {
//         setToggleTable2(!toggleTable2)
//     }


//     return (
//         <div className="">
//             <div className="pt-[2rem]">
//                 <div className="relative flex flex-wrap justify-center items-center gap-x-[3rem] gap-y-[0.5rem]">
//                     <div className="w-[8rem] hover:border-[2px] hover:border-green-600 rounded-xl  h-[8rem] relative">
//                         <img src={TableImage} alt="" onClick={activeTable2} className="cursor-pointer"/>
//                         {
//                             toggleTable2 ? (
//                                 <div className="absolute bottom-0 w-[7.8rem] h-[2.6rem]  rounded-b-xl bg-[#D9D9D9] flex justify-center gap-[1rem]">
//                                     <img className="w-[1.5rem]" onClick={() => setCount2((count) => count2 - 1)} src={minus} alt="" />
//                                     <p className="font-semibold  text-3xl">{count2}</p>
//                                     <img className="w-[1.5rem]" onClick={() => setCount2((count) => count2 + 1)} src={addSVG} alt="" />
//                                 </div>
//                             ) : null
//                         }
//                     </div>
//                     <div  >

//                         <div className="w-[8rem] hover:border-[2px] hover:border-green-600 rounded-xl  h-[8rem] relative">
//                             <img src={TableImage} alt="" onClick={activeTable} className="cursor-pointer" />
//                             {
//                                 toggleTable ? (
//                                     <div className="absolute bottom-0 w-[7.8rem] h-[2.6rem]  rounded-b-xl bg-[#D9D9D9] flex justify-center gap-[1rem]">
//                                         <img className="w-[1.5rem]" onClick={() => setCount((count) => count - 1)} src={minus} alt="" />
//                                         <p className="font-semibold text-3xl">{count}</p>
//                                         <img className="w-[1.5rem]" onClick={() => setCount((count) => count + 1)} src={addSVG} alt="" />
//                                     </div>
//                                 ) : null
//                             }
//                         </div>

//                     </div>
//                     <div className="w-[8rem] hover:border-[2px] hover:border-green-400 hover:rounded-xl">
//                         <img className=" cursor-pointer" src={TableImage} alt="" />
//                     </div>
//                     <div className="w-[8rem] hover:border-[2px] hover:border-green-400 hover:rounded-xl">
//                         <img className="w-[8rem]" src={TableImage} alt="" />
//                     </div>
//                     <div className="w-[8rem] hover:border-[2px] hover:border-green-400 hover:rounded-xl">
//                         <img className="w-[8rem]" src={TableImage} alt="" />
//                     </div>
//                     <div className="w-[8rem] hover:border-[2px] hover:border-green-400 hover:rounded-xl">
//                         <img className="w-[8rem]" src={TableImage} alt="" />
//                     </div>
//                     <div className="w-[8rem] hover:border-[2px] hover:border-green-400 hover:rounded-xl">
//                         <img className="w-[8rem]" src={TableImage} alt="" />
//                     </div>
//                     <div className="w-[8rem] hover:border-[2px] hover:border-green-400 hover:rounded-xl">
//                         <img className="w-[8rem]" src={TableImage} alt="" />
//                     </div>
//                 </div>

//                 <div className="">
//                     <div className="absolute bottom-0  bg-[#EAF0F0] w-full h-[10rem] pt-[1.5rem]">
//                         <div className="flex justify-center items-center gap-[3rem]">
//                             <div className="flex gap-[0.5rem]">
//                                 <img className="w-[1.5rem]" src={tableImage} alt="" />
//                                 <div className="flex gap-[1rem]">
//                                     <p className="font-semibold text-xl">Table:</p>
//                                     <p className="text-orange-300 font-semibold text-2xl">0</p>
//                                 </div>
//                             </div>
//                             <div className="flex gap-[0.5rem]">
//                                 <img className="w-[1.5rem]" src={guessImage} alt="" />
//                                 <div className="flex gap-[1rem]">
//                                     <p className="font-semibold text-xl">Guess:</p>
//                                     <p className="text-orange-300 font-semibold text-2xl">{count2}</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="w-[14rem] h-[3.8rem] bg-[#4A5C2F] rounded-xl text-center mt-[2rem] ml-[4rem]">
//                             <button className="font-semibold text-center text-white mt-[1rem]">SELECT AND CONTINUE</button>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Selection