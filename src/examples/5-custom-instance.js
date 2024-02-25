import { useEffect } from 'react';
import axios from 'axios';
import authFetch from '../axios/custom';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    const res1 = await axios(randomUserUrl);
    const res2 = await authFetch("/react-store-products");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
