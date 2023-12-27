import { FC } from "react"
import Layout from "@/components/layout/layout"
import Image from 'next/image'
import Head from "next/head";
import styles from "../styles/locations.module.css"

const Locations:FC =()=>{    
  return (
    <Layout>
      <Head>
        <title>Locations</title>
      </Head>  
      <Image
            className={styles.images}
            src="./locations.svg"
            alt="locations"           
            width={220}
            height={135}
            priority
        />   
    </Layout>
  )
}
export default Locations