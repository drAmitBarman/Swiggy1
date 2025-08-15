  

  export default function DineCard({RestData}){
    return(
        <div>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+RestData?.info?.mediaFiles?.url}></img>
            <p>{RestData?.info?.name}</p>
            <p>{RestData?.info?.rating?.value}</p>
        </div>
    )
  }