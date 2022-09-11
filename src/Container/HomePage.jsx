import { Fragment, useContext  } from "react"
import { Header } from "../components/Header/Header"
import { DataContext } from '../App';
import { CourseSecion } from './CourseSecion';
import { CourseLoading } from './CourseLoading';
import { Error } from "./Error";


export const HomePage = () => {
  const {data, error, loading, setData} = useContext(DataContext);
  console.log(data);
  return (
    <Fragment>
        <Header />
        {loading && <CourseLoading/> }
        
        {error && <Error error={error}/>}

        {data && <CourseSecion data={data}/>}
    </Fragment>
  )
}
