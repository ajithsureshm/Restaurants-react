
import React from 'react'
import { useState,useEffect } from "react";
import {Row,Col} from 'react-bootstrap';
import RestaurantCard from "./RestaurantCard";

function Home() {

    const [hotels,setHotels]=useState([])

  
    useEffect(() => {
        const fetchDAta=async()=>{

            await fetch('/restaurants.json')
            .then((res)=>res.json())
            .then((data)=>setHotels(data.restaurants))
        }

        fetchDAta()
     
    }, [])
    
    
    console.log("hotels is ",hotels);

  return (
    <Row>
      {
        hotels.map(item=>(

        <Col sm={12} md={8} lg={6} xl={3} >
        
        <RestaurantCard data={item}/>
        
        </Col>
        ))
      }
    </Row>
  )
}

export default Home