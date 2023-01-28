
import styles from "../styles/dashboard.module.css";
import Link from "next/link"

function dashboard () {
  return (
    <>
    <div className={styles.bg}>
    <h1>Welcome to Dashboard</h1>
    
        <button>
        <Link href="/supplier">Supplier</Link>
        </button>
        <button>
        <Link href="/product">Product</Link>
        </button>
        <button>
        <Link href="/purchase">Purchase</Link>
        </button>
        <br/>
        <button>
        <Link href="/customer">Customer</Link>
        </button>
        <button>
        <Link href="/payment">Payment</Link>
        </button>
        <button>
        <Link href="/invoice">Invoice</Link>
        </button>
        <button>
        <Link href="/inventory">Settings</Link>
        </button>
        <button>
        <Link href="/">Logout</Link>
        </button>
        
    </div>
    </>
  )
}

export default dashboard