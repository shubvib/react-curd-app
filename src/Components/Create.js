import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";

export default function Create(){
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("")
  const [checkbox, setCheckbox] = useState(false);

  const postdata = () => {
    try {
        axios.post("https://63bfef3ee262345656f3cbd9.mockapi.io/api/curd-app/fakeData",{firstname,lastname,email,checkbox})
        alert("Data Uploaded Successfully!!!")
    } catch (error) {
        alert("Unable to Uploaded Data!!!")        
    }
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(checkbox);
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstname(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastname(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>E-mail</label>
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={(e) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Button type="submit" onClick={postdata}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
