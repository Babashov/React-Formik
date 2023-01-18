import {useFormik} from 'formik'


function FormikDemo() {

const formik = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            email: '',
            gender:'male',
            hobbies:[],
            country:"Azerbaijan"
          },
          onSubmit:(values) => {
            alert(JSON.stringify(values, null, 2));
          }
      })
  return (
    <div>
        
        <>

          <form onSubmit={formik.handleSubmit}>

          <label htmlFor="firstName">First Name</label>
          <input onChange={formik.handleChange} name="firstName" />
          <br/>

          <label htmlFor="lastName">Last Name</label>
          <input onChange={formik.handleChange} name="lastName" />
          <br/>

          <label htmlFor="email">Email</label>
          <input onChange={formik.handleChange} type="email" name="email" />
          <br/><br/>


           <input type="radio" name ="gender" value="male" checked={formik.values.gender === "male" } onChange={formik.handleChange} /> Male <br/>
           <input type="radio" name="gender" value="female" checked={formik.values.gender === "female" } onChange={formik.handleChange} /> Female <br/>
          <br/><br/>

          <input type="checkbox" value="football" name="hobbies" onChange={formik.handleChange} /> Football <br/>
          <input type="checkbox" value="cinema" name="hobbies" onChange={formik.handleChange} /> Cinema <br/>
          <input type="checkbox" value="basketball" name="hobbies" onChange={formik.handleChange} /> Basketball <br/>


          <select name="country" value={formik.values.country} onChange={formik.handleChange}>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Russian">Russian</option>
            <option value="English">English</option>
          </select>

          <br/><br/>
          <button type="submit">Submit</button>
          <br/><br/>
          </form>

          <code>
            {JSON.stringify(formik.values)}
          </code>

        </>
    </div>
  )
}

export default FormikDemo