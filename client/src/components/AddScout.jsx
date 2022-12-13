import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { listContextStates } from '../App';
import axios from 'axios';


const AddScout = () => {
  // console.log(props)
  const {ApiUrl, scoutName, setScoutName, scoutAge, setScoutAge, 
    scoutGender, setScoutGender, refreshData, setRefreshData} = useContext(listContextStates);

  const addScoutToApi = async (e) => {
    await axios.post(`${ApiUrl}`, {
      name: `${scoutName}`, 
      age: `${scoutAge}`, 
      gender: `${scoutGender}` })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setRefreshData(true)
  };

      return(
        <div className="add-scout">
          <h4 className="text-center my-3">Add A Scout Here!</h4>
          <Form>
            <Form.Group className="mb-3" controlId="formScoutName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="Enter Scout's Name" 
              onChange={(e) => setScoutName(e.target.value)} 
              value={scoutName}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formScoutAge">
              <Form.Label>Age</Form.Label>
              <Form.Control 
              type="number" 
              placeholder="Enter Scout's Age" 
              onChange={e => setScoutAge(e.target.value)} 
              value={scoutAge}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formScoutGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="Enter Scout's Gender" 
              onChange={e => setScoutGender(e.target.value)} 
              value={scoutGender}/>
            </Form.Group>
 
            <Button variant="primary" type="submit" onClick={addScoutToApi}>
              Submit
            </Button>
          </Form>
        </div>
      )
  };

export default AddScout;


function BasicExample() {

}