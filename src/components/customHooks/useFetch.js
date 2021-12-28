import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [error,setError] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        // axios
        setTimeout(() => {     // setTimeout delay the process time and use it only when it is required specifically
          fetch(url)
            .then((res) => {
              console.log(res);
      
              if (!res.ok) {
                throw Error('could not fetch data!');
              }
              return res.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
                setError(null);
                console.log(data);
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message);
                setLoading(false);
            });
        }, 1000);
      }, [url]);
      return{
          data,
          isLoading,
          error,
      };
};
 
export default useFetch;