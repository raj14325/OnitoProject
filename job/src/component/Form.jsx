import React, { useRef } from "react";
import "../App.css";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
const schema = yup.object().shape({
  firstName: yup.string().required("First Name should be required please"),
  email: yup.string().email(),
  sex:yup.string().required("Sex should be required"),
  age: yup.number().positive().integer().required(),
  govt:yup.string(),
  religion: yup.string(),
  occu:yup.string(),
  ms:yup.string(),
  bg:yup.string(),
  emob:yup.string(),
  add:yup.string(),
  state:yup.string(),
  country:yup.string(),
  city:yup.string(),
  dob:yup.string(),


});

function Form() {
  // const { register, handleSubmit, errors } = useForm({
  //   resolver: yupResolver(schema),
  // });

  let name=useRef(""), age=useRef(""), sex=useRef(""),mob=useRef(""),email=useRef(""),gd=useRef(""),govt=useRef(""),emob=useRef(""),add=useRef(""),state=useRef(""),city=useRef(""),country=useRef(""),pincode=useRef(""),occupation=useRef(""),religion=useRef(""),ms=useRef(""),bg=useRef(""),nationality=useRef("")
  const submitForm = (data) => {
    console.log(data);
    axios.post("http://localhost:50001/api/contacts",{name, age, sex,mob,email,gd,govt,emob,add,state,city,country,pincode,occupation,religion,ms,bg,nationality}).then((res)=>{console.log("inserted");})
    console.log(data);
  };
  return (
    <div className="Form">

      <div className="inputs">
        <form onSubmit={submitForm}>
        <table align='center' width={600}>
                <tr>
                    <td>name</td><td> <input ref={name} type="text" name="name" placeholder="name..."  /></td>
                    <td>mob</td><td> <input ref={mob} type="text" name="mob" placeholder="mobile no..."  /></td>
                </tr>
                <tr><td>age</td><td> <input ref={age} type="text" name="age" placeholder="age..."  /></td>
                    <td>sex</td><td> <input ref={sex} type="text" name="sex" placeholder="gender..."  /></td>
                </tr>
                <tr>
                    <td>email</td><td> <input ref={email} type="text" name="email" placeholder="email..."  /></td>
                    <td>emergency mobile</td><td> <input ref={emob} type="text" name="emob" placeholder="emergency mob..."  /></td>
                </tr>
                <tr>
                    <td>govt id </td><td><input ref={govt}  type="text" name="govt" placeholder="govt..."  /></td>
                    <td>guardian detail</td><td> <input ref={gd} type="text" name="gd" placeholder="guardian name..."  /></td>
                </tr>
                <tr>
                    <td>address</td><td> <input ref={add} type="text" name="add" placeholder="address..."  /></td>
                    <td>state</td><td> <input ref={state} type="text" name="state" placeholder="state..."  /></td>
                </tr>
                <tr>
                    <td>city</td><td> <input ref={city} type="text" name="city" placeholder="city..."  /></td>
                    <td>country</td><td> <input ref={country} type="text" name="country" placeholder="country..."  /></td>
                </tr>
                <tr>
                    <td>pincode</td><td> <input ref={pincode} type="text" name="pincode" placeholder="pincode..."  /></td>
                    <td>occupation</td><td> <input ref={occupation} type="text" name="occupation" placeholder="occupation..."  /></td>
                </tr>
                <tr>
                    <td>religion</td><td> <input ref={religion} type="text" name="religion" placeholder="religion..."  /></td>
                    <td>ms</td><td> <input ref={ms} type="text" name="ms" placeholder="marital status..."  /></td>
                </tr>
                <tr>
                    <td>blood group</td><td><input ref={bg} type="text" name="bg" placeholder="blood group..."  /></td>
                    <td>nationality</td><td> <input ref={nationality} type="text" name="nationality" placeholder="nationality..."  /></td>
                </tr>
                <tr>
                  <input type="submit" value="submit" />
                </tr>
            </table>

        </form>
      </div>
    </div>
  );
}

export default Form;