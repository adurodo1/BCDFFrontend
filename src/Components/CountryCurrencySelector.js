import React,{useState,useEffect} from "react"



export const CountryCurrencySelector=(props)=>{

    const [options,setOptions]=useState(null);
    const [selected,setSelected]=useState(null);
    const[loading, setLoading]=useState(false);
    const[error,setError]=useState(null);

    //Deep Copy
  


    useEffect(()=>{


        setLoading(true);
        fetch(`http://localhost:3000/getAllCurrencyToDollar`, {
            "method": "GET",
            headers: {
              'Content-Type': 'application/json',
               'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(response=>response.json()).then((c)=>{setOptions(c);setSelected(options[0].Currency)}).then(()=>{setLoading(false)}).catch(setError);
        
       
    
      },[error]);


     /// for changing currency values
      const[currencyDollarAmount,setDollarAmount]=useState(1);

      function handleChange(e) 
      {

       // this.setState({value: event.target.value});
     setSelected(  e.target[e.target.selectedIndex].value)
     setDollarAmount(  e.target[e.target.selectedIndex].dataset.dollaramount)
     //console.log( e.target[e.target.selectedIndex].dataset.dollaramount)
  
    console.log( props.coinListPrice[0].price_usd   + " "+options[0].DollarAmount )


  
       
  //  props.resetview(...props.coinListPrice)
   // console.log(props.coinListPrice)


 
   
    
        }
        
        useEffect(()=>{

            props.coinListPrice.forEach((data,key)=>{

                console.log( props.original[0])
                data.price_usd=props.original[key] * currencyDollarAmount;
        
                
        
            })

           // console.log(currencyDollarAmount)
           props.resetview(prevItems => [...props.coinListPrice])

        //    // console.log(selected)

        //    fetch(`http://localhost:3000/getCurrencyToDollarWithID/${selected}`, {
        //     "method": "GET",
        //     headers: {
        //       'Content-Type': 'application/json',
        //        'Content-Type': 'application/x-www-form-urlencoded',
        //     }
        // }).then(response=>response.json()).then((c)=>{setOptions(c);setSelected(options[0].Currency)}).then(()=>{setLoading(false)}).catch(setError);
    

        },[selected])

        if(loading) return <h1>loading</h1>
        if(!options)
        return null
         if(options )

return(

    <>
  
    <select value={selected} onChange={handleChange} data-dollaramount={currencyDollarAmount}>
   {options.map((data)=>(
       
      
     <option key={data._id} value={data.Currency} data-dollaramount={data.DollarAmount}>{data.Currency}</option>
       
   ))}
     
 </select>
    
    </>
);

}