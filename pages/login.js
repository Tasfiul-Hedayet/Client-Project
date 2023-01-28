import styles from "../styles/login.module.css";
import { useState } from "react";
import Link from "next/link";
import { app, database } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { VscAccount } from "react-icons/vsc";
import { MdOutlinePassword } from "react-icons/md";


const Login = () => {
  
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const databaseRef = collection(database, "User");

  const addData = () => {
    addDoc(databaseRef, {
      name: name,
      password: password,
    })
      .then(() => {
        alert("Data Send");
        setName(value);
        setPassword(value);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.form}>
          <div className={styles.title}>Login</div>
          <div className={styles.field}>
            {/* username */}
            <div className={styles.username}>
              <VscAccount className={styles.icon} />
              <input
                type="text"
                placeholder="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* password */}
            <div className={styles.password}>
              <div className="icon">
                <MdOutlinePassword className={styles.icon} />
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className={styles.button}>
              <div className={styles.stext} onClick={addData}>
                Submit
              </div>
            </div>

            <div className={styles.connect}>
              <Link className={styles.ctext} href="/">
                Forgot your password{" "}
              </Link>
              or
              <Link className={styles.ctext} href="#">
                {" "}
                SignUp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
