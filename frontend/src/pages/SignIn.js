import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/vikrant.png";
function SignIn() {
  return (
    <div>
      <body class="flex h-screen bg-yellow-500">
        <div class="w-full max-w-xs m-auto bg-yellow-100 rounded p-5">
          <header>
            <img class="w-44 mx-auto mb-5" src={logo} />
            <form>
              <div>
                <label class="block mb-2 text-yellow-600" for="username">
                  Username
                </label>
                <input
                  class="w-full p-2 mb-6 text-yellow-700 border-b-2 border-yellow-500 outline-none focus:bg-gray-300"
                  type="text"
                  name="username"
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
                />
              </div>
              <div>
                <Link to = "/home">
                  <div
                    class="w-full bg-yellow-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 mb-6 rounded text-center"
                    type="submit"
                  >
                    Submit
                  </div>
                </Link>
              </div>
            </form>
          </header>
        </div>
      </body>
    </div>
  );
}
export default SignIn;
