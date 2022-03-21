import React,{useState,useEffect} from "react";
import {FormControl} from 'react-bootstrap'
 


export const SearchForm=(props)=>{


    
    function inputCoin(e){

      console.log( e.target.value)

        
    }



return(


    <FormControl
    type="search"
    placeholder="Search"
    className="me-2"
    aria-label="Search" onChange={props.method}
  />
);

}