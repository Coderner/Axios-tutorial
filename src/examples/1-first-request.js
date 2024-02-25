import { useEffect, useState } from 'react';
import axios from 'axios';
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {

  const [products, setProducts]=useState([]);

  const fetchData = async () =>{
       try{
            const res = await axios(url);
            console.log(res.data);
            setProducts(res.data);
       }
       catch(error){
            console.log(error);
       }
  }

  useEffect(() => {
      fetchData();
  }, []);

  return (
    <>
       <h2 className='text-center'>first request</h2>
       <div className='main'>
       {
         products && (
           products.map((product)=>{
             return(
              <div key={product.id} className='card'>
                <img src={product.image} alt={product.name} className='product-image'/>
                <h5>{product.name}</h5>
                <h6>{product.company}</h6>
                <h6>{product.price}</h6>
              </div>
             )
           })
         )
       }
       </div>
    </>
  );
};
export default FirstRequest;
