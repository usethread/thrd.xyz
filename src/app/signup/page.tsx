"use client";
import Navbar from "@/components/Navbar";
import { FormEvent, useEffect, useState } from "react";

export default function SignUp() {
  const [readOnly, setReadOnly] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="body">
      <Navbar />
      <div className="content justify-center items-center">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1 className="title text-center">Sign Up</h1>
          <div className="flex flex-col gap-4 p-4">
            <div>
              <label className="form-label">Email</label>
              <input
                readOnly={readOnly}
                value={username}
                placeholder="example@strafe.chat"
                type={"text"}
                className="form-input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="form-label">Email</label>
              <input
                readOnly={readOnly}
                value={username}
                placeholder="example@strafe.chat"
                type={"text"}
                className="form-input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
