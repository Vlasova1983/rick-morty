import { FC } from "react"
import Image from "next/image"
import { IHero } from "@/interfaces/hero.interface"
import styles from "./cardCharacter.module.css"

const CardCharacter:FC< {item: IHero}> =({item})=>{ 
  return (
        <>
            <Image
                className={styles.images}     
                src={item.image}
                alt={item.name}          
                width={300}
                height={300}  
                priority         
            />
            <h2 className={styles.name}>{item.name}</h2>
            < div className={styles.card}>
        
            {/* <div className={styles.textConteiner}>
            <h3>{item.name}</h3>
            <p>{item.species}</p>
            </div> */}
        
            </div >    
        </>    
    )
}


export default CardCharacter