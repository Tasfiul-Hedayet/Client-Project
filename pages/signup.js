import styles from "../styles/signup.module.css";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebaseConfig";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Signup() {
  const auth = getAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const next = () => {
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      router.push("/dashboard");
    });
  };

  return (
    <>
      <div className={styles.bg}>
        <div className={styles.text}>
          <h1>
            <strong>Signup</strong>
          </h1>
        </div>
        <br />

        <div className={styles.form}>
          <form>
            <label for="email">Email Address </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              required
            />
            <br />
            <br />
            <label for="last">Password </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              required
            />
            <br />
            <br />

            <button className={styles.button} onClick={next}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
