import React, { useState } from 'react'

const PetAdoptionForm = () => {
  const [formData,setFormData] = useState([]);
  const [values,setValues] = useState({
    petName: "",
    petType: "Dog",
    breed: "",
    adopterName: "",
    email: "",
    phone: ""
  })

  const [showTable, setShowTable] = useState(false);
  const [petName,petType,breed,adopterName,email,phone] = values;
      console.log(petName, petType, breed, adopterName, email, phone);

      const [error,setErrors] = useState({
        petName: "",
        petType: "",
        breed: "",
        adopterName: "",
        email: "",
        phone: ""
      })
  return (
    <div>PetAdoptionForm</div>
  )
}

export default PetAdoptionForm