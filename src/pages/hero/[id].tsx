import { NextPage } from "next";
import { useRouter } from "next/router";


const HeroPage:NextPage=()=>{
    const {replace,asPath}=useRouter()   
    return (
    <div>
        <h1>HeroPage</h1>
        <button onClick={()=>replace('/')}>GO BACK</button>

    </div>
    )    
}

export default HeroPage