import { FaLocationDot } from "react-icons/fa6";
import { MdStar } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";


export default function Card(props) {
    return (
        <div className="w-full h-full shadow-xl flex flex-col cursor-pointer hover:shadow-gray-500 transition-all rounded-xl">
            <div className="relative">
                <div className="z-20 w-full absolute h-[175px] top-0 bg-black opacity-30 rounded-t-xl"></div>
                <img src={props.data.img} className="w-full h-[175px] object-cover rounded-t-xl z-10"/>
                <div className="absolute bottom-4 left-1 z-30">
                    <span className="text-white bg-orange-400 px-3 py-1 rounded-3xl text-xs">{props.data.category}</span>
                </div>
                <div className="absolute top-3 right-3 z-30 bg-white p-2 rounded-xl hover:bg-transparent transition-all">
                    <MdFavoriteBorder className="size-5 hover:text-green-400 transition-all"/>
                </div>
            </div>
            <div className="m-5 flex flex-col gap-3">
                <div className="flex w-full justify-between">
                    <div className="flex gap-1 items-center">
                        <MdStar className="size-5 text-yellow-500" />
                        <span className="text-sm drop-shadow">{props.data.point}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaLocationDot className="size-5 text-orange-500"/>
                        <span className="text-sm">{props.data.location} </span>
                    </div>
                </div>
                <div>
                    <span className="font-medium text-lg line-clamp-2 text-gray-600 drop-shadow">{props.data.title}</span>
                </div>
                <div className="flex justify-end font-medium text-sm text-gray-600 drop-shadow">
                    <span>THB {props.data.price}</span>
                </div>
                <div className="flex w-full justify-between items-center">
                    <div className="flex items-center hover:scale-110 transition-all gap-1">
                        <span className="underline-offset-8 underline text-orange-400">Details</span>
                        <GoArrowRight className="text-orange-400 "/>
                    </div>
                    <div>
                        <button className="bg-orange-400 p-2 text-white rounded-xl hover:bg-orange-100 transition-all hover:text-orange-500">Book now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}