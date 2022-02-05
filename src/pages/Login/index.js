import { useState } from "react";

import { useAuth } from "../../contexts/Auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();
  async function handleSignIn(event) {
    try {
      event.preventDefault();
      const data = {
        email,
        password,
      };

      await signIn(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <form className="col-sm-12 col-md-6 col-lg-4" onSubmit={handleSignIn}>
        <h3 className="text-center">Acesse sua conta</h3>
        <div className="form-group mt-2">
          <label htmlFor="">E-mail</label>
          <input
            type="email"
            className="form-control "
            placeholder="abc@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="abc@email.com"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary btn-sm mt-3" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
