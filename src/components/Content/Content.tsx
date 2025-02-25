import { randomUUID } from "crypto";
import Card from "../Card/Card";
import { LuSearchCheck } from "react-icons/lu";


export default function Content(props: any) {
    return (
        <div className="mt-10 w-full h-full">
            {props.wasRunFilter && 
                <div className="flex justify-center mb-5 mt-5 items-center">
                    <LuSearchCheck className="size-7 mr-2 text-gray-600"/>
                    <span className="drop-shadow text-lg">{props.travelDataState.length} adet sonuç bulundu.</span>
                </div>
            }
            <div className="flex flex-wrap justify-center gap-3">
                {props.travelDataState?.map((data: any) => (
                    <div className="basis-[20%] rounded-xl" key={"dd"+Math.random()}>
                        <Card data={data} />
                    </div>
                ))}
                {props.travelDataState.length === 0 &&
                    <div className="flex justify-center">
                        <span className="text-3xl drop-shadow">No results found in your search criteria</span>
                    </div>
                }
            </div>
        </div>
    )
}