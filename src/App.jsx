/*
import React, { useState } from 'react'
import ProductCard from './components/ProductCard'
import SearchBar from './components/SearchBar'
import Navbar from './components/Navbar'

const APP_ID = "b3972793"
const APP_KEY = "91d4d909be31b7f05b7997fb6f2380b0"

const App = () => {

  const [allFood,setAllFood]=useState([]);
  const [search,setSearch]=useState('');
  const [loading,setLoading]=useState(false);

  const fetchFood=async()=>{
    try {
      setLoading(true);
      const res=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data=await res.json();
      setAllFood(data.hits);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
    }

  return (
    <div>
      <Navbar />
      <SearchBar search={search} setSearch={setSearch} fetchFood={fetchFood}/>
      <ProductCard allFood={allFood} loading={loading}/>
    </div>
  )
}

export default App
*/

import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Navbar from './components/NavBar';
import ProductCard from './components/ProductCard';

const App = () => {

  const APP_ID = "b3972793"
  const APP_KEY = "91d4d909be31b7f05b7997fb6f2380b0"

  const [allFood, setAllFood] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchFood = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await res.json();
      setAllFood(data.hits);
      setLoading(false);
      setSearch("");
    } catch (error) {
      setLoading(false);
    }
  }


  
 

  return (
    <>
      <div  className='bg'>
        <Navbar />
        <SearchBar search={search} setSearch={setSearch} fetchFood={fetchFood} />
        <ProductCard allFood={allFood} loading={loading} />
      </div>
    </>
  )
}

export default App




// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import ProductCard from './components/ProductCard'
// import SearchBar from './components/SearchBar'

// const App = () => {

  // const APP_ID = "b3972793"
  // const APP_KEY = "91d4d909be31b7f05b7997fb6f2380b0"

  // const [allFood, setAllFood] = useState([]);
  // const [search, setSearch] = useState('');
  // const [loading, setLoading] = useState(false);

  // const fetchFood = async () => {
  //   try {
  //     setLoading(true);
  //     const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  //     const data = await res.json();
  //     setAllFood(data.hits);
  //     setLoading(false);
  //     setSearch("")
  //   } catch (error) {
  //     setLoading(false)
  //   }
  // }

//   return (
//     <div className='bg'>
//       <Navbar />
//       <SearchBar search={search} setSearch={setSearch} fetchFood={fetchFood} />
//       <ProductCard allFood={allFood} loading={loading} />
//     </div>
//   )
// }

// export default App;