import './App.css';
import { Formik } from 'formik';

function App() {
  return (
    <div className="App">
       <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >

      {({handleSubmit,handleChange})=>(
        <form onSubmit={handleSubmit}>

        <label htmlFor="firstName">First Name</label>
        <input onChange={handleChange} name="firstName" />
        <br/>

        <label htmlFor="lastName">Last Name</label>
        <input onChange={handleChange} name="lastName" />
        <br/>

        <label htmlFor="email">Email</label>
        <input onChange={handleChange} type="email" name="email" />
        <br/>
        <button type="submit">Submit</button>
      </form>
      )}
      
    </Formik>
    </div>
  );
}

export default App;
