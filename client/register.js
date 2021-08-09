import React, { useState } from 'react';
import Title from "../components/title";
// import Helmet from "react-helmet";
import { Link } from "react-router-dom"
import 'semantic-ui-css/semantic.min.css'
import { Label, Form, Button } from 'semantic-ui-react';
// import {Container} from 'react-bootstrap'

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



function Newpolicy() {
    return (
        <div class="ui large container">
            <Title title="Register with Lush" />
            <Helmet bodyAttributes={{ style: 'background-color : #ACD1AF' }} />
            <div class="ui container">
                <div class="ui raised container segment">
                    <Form class="ui large form">
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
                                <input type="password" name="password" placeholder="Password"></input>
                            </Form.Field>
                        </div>

                        <div class="field">
                            <label>Upload Photo</label>
                            <Button>Upload file</Button>
                        </div>
                        <Form.Field required>
                            <label>Enter your MAS Representative code</label>
                            <input type="text" name="rep_code" placeholder="xxx"/>
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
                        <Button type="submit" as={Link} to="/success">Submit</Button>
                    </Form>




                </div>
            </div>


        </div>
    )
}

export default Newpolicy
