import { useEffect,useState } from "react";
import { useLocation } from 'react-router-dom';
import React from "react";
import Table from 'react-bootstrap/Table'


export const CoinSingle=(props)=>{

    const location = useLocation();
    const data = location.state;
    console.log(data);

    let arr=[];
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
     if(key!=="id"){
        arr.push(
            {title:key,value:data[key]})
         
   }
     }
      }


    return(<>

    
<Table striped bordered hover variant="dark">



<thead>
  <tr>
   
    <th>Column</th>
    <th>Info</th> 
  </tr>
</thead>
<tbody>

{arr.map((data,id)=>(

    <tr key={id}>
        <td>{data.title}</td>
        <td>{data.value}</td>
    </tr>
)

)}

 

</tbody>
</Table>
    
    </>);
}