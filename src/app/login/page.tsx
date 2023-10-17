"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

export default function Login() {
  const [readOnly, setReadOnly] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setReadOnly(false);
    }, 500);
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <div className="body">
      <Navbar />
      <div className="content justify-center items-center">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1 className="title text-center">Login</h1>
          <div className="flex flex-col gap-4 p-4">
            <div>
              <label className="form-label">Username</label>
              <input
                readOnly={readOnly}
                value={username}
                placeholder="username"
                type={"text"}
                className="form-input"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="form-label">Password</label>
              <input
                readOnly={readOnly}
                value={password}
                placeholder="********"
                type={"password"}
                className="form-input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="form-button">Login</button>
            <div className="w-full h-5 flex justify-between">
              <Link className="link" href={"/forgotpass"}>
                Forgot Password?
              </Link>
              <Link className="link" href={"/signup"}>
                New to strafe?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
