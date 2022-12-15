import React, { useEffect, useState } from 'react'


const FetchedApi = () =>{

    const [state, setState]  = useState([]);
    const [error, setError] = useState();
    const [pending, setPending] = useState(true);

    // const data = async() =>{
    //     const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    //     console.log(response);
    //     setState( await response.json());
        
    // }

    // useEffect(() =>{
    //     data();
    // },[]);


   useEffect(()=>{

    const fetchData = () =>{
   
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => {
          
            return res.json();
        }).then((value) => {
            setState(value);
        }).catch(err =>{
            setError(err.message);
        }).finally(()=>{
            setPending(false)
        })
    };

    fetchData();
   
   },[]);

  return (
    <div>
    
    
    <h1>API FETCH</h1>
    {error ? <div> {error} </div>: ""}
    {pending && <div><p>
        ..loading
    </p></div>}
     {state.map((value)=>{
        return(
            <>
                <div  className='api'>
                    <p>{value.id} {"- "}{value.title}</p>
                </div>
            </>
        )
     })}
    </div>
  )
}; 


export default FetchedApi;
