import React from 'react';
import Axios from "axios";
import { useState } from 'react';
import './advisors.css';
import 'semantic-ui-css/semantic.min.css'
import {
    Button,
    Dropdown,
    Icon
} from 'semantic-ui-react'
 /* <Button onClick={()=> {deleteAdvisor(advisors.advisors_id)} }className="delete">Delete</Button> */



function App() {

    const [advisorsList,setadvisorList] = useState([]);

    const getAdvisors = () => {
        Axios.get("http://localhost:3001/advisors").then((response) => {
            console.log(response);
            setadvisorList(response.data);
        });
    };

    const deleteAdvisor = (advisors_id) => {
        Axios.delete(`http://localhost:3001/delete/${advisors_id}`).then((response) => {
            setadvisorList(
                advisorsList.filter((val) => {
                    return val.advisor_id !== advisors_id;
                })
            );
        });
    };



    return (
        <div className="advisors">
            <Button onClick={getAdvisors}>Advisors</Button>
            {advisorsList.map((users,roles,organisations) => {
                return (
                    <div className="advisor">
                        <div class="content">
                            <div class="description">Name: {users.username}</div>
                            <div class="description">Role: {users.role_id}</div>                          
                            <div class="description">Company: {users.org_id}</div>
                            <div class="description">Rep Code: {users.rep_code}</div>
                        </div>
                        <div class="extra content">
                            <div >
                                <div class="ui basic green button">Approve</div>
                                <div class="ui basic red button">Decline</div>
                                <div class="ui basic button">Edit</div>
                                <div class="ui basic button">Delete</div>
                               
                            </div>
                        </div>
                  

                    </div>
                )
            })}

        </div>
    )
}

export default App;