import Restaurant from "../../../../react/Day20/src/Components/Restaurant";
import DineOption from "./DineOption";
import FoodOption from "./FoodOption";
import GroceryOption from "./GroceryOption";
import Header from "./Header";


export default function Home(){

    return(
        <>
               <Header></Header>
               <FoodOption></FoodOption>
               <GroceryOption></GroceryOption>
               <DineOption/>
               <Restaurant/>
               </>
    )
}