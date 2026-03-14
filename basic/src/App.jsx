import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Chaif from './chai';
import Item from './Components/Item'
import './App.css'
import Itemdate from './Components/Itemdate';

 
function App() {

  const response =[
    {
      name:"surfexcel",
      day: "21",
      month: "june",
      year: " 2024"
    },

    {
      name:"nirma",
      day: "21",
      month: "june",
      year: " 2025"
    },

    {
      name:"Rin",
      day: "21",
      month: "june",
      year: " 2026"
    }
  ]

  

  return (
    <>
   <Item name ={response[0].name}  ></Item>
   <Itemdate day ={response[0].day}  month = {response[0].month}  year = {response[0].year} ></Itemdate>

   <Item name ={response[1].name}  ></Item>
   <Itemdate day ={response[1].day}  month = {response[1].month}  year = {response[1].year} ></Itemdate>

   <Item name ={response[2].name}  ></Item>
   <Itemdate day ={response[2].day}  month = {response[2].month}  year = {response[2].year} ></Itemdate>

    <div className='App'> 
    <h1>hello </h1>
    </div>

    </>
  ); 
}

export default App
