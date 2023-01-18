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
        gender:'male',
        hobbies:[],
        country:"Azerbaijan"
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >

      {({handleSubmit,handleChange,values})=>(
        
        <>

          <form onSubmit={handleSubmit}>

          <label htmlFor="firstName">First Name</label>
          <input onChange={handleChange} name="firstName" />
          <br/>

          <label htmlFor="lastName">Last Name</label>
          <input onChange={handleChange} name="lastName" />
          <br/>

          <label htmlFor="email">Email</label>
          <input onChange={handleChange} type="email" name="email" />
          <br/><br/>


           <input type="radio" name ="gender" value="male" checked={values.gender === "male" } onChange={handleChange} /> Male <br/>
           <input type="radio" name="gender" value="female" checked={values.gender === "female" } onChange={handleChange} /> Female <br/>
          <br/><br/>

          <input type="checkbox" value="football" name="hobbies" onChange={handleChange} /> Football <br/>
          <input type="checkbox" value="cinema" name="hobbies" onChange={handleChange} /> Cinema <br/>
          <input type="checkbox" value="basketball" name="hobbies" onChange={handleChange} /> Basketball <br/>


          <select name="country" value={values.country} onChange={handleChange}>
            <option value="Azerbaijan" onChange={handleChange}>Azerbaijan</option>
            <option value="Russian" onChange={handleChange}>Russian</option>
            <option value="English" onChange={handleChange}>English</option>
          </select>

          <br/><br/>
          <button type="submit">Submit</button>
          <br/><br/>
          </form>

          <code>
            {JSON.stringify(values)}
          </code>

        </>

      

      )}
      
      
    </Formik>
    </div>
  );
}

export default App;
