import React from "react";
import WaitlistForm from "./WaitlistForm";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
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
    setShowModal(false)
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
  }
  return (
    <>
      <button
        className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none "
        type="button"
        onClick={() => setShowModal(true)}
      >
        Join the Waitlist
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl bg-white-500">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Waitlist
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                    Join the waitlist to get early access to Practice! <br/>
                    When you have been selected, we will reach out to set up a demo.
                <form onSubmit={handleSubmit}>
                    <label htmlFor="first">First Name</label>
                    <input className="mb-0" type="text" id="first" name="first" required />
            
                    <label htmlFor="last">Last Name</label>
                    <input className="mb-0" type="text" id="last" name="last" required />


                    <label htmlFor="email">Email</label>
                    <input className="mb-0" type="text" id="email" name="email" required />


                    <label htmlFor="role">Role</label>
                    <input className="mb-0" type="text" id="role" name="role" required />
            
                    <button 
                    className={
                        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none "
                    }
                    type="submit">Submit</button>
                </form>
                </div>
                {/*footer*/}
                {/*
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
      </button>
      </div>*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}