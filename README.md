This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

 display code in console 


const d = new Date();
  console.log(d);



  display date in page 
  import React from 'react';
class App extends React.Component {
    state={
      curDT : new Date().toLocaleString(),
    }
    render(){
      return (
        <div className="App">
          <p>Current Date And Time : {this.state.curDT}</p>
        </div>
      );
    }
  }
  
  export default App;


To add icon run this command first - 
  npm i react-icons

  then go to this link - https://react-icons.github.io/react-icons

  pick the icon and then import the file and use direct to the code like 
  import - import { IconName } from "react-icons/ai"; 
  <IconName/>





  form 

  onSubmit = {submitHandler}

const submitHandler = async (e) => {
e.preventDefault();
console.log(form);
}


const [form, setform] = useState (values)


const onChangeHandler = (e) => {
setForm((preFormValues) => ({
...preFormValues,

[e.target.name]: e.target.value,

}));
};



form,
conChangeHandler, 


const {form, onChangeHandler} = useForm({
email:'',
password:''

})




onchange = {onChangeHandler} value = {form.email}

onchange = {onChangeHandler} value = {form.password}



const isDisabled =useMemo(() => {
return isFormCorrect = !Object.values(form).every((val) => !! val);
console.log(isFormCorrect, form);
},[form]);



disabled={isDisabled}


{/* <label for="first">Name </label> */}
{/* <label for="last">Address </label> */}
 {/* <label for="Phone Number">Phone Number </label> */}
{/* <label for="Description">Description </label> */}
    {/* <div className={styles.button}> */}
  {/* </div> */}


  