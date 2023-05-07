import React, {useState, useRef, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

    const [data, setData] = useState([]);

    useEffect(() => 
    {
        const f =  async () =>
        {
            const response = await axios.get('data.json');
            setData(response.data);
        }   
        f()
    },[]);

    function Category({ category }) {
        return (
          <ul>
            <li>{category.Name}</li>
            {category.children.length > 0 && (
              <ul>
                {category.children.map((child) => (
                    <Category category={child} />
                ))}
              </ul>
            )}
          </ul>
        );
      }
     
    
    return (
        <div>
        {data.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  )
}

export default App;
