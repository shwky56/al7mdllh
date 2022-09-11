import { CardContainer, Item } from "./TooltipCard.styles";
import { useContext } from 'react';
import { useState } from 'react';
import { DataContext } from '../../../App';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const TooltipCard = ({
  value = "",
  marginTop = "3.3rem",
  withoutPadding = false,
}) => {
  const {data, error, loading, setData} = useContext(DataContext)
  let searchData =[];
  if(typeof value === 'string' && value.length !== 0)
  searchData = data.filter(course => 
    course.title.toLowerCase().includes(value.toLowerCase()));
  // const [searchData, setSearchData] = useState([]);
//   useEffect(() => {
//     setSearchData( data.filter(course => 
//       course.title.toLowerCase().includes(value.toLowerCase())));
//   })
//  console.log(value);
  return (
    <CardContainer  withoutPadding={withoutPadding}>
      <Value data={searchData}/>
        
    </CardContainer>
  );
};

export default TooltipCard;

const Value = ({data} ) => {
  return (
    <>
    {data.slice(-12).map((item, i) => {
        return (<Link to={`/al7mdllh/course/${item.id + 1}`} key={item.id + 1}  ><Item  className="hover:text-gray-600"  key={item.id} >{item.title}</Item></Link>);
        })}
    </>
  )
}

