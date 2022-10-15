import React, {useState} from 'react'

//Containers
import CardList from '../containers/CardList'
import FiltersList from '../containers/FiltersList'
import CategoriesList from '../containers/CategoriesList';

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
    <div>
      <div className='w-full h-[376px]'>
        <img src={bannerImage} alt="" className='absolute h-[337px] w-full object-cover'/>
      </div>
      <div>
        <h2 className='font-bold text-5xl text-primary text-left ml-28'>Categories</h2>
      </div>
      <section className='flex flex-col pb-0'>
        <CategoriesList/>
      </section>
      <section className='flex flex-row pb-6 mt-1'>
        <FiltersList search={search} searcher={searcher}/>
        <CardList pagdata={pagdata} resdata={resdata} searcher={searcher} avPage={avPage} rePage={rePage} count={count}/>
      </section>  
    </div>
  )
}

export default Home