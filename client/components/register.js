import React from 'react';
import Axios from "axios";
import { useState } from 'react';
import { Link } from "react-router-dom"
import 'semantic-ui-css/semantic.min.css';
import {
    Form,
    Button,
    Header

} from 'semantic-ui-react'
const organisations = [
    {
        key: 'Organisation A',
        text: 'Organisation A',
        value: 'Organisation A'
    },
    {
        key: 'Organisation B',
        text: 'Organisation B',
        value: 'Organisation B'
    },
    {
        key: 'Organisation C',
        text: 'Organisation C',
        value: 'Organisation C'
    },


]

const contacts = [
    {
        key: 'WhatsApp',
        text: 'WhatsApp',
        value: 'WhatsApp'
    },
    {
        key: 'Zoom',
        text: 'Zoom',
        value: 'Zoom'
    },
    {
        key: 'Telegram',
        text: 'Telegram',
        value: 'Telegram'
    },
    {
        key: 'Mobile',
        text: 'Mobile',
        value: 'Mobile'
    },
]

function newadvisor() {
    return (
        <div class="ui large conatiner">
            <Header className="formheader">Register with LushGreenery</Header>
            <div class="ui container">
                <div class="ui raised segment" >
                    <Form>
                        <h4 class="ui dividing header">Register</h4>
                        <Form.Field required>
                            <label>Full Name</label>
                            <input type="text" name="fullname" placeholder="Full Name"></input>
                        </Form.Field>
                        <Form.Field required>
                            <label>Email</label>
                            <input type="text" name="email" placeholder="jamesjohan@gmail.com"></input>
                        </Form.Field>
                        <div class="two fields">
                            <Form.Field required>
                                <label>Password</label>
                                <input type="password" name="password" placeholder="Password"></input>
                            </Form.Field>
                            <Form.Field required>
                                <label>Confirm Password</label>
                                <input type="password" name="password" placeholder="Confirm Password"></input>
                            </Form.Field>
                        </div>
                        <Form.Field required>
                            <label>Enter your MAS Representative code</label>
                            <input type="text" name="rep_code" placeholder="Exact Representative Number" />
                        </Form.Field>
                        <Form.Field required>
                            <label>Select Your Organisation</label>
                            <Form.Dropdown
                                placeholder="Organisation"
                                options={organisations}
                                selection
                            />
                        </Form.Field>
                        <Form.Field required>
                            <label>Choose your Contact Type(s)</label>
                            <Form.Dropdown
                                placeholder="WhatsApp"
                                options={contacts}
                                multiple
                                selection
                            />
                        </Form.Field>
                        <div class="inline fields">
                            <Form.Field>
                                <label>Contact Details(Mobile/WhatsApp)</label>
                                <Form.Input type="text" placeholder="xxxxxxxx" />
                            </Form.Field>
                            <Form.Field>
                                <label>Contact Details(Telegram Only)</label>
                                <Form.Input type="text" />
                            </Form.Field>
                            <Form.Field>
                                <label>Zoom ID</label>
                                <Form.Input type="text" />
                            </Form.Field>

                        </div>
                        <Button basic color='green' type="submit" as={Link} to="/success">Submit</Button>
                    </Form>
                </div>
            </div>
        </div>

    );
}
export default newadvisor;