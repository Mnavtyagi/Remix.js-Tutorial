import React, { useEffect , useState } from 'react';
import axios from 'axios';
import Card from '~/components/Card';

const UsersPage = () => {
  const [states,setStates] = useState<any[]>([])

  const fetchDataFromApi = async () => {
    try {
      const response = await axios.get("https://api.github.com/users");
      const data = await response.data;
      setStates(data);
    } catch (error:any) {
      console.log(error.response.data || error.message);
    }
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return (
    <>
    {
      states.length>0 && states.map((curr,i)=>{
        return <Card data={curr} key={i} />
      })
    }
    </>
  )
};
export default UsersPage;
