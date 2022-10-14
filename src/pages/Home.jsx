import React, {useState} from 'react'

//Containers
import CardList from '../containers/CardList'
import FiltersList from '../containers/FiltersList'

//Hooks
import useFetch from '../hooks/useFetchData';

const Home = () => {

  const [search, setSearch] = useState("");
  const {allData,loading} = useFetch();

  const searcher = (e) => {
    setSearch(e.target.value)
  }
  
  const resdata = !search ? allData : allData.filter((data)=>data.title.toLowerCase().includes(search.toLowerCase()))

    return (
    <div>
      <section className='flex flex-col md:flex-row pb-6 -mt-1'>
        <FiltersList search={search} searcher={searcher}/>
        <CardList resdata={resdata} search={search}/>
      </section>  
    </div>
  )
}

export default Home