import React from "react";

export default function WaitlistForm() {
    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()
  
      // Get data from the form.
      const data = {
        "entry.257088333": event.target.first.value,
        "entry.1499742430": event.target.last.value,
        "entry.965713319": event.target.email.value,
        "entry.2029065899": event.target.role.value,
      }
  
      //const content = new FormUrlEncodedContent(bodyValues);
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)
  
      // API endpoint where we send form data.
      const endpoint = 'https://docs.google.com/forms/d/e/1FAIpQLSfWLDrS5-895hUXKbeUlNU83nBRUrJ8ITLz2IFyC5CiD060Gg/formResponse'
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'x-www-form-urlencoded'
        },
        // Body of the request is the JSON data we created above.
        //body: JSONdata,
        body: new URLSearchParams(data),
        mode: "no-cors"
      }
  
      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options)
  
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json()
    }
    return (
      // We pass the event to the handleSubmit() function on submit.
      <form onSubmit={handleSubmit}>
        <label htmlFor="first">First Name</label>
        <input type="text" id="first" name="first" required />
  
        <label htmlFor="last">Last Name</label>
        <input type="text" id="last" name="last" required />


        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" required />


        <label htmlFor="role">Role</label>
        <input type="text" id="role" name="role" required />
  
        <button type="submit">Submit</button>
      </form>
    )
  }