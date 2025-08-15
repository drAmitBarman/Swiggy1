import {GrocerGridCard} from "../Utils/Grocery"
import Grocerycard from "./Grocerycard"

export default function GroceryOption(){

    return(
         <div className="mt-20 w-[80%] container mx-auto">
            <h1 className="text-2xl font-bold">Shop Groceries on Instamart</h1>
            <div className="mt-5 container mx-auto flex flex-nowrap overflow-x-auto  gap-3">
                    {
                        GrocerGridCard.map((foodData)=><Grocerycard key={foodData.id} foodData={foodData}></Grocerycard>)
                    }
                  </div>
        </div>
        
    )
}