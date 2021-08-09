import React from 'react';
import Axios from "axios";
import { useState } from 'react';
import './managepolicies.css';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import Newpolicy from './newpolicy.js'
import {
  Button
} from 'semantic-ui-react'

/* <Button as={Link} to="/newpolicy" >Policies</Button> */
function App() {

  const [policiesList, setpoliciesList] = useState([]);

  const getPolicies = () => {
    Axios.get("http://localhost:3001/managepolicies").then((response) => {
      console.log(response);
      setpoliciesList(response.data);
    });
  }

  const deletePolicy = (id) => {
    Axios.delete("http://localhost:3001/delete/policies_id").then((response) => {
      setpoliciesList(policiesList.filter((val) => {
        return val.id !== id;
      }));
    });
  }

  return (
    <div>
      <div class="ui segment" className="policies">
        <Button onClick={getPolicies}  >Policies</Button>

        {policiesList.map((policies, key) => {
          return (
            <div className="policy">
              <div class="content">
                <div class="description">Name: {policies.policy_id}</div>
                <div class="description">Company Name: {policies.org_name}</div>
                <div class="description">Policy Category: {policies.category_name}</div>
                <div class="description">Policy Name: {policies.policy_name}</div>
                <div class="description">Policy Detail: {policies.policy_details}</div>
                <div class="description">Added by: {policies.added_by_user}</div>
              </div>
            </div>
          );
        })}

      </div>

      <div className="newpolicybutton">
        <Button  >New Policy</Button>
      </div>

    </div>
  );
}





export default App;