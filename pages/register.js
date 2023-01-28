import styles from "../styles/signup.module.css";
import { useState } from 'react'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {app}  from '../firebaseConfig'
import { useRouter } from 'next/router'

export default function Register()
{
    const auth = getAuth();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signup = () =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            router.push('/dashboard')
        })
    }

    return(

        <main className={styles.main}>
            <h1>Register</h1>

            <input placeholder='Email'
            className={styles.input1}
            onChange={(event) => setEmail(event.target.value) }
            value={email}
            type='email'
            />
            <input
                placeholder='Password'
                className={styles.input1}
                onChange={(event) => setPassword(event.target.value) }
                value={password}
                type='password'
            />

            <button className={styles.button}
            onClick={signup}
            >
            Sign Up
            </button>
        </main>
    )
}