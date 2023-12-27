import { FC } from "react"
import Image from "next/image"
import { IHero } from "@/interfaces/hero.interface"
import styles from "./card.module.css"

const Card:FC< {item: IHero}> =({item})=>{ 
  return (
    < div className={styles.card}>
      <Image
            className={styles.images}     
            src={item.image}
            alt={item.name}          
            width={312}
            height={232}  
            priority         
        />
        <div className={styles.textConteiner}>
          <h3>{item.name}</h3>
          <p>{item.species}</p>
        </div>
      
    </div >
  )
}


export default Card