import { Card, Button } from "react-bootstrap";
import UpdateScout from './UpdateScout';
import RemoveScout from './RemoveScout';
import Scout from "./Scout";
import React, { useContext, useState, useEffect } from 'react';
import { listContextStates } from '../App';
import axios from 'axios';

const GetScouts = () => {
  const {ApiUrl, refreshData, setRefreshData, allScouts, setAllScouts} = useContext(listContextStates);

  const getScoutsFromApi = async () => {
    let getScoutData = await axios.get(`${ApiUrl}`);
    setAllScouts([...getScoutData.data]);
  };
  
  useEffect(() => {
    getScoutsFromApi();
    setRefreshData(false)
  }, [refreshData]);
  // const getOneScout = async () => {
  //   let scoutData = await axios.get(`${ApiUrl}/scouts/:id`);
  //   setScout([...scoutData.data])
  // }


  return (
    <div className="get-scouts" onLoad={getScoutsFromApi}>{allScouts.map((scout) => {
      return <Card className='card' variant='Dark' key={scout.scout_id} name={scout.name}>
        Name: {scout.name} <br/>
        Age: {scout.age} <br/>
        Gender: {scout.gender}
      </Card>;
    })}        
    </div>
  );
};

export default GetScouts;