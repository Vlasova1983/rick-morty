import { FC } from "react"
import Layout from "@/components/layout/layout"
import Image from 'next/image'
import Head from "next/head";
import styles from "../styles/episodes.module.css"

const Episodes:FC =()=>{    
  return (
    <Layout>
      <Head>
        <title>Episodes</title>
      </Head> 
      <Image
            className={styles.images}
            src="./episodes.svg"
            alt="characters"           
            width={175}
            height={136}
            priority
        />   
    </Layout>
  )
}
export default Episodes