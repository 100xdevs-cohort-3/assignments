import React from 'react'
import "./petAdoptionForm.css"
const PetAdoptionForm = () => {
  function submit() {

  }
  return (
    <div className="container">
      <div className="box">
        <form className="forms">
          Pet Name <br />
          <input type="text" placeholder='Pet Name' />
          Pet Type <br />
          <input type="text" />
          Breed <br />
          <input type="text" />
          Your Name <br />
          <input type="text" />
          Email <br />
          <input type="email" />
          Phone <br />
          <input type="text" />
          <button onclick={submit}>Submit</button>
        </form>
      </div>
    </div>

  )
}

export default PetAdoptionForm