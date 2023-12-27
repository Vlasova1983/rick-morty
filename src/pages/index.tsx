import Home from '@/components/screens/home/Home'
import { IHero } from '@/interfaces/hero.interface';
import { HeroService } from '@/services/characters.service';
import { NextPage,GetServerSideProps } from 'next';
import Head from "next/head";

 const  HomePage:NextPage<{ results:IHero[] }>=({results})=> { 
  return (
    <>
      <Head>
        <title>Character</title>
      </Head>
      <Home results={results}/>
    </>
  )  
}
export const getServerSideProps:GetServerSideProps<{ results: string | IHero[] }>= async()=>{
const results = await HeroService.getAll()

  return {
    props:{results}
  }
}


export default HomePage
