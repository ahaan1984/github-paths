import { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form';

function App() {
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    onFormSubmit();
  });

  // const fetchPaths = async() => {
  //   try {
  //     const res = await fetch(paths);
  //     console.log(res)
  //     if (!res.ok) {
  //       throw new Error('Failed to fetch data');
  //     }
  //     const data = await res.json();
  //     setPaths(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const onFormSubmit = async (link) => {
    try {
      const res = await fetch(link);
      // console.log(link)
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await res.json();
      console.log(data)
      setPaths(data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleClear = () => {
    setPaths([]); // Clear the paths by setting it to an empty array
  };

  return (
    <>
      <Form onFormSubmit={onFormSubmit} onClear={handleClear}/>
      <ul>
        {paths.map((path) => (
          <li key={path.sha}>
            <a href={path.html_url}>{path.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
