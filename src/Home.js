import Header from './Component/Header';
import Main from './Component/Main';
import ItemCards from './Component/ItemsCards';
import Navbar from './Component/HeaderFooter/Navbar';
import Footer from './Component/HeaderFooter/Footer';
import {useState} from 'react';

function Home() {
    let [c, setC]= useState("None");
    function isupdate(name){
      setC(name);
    }
    return (<div id="Wrapper">
      <Navbar/>
        <Header />
        <Main fun={isupdate}/>
         <ItemCards name={c}/>
         <Footer/>
    </div>)
}
export default Home;