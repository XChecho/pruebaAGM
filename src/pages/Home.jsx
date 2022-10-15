import React, {useState} from 'react'

//Containers
import CardList from '../containers/CardList'
import FiltersList from '../containers/FiltersList'

//Hooks
import useFetch from '../hooks/useFetchData';

//Assets
import bannerImage from '../assets/bannerImage.png'

const Home = () => {

  const [search, setSearch] = useState("");
  const [count,setCount] = useState(0);

  const {allData,loading} = useFetch();

  const searcher = (e) => {
    setSearch(e.target.value)
  }

  const rePage = () => {
    (count)===0 ? null : setCount(count - 9)
  }

  const avPage = () => {
    (pagdata.length) < 9 ? null :setCount(count + 9)
  }

  const resdata = !search ? allData : allData.filter((data)=>data.title.toLowerCase().includes(search.toLowerCase()))
  const pagdata = resdata.slice(count,count+9);

    return (
    <div className='bg-offback -mt-[425px] md:-mt-[6.8125rem] '>
      <div className='w-full h-[200px] md:h-[376px] -mt-32'>
        <img src={bannerImage} alt="" className='absolute mt-2 h-[337px] w-full object-cover'/>
      </div>
      <div>
        <h2 className='font-bold md:text-5xl text-primary text-left md:ml-28'>Categories</h2>
      </div>
      <section className='flex flex-col pb-3 md:pb-0 false 2xl:max-w-screen-2xl'>

      </section>
      <section className='flex flex-col md:flex-row pb-6 -mt-1'>
        <FiltersList search={search} searcher={searcher}/>
        <CardList pagdata={pagdata} resdata={resdata} search={search} avPage={avPage} rePage={rePage} count={count}/>
      </section>  
    </div>
  )
}

export default Home