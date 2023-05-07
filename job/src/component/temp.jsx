import React, { Component } from 'react'

export default class temp extends Component {
  render() {
    return (
      <>
        <form action="">
            <table align='center' width={600}>
                <tr>
                    <td>name</td><td> <input type="text" name="name" placeholder="name..." ref={register}/></td>
                    <td>dob</td><td> <input type="text" name="dob" placeholder="dob..." ref={register}/></td>
                </tr>
                <tr></tr>
                <tr>
                    <td>govt id </td><td><input type="text" name="govt" placeholder="govt..." ref={register}/></td>
                    <td>guardian detail</td><td> <input type="text" name="gd" placeholder="guardian name..." ref={register}/></td>
                    <td>sex</td><td><input type="text" name="sex" placeholder="gender..." ref={register}/></td>
                </tr>
                <tr>
                    <td>name</td><td> <input type="text" name="name" placeholder="name..." ref={register}/></td>
                    <td>dob</td><td> <input type="text" name="dob" placeholder="dob..." ref={register}/></td>
                    <td>sex</td><td> <input type="text" name="sex" placeholder="gender..." ref={register}/></td>
                </tr>
                <tr>
                    <td>name</td><td> <input type="text" name="name" placeholder="name..." ref={register}/></td>
                    <td>dob</td><td> <input type="text" name="dob" placeholder="dob..." ref={register}/></td>
                    <td>sex</td><td> <input type="text" name="sex" placeholder="gender..." ref={register}/></td>
                </tr>

            </table>
        </form>
      </>
    )
  }
}
