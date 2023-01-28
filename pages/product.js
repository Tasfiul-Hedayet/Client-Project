import styles from "../styles/product.module.css";
import { app, database } from "../firebaseConfig";
import { collection, addDoc } from "../firebase/firestore";
import useForm from "@/hooks/useForm";


function Product() {

  const { form, onChangeHandler } = useForm({
    name: '',
    category: '',
    subcategory: '',
    brand: '',
    product_name:'',
    unit:'',
    purchase:'',
    sell:'',
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(form);
  };

  const databaseRef = collection(database, "Product Data Table");

  const addData = () => {
    addDoc(databaseRef, {
      name: form.name,
      category: form.category,
      category: form.subcategory,
      brand: form.brand,
      product_name: form.product_name,
      unit: form.unit,
      purchase: form.purchase,
      sell: form.sell,
    })
      .then(() => {
        alert("Data Send");
        useForm(" ");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className={styles.bg}>
        <div className={styles.text}>
          <h1>Product</h1>
        </div>
        <br />

        <div className={styles.form}>
          <form onSubmit={submitHandler}>

            <input
              id="name"
              name="name"
              placeholder="Supplier Name"
              type="text"
              onChange={onChangeHandler}
              value={form.name}
              required
            />
            <br />
            <br />

            <input
              id="category"
              name="category"
              placeholder="Category Name"
              type="text"
              onChange={onChangeHandler}
              value={form.category}
              required
            />
            <br />
            <br />


            <input
              id="subcategory"
              name="subcategory"
              placeholder="Sub Category Name"
              type="text"
              onChange={onChangeHandler}
              value={form.subcategory}
              required
            />
            <br />
            <br />

            <input
              id="brand"
              name="brand"
              placeholder="brand Name"
              type="text"
              onChange={onChangeHandler}
              value={form.brand}
              required
            />
            <br />
            <br />


            <input
              id="product_name"
              name="product_name"
              placeholder="Product Name"
              type="text"
              onChange={onChangeHandler}
              value={form.product_name}
              required
            />
            <br />
            <br />

            <input
              id="unit"
              name="unit"
              placeholder="Unit Measure "
              type="text"
              onChange={onChangeHandler}
              value={form.unit}
              required
            />
            <br />
            <br />

            <input
              id="purchase"
              name="purchase"
              placeholder="Purchasing price"
              type="text"
              onChange={onChangeHandler}
              value={form.purchase}
              required
            />
            <br />
            <br />


            <input
              id="sell"
              name="sell"
              placeholder="Selling price"
              type="text"
              onChange={onChangeHandler}
              value={form.sell}
              required
            />
            <br />
            <br />


            <div className={styles.button}>
              <button onClick={addData}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Product;