import { CgMenuLeftAlt } from "react-icons/cg";
import { TbWorld } from "react-icons/tb";
import { MdFavoriteBorder } from "react-icons/md";
import { PiBasketLight } from "react-icons/pi";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

export default function Header(props: any) { 

    let {modal , setModal} = props

    return (
        <div className="w-full h-full">
            {modal &&
                <Modal wasRunFilter={props.wasRunFilter} setWasRunFilter={props.setWasRunFilter} setModal={setModal} travelDataState={props.travelDataState} setTravelDataState={props.setTravelDataState} />
            }
            <div className="flex justify-between items-center w-[98%] ml-[1%] relative top-3">
                <div className="flex gap-1 items-center justify-center cursor-pointer hover:scale-110 transition-all z-10" onClick={() => setModal(true)}>
                    <CgMenuLeftAlt  className="size-10 text-gray-500 drop-shadow-lg shadow-black max-md:size-8"/>
                    <span className="text-base drop-shadow shadow-black  text-gray-700 max-md:text-sm">Filter</span>
                </div>
                <div className="z-10">
                    <img src="logo.png" className="w-12 h-12 max-md:h-10 max-md:w-10"/>
                </div>
                <div className="flex gap-2 items-center max-md:gap-1 z-10">
                    <TbWorld className="size-7 text-gray-500 max-md:size-5 cursor-pointer transition-all hover:text-blue-500"/>
                    <MdFavoriteBorder className="size-7 text-gray-500 max-md:size-5 cursor-pointer transition-all hover:text-red-500"/>
                    <PiBasketLight className="size-7 text-gray-500 max-md:size-5 cursor-pointer transition-all hover:text-green-500"/>
                </div>
            </div>
        </div>
    )
}