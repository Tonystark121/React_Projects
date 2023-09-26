import React, { useState, useEffect } from "react";
import Navbar from "./Components1/Navbar/Navbar";
import Movies from "./Components1/Movie/Movies";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [enterData, setEnterData] = useState('')

  const api = "https://api.punkapi.com/v2/beers";

  const userData = props => {
      setEnterData(props)
  }
  useEffect(() => {
    const fetchData = (api) => {
      axios
        .get(api)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    fetchData(api);
  }, []);
   
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <>
      <Navbar onEnterData={userData} />
      <Movies data={data} input={enterData} />
    </>
  );
}

export default App;

// import Header from './Components/Header';
// import React from 'react'
// import Users from './Components/Users';
// import UserFinder from './Components/UserFinder';
// import Find from './Components/Find';

// const App = () => {

//   return (
//      <React.Fragment>
//           <Header />
//           <UserFinder />
//           <Find />
//      </React.Fragment>
//   )
// }

// export default App;
