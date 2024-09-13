//  start from here

const signupForm=document.getElementById('signup');
signupForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const formData = new FormData(signupForm);
    console.log(formData);
    
    const formDataObject={};
    formData.forEach((value,key)=>{
        formDataObject[key]=value;
    })
    // console.log(formDataObject);
    
    fetch("http://localhost:3000/user/signup",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(formDataObject)
    })
    .then(res=>res.json())
    .then(data=>{
        alert(data.message);
    })
    .catch(err=>{alert("Signup failed")});
})