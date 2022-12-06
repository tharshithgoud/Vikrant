import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/vikrant.png";
function SignIn() {
  const [user, setuser] = useState('')
  const [pass, setPass] = useState('')
  async function login(event) {
    console.log(user)
    event.preventDefault()
    const response = await fetch("http://localhost:3002/login", {
      method: 'POST', headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        user,pass
      })
    })
    const data = await response.json();
    console.log(data);
    if(!data.user){
      alert("Login Unsuccesfull Invalid username or/and password!!")
    }
    else{
      window.location.href = '/home'
    }
  }
  return (
    <div>
      <body class="flex h-screen bg-yellow-500">
        <div class="w-full max-w-xs m-auto bg-yellow-100 rounded p-5">
          <header>
            <img class="w-44 mx-auto mb-5" src={logo} />
            <form onSubmit={login}>
              <div>
                <label class="block mb-2 text-yellow-600" for="username">
                  Username
                </label>
                <input
                  class="w-full p-2 mb-6 text-yellow-700 border-b-2 border-yellow-500 outline-none focus:bg-gray-300"
                  type="text"
                  name="username"
                  value={user}
                  onChange={(e) => setuser(e.target.value)}
                />
              </div>
              <div>
                <label class="block mb-2 text-yellow-500" for="password">
                  Password
                </label>
                <input
                  class="w-full p-2 mb-6 text-yellow-700 border-b-2 border-yellow-500 outline-none focus:bg-gray-300"
                  type="password"
                  name="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <div>
          
                <input
                  class="w-full bg-yellow-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 mb-6 rounded text-center"
                  type="submit"
                />
              </div>
            </form>
          </header>
        </div>
      </body>
    </div>
  );
}
export default SignIn;
