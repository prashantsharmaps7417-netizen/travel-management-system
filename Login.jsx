import { useState } from "react";

function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const loginUser = async () => {
    const res = await fetch("http://localhost/backend/api/login.php",{
      method:"POST",
      headers:{ "Content-Type":"application/x-www-form-urlencoded" },
      body:`email=${email}&password=${password}`
    });
    alert(await res.text());
  };

  return (
    <div className="form">
      <h3>Login</h3>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={loginUser}>Login</button>
    </div>
  );
}

export default Login;
