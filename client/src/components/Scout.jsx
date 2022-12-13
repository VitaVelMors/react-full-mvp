import { Card } from "react-bootstrap"; 
import { useContext } from "react";
import axios from "axios";
import { listContextStates } from "../App";

const Scout = (props) => {
  const { ApiUrl, setRefreshData, scout } = useContext(listContextStates);
  
  const handleClick = async () => {
    await axios.delete(`${ApiUrl}/${props.id}`);
    setRefreshData(true);
    console.log('deleted scout')
  }
  return <Card>{scout}
</Card>;
};

export default Scout;