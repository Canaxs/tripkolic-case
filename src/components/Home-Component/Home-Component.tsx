"use client";

import { useEffect, useState } from "react";
import Content from "../Content/Content";
import Header from "../Header/Header";
import { travelData } from "@/data/Data";
import { travelInterface } from "@/types/travelInterface";

export default function HomeComponent() {

    const [travelDataState , setTravelDataState] = useState<travelInterface[]>(travelData);

    const [modal , setModal] = useState(false);

    const [wasRunFilter, setWasRunFilter] = useState(false);

    useEffect(() => {
        if(modal) {
            setTravelDataState(travelData);
            setWasRunFilter(false);
        }
    }, [modal])

    return (
        <div className="h-full w-full">
            <div className="h-auto w-full">
                <Header wasRunFilter={wasRunFilter} setWasRunFilter={setWasRunFilter} travelDataState={travelDataState} setTravelDataState={setTravelDataState} modal={modal} setModal={setModal} />
            </div>
            <div className="w-full h-full">
                <Content wasRunFilter={wasRunFilter} travelDataState={travelDataState} setTravelDataState={setTravelDataState}/>
            </div>
        </div>
    )
}