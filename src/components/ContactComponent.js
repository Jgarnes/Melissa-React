import React, { Component } from 'react';

// import { Control, Form, Errors } from 'react-redux-form';

class Contact extends Component {

    render() {
        const middle = {
            textAlign: "center",
        }
    return (
      <div style={{backgroundColor: "rgb(211, 128, 4)", minHeight:"94vh"}}>
        <div class="container">
    <div class="row row-content align-items-center">
      <div class="col" style= {middle}>
        <h1>If you would like to reach me <br /> feel free to contact me.</h1>
      </div>
    </div>
    <div class="row row-content">
      <div class="col-md-6 mx-auto" width='100%'>
    <form name="htmlform" method="post" action="html_form_send.php" >
      <table width="450px" />
      <tr>
       <td valign="top">
        <label for="first_name">First Name *</label>
       </td>
       <td valign="top">
        <input  type="text" name="first_name" maxlength="50" size="30" />
       </td>
      </tr>
       
      <tr>
       <td valign="top">
        <label for="last_name">Last Name *</label>
       </td>
       <td valign="top">
        <input  type="text" name="last_name" maxlength="50" size="30" />
       </td>
      </tr>
      <tr>
       <td valign="top">
        <label for="email">Email Address *</label>
       </td>
       <td valign="top">
        <input  type="text" name="email" maxlength="80" size="30" />
       </td>
       
      </tr>
      <tr>
       <td valign="top">
        <label for="telephone">Telephone Number * </label>
       </td>
       <td valign="top">
        <input  type="text" name="telephone" maxlength="30" size="30" />
       </td>
      </tr>
      <tr>
       <td valign="top">
        <label for="comments">Comments *</label>
       </td>
       <td valign="top">
        <textarea  name="comments" maxlength="1000" cols="33" rows="6"></textarea>
       </td>
       
      </tr>
      <tr>
       <td colspan="2" style={middle}>
        <input type="submit" value="Submit" /> 
       </td>
      </tr>
      <table />
      </form>
      </div>
    </div>
  </div>
  </div>
        );
    }
}
        
export default Contact;