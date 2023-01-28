import styles from "../styles/tcustomer.module.css";
import { useState } from "react";
import { app, database } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";


function product() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [pname, setPname] = useState("");
  const [unit, setUnit] = useState("");
  const [purchase, setPurchase] = useState("");
  const [sell, setSell] = useState("");

  const [fireData, setFireData] = useState([]);
  const databaseRef = collection(database, "Product Details");

  const addData = () => {
    addDoc(databaseRef, {
      name: name,
      category: category,
      subcategory: subcategory,
      brand: brand,
      pname: pname,
      unit: unit,
      purchase: purchase,
      sell: sell,
    })
      .then(() => {
        alert("Data Send");
        setName("");
        setCategory("");
        setSubCategory("");
        setBrand("");
        setPname("");
        setUnit("");
        setPurchase("");
        setSell("");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getData = async () => {
    await getDocs(databaseRef).then((response) => {
      setFireData(
        response.docs.map((data) => {
          return {...data.data(), id: data.id};
        })
      );
    });
  };

  return (
    <>
      <div className={styles.bg}>
        <div className={styles.text}>
          <h1>Product</h1>
        </div>
        <br />

        {/* <label for="first">Name </label> */}
        <input
          type="text"
          placeholder="Supplier Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <br />

        {/* <label for="first">category </label> */}
        <input
          type="text"
          placeholder="Product Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <br />
        <br />

        {/* <label for="first"> Sub category </label> */}
        <input
          type="text"
          placeholder="Sub-Category"
          value={subcategory}
          onChange={(e) => setSubCategory(e.target.value)}
          required
        />
        <br />
        <br />

        {/* <label for="first"> Brand </label> */}
        <input
          type="text"
          placeholder="Brand Name"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
        />
        <br />
        <br />

        {/* <label for="first"> Product </label> */}
        <input
          type="text"
          placeholder="Product Name"
          value={pname}
          onChange={(e) => setPname(e.target.value)}
          required
        />
        <br />
        <br />

        {/* <label for="first"> Unit Measure </label> */}
        <input
          type="text"
          placeholder="Unit Measure"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          required
        />
        <br />
        <br />

        {/* <label for="first"> Purchasing Price </label> */}
        <input
          type="text"
          placeholder="Purchasing Price"
          value={purchase}
          onChange={(e) => setPurchase(e.target.value)}
          required
        />
        <br />
        <br />

        {/* <label for="first"> Purchasing Price </label> */}
        <input
          type="text"
          placeholder="Selling Price"
          value={sell}
          onChange={(e) => setSell(e.target.value)}
          required
        />
        <br />
        <br />

        <div className={styles.button} onClick={addData}>
          <button>Submit</button>
        </div>

        <div className={styles.button} onClick={getData}>
          <button>Get Data</button>
        </div>

        <div>
          {fireData.map((data) => {
            return (
              <div>
                <h3>Name: {data.name}</h3>
                <p>
                Category: {data.category} <br />
                Subcategory: {data.subcategory}<br />
                Brand Name: {data.brand}<br />
                Product Name: {data.pname} <br/>
                Unit Measure: {data.unit} <br/>
                Purchasing Price: {data.purchase} <br/>
                Selling Price: {data.sell}<br/>

       {/*  Supplier name (drop down supplier name), 
     Product Category, Sub-category, 
    Brand, Product name, unit measure, Purchasing price, Selling price */}
                </p>

              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default product;
