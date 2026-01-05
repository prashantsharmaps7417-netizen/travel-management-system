import { useState } from "react";

function Register() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const registerUser = async () => {
    const res = await fetch("http://localhost/backend/api/register.php",{
      method:"POST",
      headers:{ "Content-Type":"application/x-www-form-urlencoded" },
      body:`name=${name}&email=${email}&password=${password}`
    });
    alert(await res.text());
  };

  return (
    <div className="form">
      <h3>Sign Up</h3>
      <input placeholder="Name" onChange={e=>setName(e.target.value)} />
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={registerUser}>Sign Up</button>
    </div>
  );
}

export default Register;
