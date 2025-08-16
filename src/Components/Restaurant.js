import { useEffect, useState } from "react"


export default function Restaurent (){
  

//  useEffect(()=>{
//   async function fetchData() {
    
//         const proxyServer = "https://cors-anywhere.herokuapp.com/"
//         const swiggyAPI="https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6015375&lng=88.38329689999999&is-seo-homepage-enabled=true"
//     const respons= await 
//     const data =await respons.json();
//     setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
//   }  
//   fetchData   
   
//  },[])

    const [restData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";

      // Fetch via AllOrigins
      const response = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
      );
      const data = await response.json();

      // Parse the actual JSON inside `contents`
      const swiggyData = JSON.parse(data.contents);

      // Extract restaurants
      const restaurants = swiggyData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setRestData(restaurants || []);
    }

    fetchData();
  }, []);

  // ✅ just log restData directly
  console.log(restData);
    return(
        <>
        </>
    )
}