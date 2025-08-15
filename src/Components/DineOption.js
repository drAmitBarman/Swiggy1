import {dineoutRestaurant} from "../Utils/DineData"
import DineCard from "./DineCard"


export default function DineOption(){

    return(
        <>
        <p className="text-2xl font-bold">Discover best restaurants on Dineout</p>
       <div>
        {
            dineoutRestaurant.map((RestData)=><DineCard key={RestData?.info?.id} RestData={RestData}/>)
        }
       </div>
        </>
    )
}