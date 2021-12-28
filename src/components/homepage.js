import styles from '../style/homepage.module.css';
// import { useState, useEffect } from 'react';
import useFetch from './customHooks/useFetch';

// const Home = (props) => {
const Home = ({title}) => {
  // //   const [name, setName] = useState('jonas');
  // //   const onClick = () =>{
  // //       setName('luigi');
  // //   }

  // // const { title } = props;

  // const [error,setError] = useState(null);
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // axios
  //   setTimeout(() => {     // setTimeout delay the process time and use it only when it is required specifically
  //     fetch('http://localhost:8000/blogs')
  //       .then((res) => {
  //         console.log(res);
  
  //         if (!res.ok) {
  //           throw Error('could not fetch data!');
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //           setData(data);
  //           setLoading(false);
  //           setError(null);
  //           console.log(data);
  //       })
  //       .catch(err => {
  //           console.log(err.message);
  //           setError(err.message);
  //           setLoading(false);
  //       });
  //   }, 1000);
  // }, []);

  const {data, isLoading, error} = useFetch('http://localhost:8000/blogs');

  return (
    <div className={styles.home}>
      {/* <div className={styles.name}>
          <p>{name}</p>
      </div>
      <button onClick={onClick}>Click Me</button> */}

      <h1 className={styles.title}>{title}</h1>
      {isLoading && <div>loading...</div>}
      {error && <div>{error}</div>}
      <div className ={styles.cards} >
      {
          data && data.map(i => (
              <div className={styles.card} key={i.id}>
                  <h2>{i.title}</h2>
                  <p className={styles.author}>Written by <span>{i.author}</span></p>
                  <p className={styles.description}>{i.body.substring(0, 500)}</p>
              </div>
          ))
        }
        </div>
    </div>
  );
};

export default Home;
