import React from 'react';
// import Axios from "axios";
// import { useState } from 'react';
import './newpolicy.css';
import 'semantic-ui-css/semantic.min.css';
import {
  Button,
  Form,
  Header
} from 'semantic-ui-react'

//     const [advisorsList, setadvisorList] = useState([]);

//     const getAdvisors = () => {
//         Axios.get("http://localhost:3001/advisors").then((response) => {
//             console.log(response);
//             setadvisorList(response.data);
//         });
//     };

const categories = [
  {
      key: 'Health Insurance',
      text: 'Health Insurance',
      value: 'Health Insurance'
  },
  {
      key: 'Life Insurance',
      text: 'Life Insurance',
      value: 'Life Insurance'
  },
  {
      key: 'Car Insurance',
      text: 'Car Insurance',
      value: 'Car Insurance'
  },


]
function newpolicy() {

  return (
    <div class="ui large conatiner">
      <Header className ="formheader">Add a new policy</Header>
      <div class="ui container">
        <div class="ui raised segment">
          <Form>
            <h4 class="ui dividing header">Policy Information</h4>
            <Form.Input required label="Company Name">
              <input type="text" name="companyname" placeholder="Company Name"></input>
            </Form.Input>
            <Form.Field required>
              <label>Category Name</label>
              <Form.Dropdown
                placeholder="Categories"
                options={categories}
                selection
              />
            </Form.Field>
            <Form.Input required label="Bundle Name">
              <input type="text" name="bundlename" placeholder="Bundle Name"></input>
            </Form.Input>
            <Form.Field required>
              <label>Policy Name</label>
              <input type="text" name="policyname" placeholder="Policy Name"></input>
            </Form.Field>
            <Form.TextArea label="Policy Description" required placeholder="Policy Description">
            </Form.TextArea>

            <Button basic color='green' >Submit</Button>
          </Form>
        </div>
      </div>
    </div>

  );
  }

  export default newpolicy;


