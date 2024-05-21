import React, { useState } from "react";
import { auth } from "./firebaseConfig"; 
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      alert(`User registered: ${userCredential.user.email}`);
    } catch (error: any) {
      // Более детальная обработка ошибок
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use.");
      } else if (error.code === "auth/invalid-email") {
        alert("Invalid email.");
      } else if (error.code === "auth/weak-password") {
        alert("Weak password.");
      } else {
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
