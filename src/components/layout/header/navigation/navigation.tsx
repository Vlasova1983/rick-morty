import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from "react";
import styles from "./navigetion.module.css"

const Navigetion:FC=()=>{
    const {pathname}=useRouter()
    return (            
        <nav className={styles.conteinerNav}>
            <Link className={pathname==='/'?styles.active:styles.link} href={'/'}>Character</Link>
            <Link  className={pathname==='/locations'?styles.active:styles.link} href={'/locations'}>Locations</Link>
            <Link  className={pathname==='/episodes'?styles.active:styles.link} href={'/episodes'}>Episodes</Link> 
        </nav>                  
       
    )      
}

export default Navigetion