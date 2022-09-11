import { Navigation } from "./components/Navigation/Navigation";
import {HomePage } from './Container/HomePage'
import  useFetch  from './CustomHooks/FetchHooks/useFetch';
import { useEffect, useState, createContext } from 'react';
import  { CourseSecion } from "./Container/CourseSecion";
import { Coursepage } from './Container/Coursepage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { NotFound } from './Container/NotFound';
import { Error } from "./Container/Error";

export const DataContext = createContext();
function App() {
    const [data, setData] = useState(null)
    const handleChange = (e) => console.log(e.target.value)
     const {response, error, loading} = useFetch('https://raw.githubusercontent.com/shwky56/shwky56.github.io/main/facapi/data.json');
      fetch('')
      .then((e) =>  e.json())
      .then(e => console.log(e.at(1)));
      useEffect( () => {
         if(response){
         setData(response)
      }
      })
      
    //   console.log(data.filter(d => d.typ ==="python"))

return(
  <>
  {error && <Error error={error}/>}
  {(loading || response) && <DataContext.Provider value={{data, error, loading, setData}}>
    <BrowserRouter>
      <Navigation/>
      <Routes>

         <Route path='/al7mdllh' element={<HomePage />} />
         <Route path='/al7mdllh/course/:id' element={<Coursepage />} />
         <Route path='*' element={<NotFound/>} />
      </Routes> 
    </BrowserRouter>
  </DataContext.Provider>
  }
  </>
);
}

export default App;
