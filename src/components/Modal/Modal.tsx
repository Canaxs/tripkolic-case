import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import ReactSlider from 'react-slider'
import Slider from 'react-slider';

export default function Modal(props:any) {

    let { travelDataState , setTravelDataState} = props;

    const [price , setPrice] = useState([0,25000]);

    const [startTime , setStartTime] = useState([0,24])

    const [groupSize , setGroupSize] = useState([0,100]);

    const [selectCategory , setSelectCategory] = useState("DEFAULT");

    const [bringSameThema , setBringSameThema] = useState([]);

    const [bringSameActivity , setBringSameActivity] = useState([]);

    const [onClickSameThema , setOnClickSameThema] = useState<string[]>([]);

    const [onClickSameActivity , setOnClickSameActivity] = useState<string[]>([]);

    useEffect(() => {
        if(selectCategory != "DEFAULT"){
            filterData();
        }
    } , [selectCategory])

    function filterData() {
        let vData = travelDataState.filter((data: any) => data.category === selectCategory);
        let vThema = vData.reduce((acc, v, i) => {
            let theme = acc.find((item) => item.theme == v.theme)
            if (!theme) {
                theme = {theme: v.theme}
                acc.push(theme)
            }
            return acc
        }, [])
        setBringSameThema(vThema);
        //
        let vActivity = vData.reduce((acc, v, i) => {
            let activity = acc.find((item) => item.activity == v.activity)
            if (!activity) {
                activity = {activity: v.activity}
                acc.push(activity)
            }
            return acc
        }, [])
        setBringSameActivity(vActivity);

    }

    function addThema(theme: string) {
        if(onClickSameThema.some(e => e === theme)) {
            let vThema = onClickSameThema.filter(e => e != theme);
            setOnClickSameThema(vThema);
        }
        else {
            onClickSameThema.push(theme);
        }
    }

    function addActivity(activity: string) {
        onClickSameActivity.push(activity);
    }

    function reset() {
        setBringSameThema([]);
        setBringSameActivity([]);
        setSelectCategory("DEFAULT");
        setStartTime([0,24]);
        setGroupSize([0,100]);
        setPrice([0,25000]);
        setOnClickSameThema([]);
        setOnClickSameActivity([]);
    }

    function timeAddZero(time: number) {
        if(time.toString().length === 1) {
            return "0"+time;
        }
        return time
    }

    function applyFilter() {
        let vData = travelDataState.filter((data: any) => data.category === selectCategory);
        if(onClickSameThema.length > 0) {
            vData = vData.filter((data: any) =>  onClickSameThema.includes(data.theme));
        }
        if(onClickSameActivity.length > 0) {
            vData = vData.filter((data: any) =>  onClickSameActivity.includes(data.activity));
        }
        vData = vData.filter((data: any) => data.price >= price[0] && price[1] >= data.price);
        setTravelDataState(vData);
        props.setWasRunFilter(true);
        reset();
        props.setModal(false);

    }

    return (
        <div id="modal" className="absolute w-full h-full flex items-center justify-center z-50">
            <div className="w-full h-full bg-black opacity-30"></div>
                <motion.div className="w-[30%] h-[800px] bg-white shadow-lg z-20 rounded-2xl absolute top-5 cursor-pointer"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.125 }}>
                        <div className="w-full flex justify-center absolute top-5">
                            <span className="text-xl drop-shadow font-medium text-gray-600 text-center">Filter</span>
                        </div>
                        <div className="flex justify-between m-4">
                            <div className="w-[100px]">
                                <div className="relative">
                                    <select defaultValue={selectCategory} onChange={(e) => setSelectCategory(e.target.value)} className="w-full bg-transparent placeholder:text-red-400 text-red-700 text-sm border border-red-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none font-medium focus:border-red-500 hover:border-red-300 shadow-sm focus:shadow appearance-none cursor-pointer">
                                        <option value="DEFAULT" disabled>Choose a Here ...</option>
                                        <option value={"Tours"} className="font-medium ring">Tours</option>
                                        <option value={"Tickets"} className="font-medium ring">Tickets</option>
                                        <option value={"Rent"} className="font-medium ring">Rent</option>
                                        <option value={"Transfer"} className="font-medium ring">Transfer</option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-orange-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <IoMdClose className="size-6 z-30" onClick={() => props.setModal(false)}/>
                            </div>
                        </div>
                        <hr className="m-4"/>
                        {selectCategory != "DEFAULT" ?
                        <div className="m-4">
                            <div>
                                <span className="text-gray-500 drop-shadow-xl text-lg">Theme</span>
                                <div className="flex gap-2 mt-3">
                                    {bringSameThema?.map((data,index) => (
                                        <div key={"bringThema"+index} className="cursor-pointer">
                                            <input type="checkbox" id={"c"+index} className="hidden chk-btn" key={"theme"+index} onClick={() => addThema(data['theme'])} />
                                            <label className="p-2 rounded-full text-gray-500 bg-gray-100 border-gray-300 border text-sm hover:bg-orange-500 transition-all hover:text-white duration-500 ease-in-out" htmlFor={"c"+index}>{data['theme']}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-4">
                                <span className="text-gray-500 drop-shadow-xl text-lg">Activity</span>
                                <div className="flex gap-2 mt-3">
                                    {bringSameActivity?.map((data,index) => (
                                        <div key={"bringActivity"+index} className="cursor-pointer">
                                            <input type="checkbox" id={"a"+index} className="hidden chk-btn" key={"theme"+index} onClick={() => addActivity(data['activity'])} />
                                            <label className="p-2 rounded-full text-gray-500 bg-gray-100 border-gray-300 border text-sm hover:bg-orange-500 transition-all hover:text-white duration-500 ease-in-out" htmlFor={"a"+index}>{data['activity']}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-4 flex flex-col gap-1">
                                <span className="text-gray-500 drop-shadow-md text-lg">Price</span>
                                <Slider  className="slider" value={price} onChange={(e) => setPrice(e)} min={0} max={25000} />
                                <div className="flex justify-between text-xs text-gray-600 drop-shadow mt-1">
                                    <div>
                                        <label htmlFor="minPrice">THB {price[0]}</label>
                                    </div>
                                    <div>
                                        <label htmlFor="maxPrice">THB {price[1]}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 flex flex-col gap-1">
                                <div className="flex justify-between items-center text-xs text-gray-600 drop-shadow mt-1">
                                    <span className="text-gray-500 drop-shadow-md text-lg">Start Time</span>
                                    <div>
                                        <label htmlFor="minPrice">{timeAddZero(startTime[0])}:00 - {timeAddZero(startTime[1])}:00</label>
                                    </div>
                                </div>
                                <Slider className="slider" value={startTime} onChange={(e) => setStartTime(e)} min={0} max={24} />
                            </div>
                            <div className="mt-4 flex flex-col gap-1">
                                <div className="flex justify-between items-center text-xs text-gray-600 drop-shadow mt-1">
                                    <span className="text-gray-500 drop-shadow-md text-lg">Group Size</span>
                                    <div>
                                        <label htmlFor="maxPrice">{groupSize[0]} - {groupSize[1]}</label>
                                    </div>
                                </div>
                                <Slider  className="slider" value={groupSize} onChange={(e) => setGroupSize(e)} min={0} max={100} />
                            </div>
                            <div className="mt-4">
                                <span className="text-gray-500 drop-shadow-xl text-lg">Vehicle</span>
                                <div className="flex gap-2 mt-3">
                                    <div className="p-2 rounded-full text-gray-500 bg-gray-100 border-gray-300 border text-sm hover:bg-orange-500 transition-all hover:text-white">
                                        <span>Longtail Boat</span>
                                    </div>
                                    <div className="p-2 rounded-full text-gray-500 bg-gray-100 border-gray-300 border text-sm hover:bg-orange-500 transition-all hover:text-white">
                                        <span>Speedboat</span>
                                    </div>
                                    <div className="p-2 rounded-full text-gray-500 bg-gray-100 border-gray-300 border text-sm hover:bg-orange-500 transition-all hover:text-white">
                                        <span>Yacht</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between absolute bottom-2 w-[95%]">
                                <div>
                                    <button className="bg-gray-100 text-gray-400 p-3 rounded-xl transition-all hover:bg-white hover:text-black" onClick={() => reset()}>Reset</button>
                                </div>
                                <div>
                                    <button className="bg-orange-400 text-white p-3 rounded-xl hover:bg-white hover:text-orange-400 transition-all" onClick={() => applyFilter()}>Apply</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="flex justify-center">
                            <span className="text-xl text-gray-500 drop-shadow text-center">Please select Category</span>
                        </div>
                        }
                </motion.div>
        </div>
    )
}