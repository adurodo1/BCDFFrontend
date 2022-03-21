import { useEffect,useState } from "react";
import React from "react";
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';
import {CountryCurrencySelector} from './CountryCurrencySelector'



export const CoinList=(props)=>{
  const[coins,setCoins]=useState(null);
  const[loading, setLoading]=useState(false);
  const[error,setError]=useState(null);
  const[arr,setArr]=useState([]);


 // props.searchvalue;
  //setData(coins.filter(data => data.name ==  props.searchvalue));
  //if search value matches data

 // const arr=[];//create array to pass fixed rates

  useEffect(()=>{




    setLoading(true);
    fetch(`https://api.coinlore.net/api/tickers/`, {
        "method": "GET",
        headers: {
      
           'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(response=>response.json()).then((c)=>{setCoins(c.data)
        for (let key in c.data) {
            if (c.data.hasOwnProperty(key)) {
                arr.push(c.data[key].price_usd) 
           }
          }
    
          console.log(arr[9])
          setArr(arr)
    
    }).then(()=>{setLoading(false)}).catch(setError);
    
   

  },[error]);

  //appropriate state would yield appropriate call
if(loading) return (<></>);
if(!coins) return null
if(coins)
return(

    <>

    <Table striped bordered hover variant="dark">



  <thead>
    <tr>
     
      <th>Coin</th>
      <th>Rank</th>
      <th>
<CountryCurrencySelector coinListPrice={coins}  resetview={setCoins} original={arr}/>
</th>
      <th>Price in BTC</th>
      <th>Percentage Change 7 days</th>
    </tr>
  </thead>
  <tbody>
    {props.searchvalue===''?coins.map((data,key)=>(

<tr key={key}>
      <td><Link to='/Single' state={data}>{data.name}</Link></td>
      <td>{data.rank}</td>
      <td>{data.price_usd}</td>
      <td>{data.price_btc}</td>
      <td>{data.percent_change_7d}</td>  
      </tr>
  

            
)):coins.map((data,key)=>(
//  coins.filter(data => data.name ==  props.searchvalue)
     (data.name.includes(props.searchvalue)?
  <tr key={key}>
        <td>{data.name}</td>
        <td>{data.rank}</td>
        <td>{data.price_usd}</td>
        <td>{data.price_btc}</td>
        <td>{data.percent_change_7d}</td>
        </tr>:""
     )
  
              
  ))}
     
  </tbody>
</Table>
</>
);





}