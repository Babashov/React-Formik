import {useFormik} from 'formik'
import validationSchema from '../yupjs';

function Signup() {
    const {handleSubmit,handleChange,handleBlur,values,errors,touched} = useFormik({
        initialValues:{
            email: '',
            password:'',
            passwordConfirm:''
          },
          onSubmit:(values) => {
            console.log(values);
          },

          validationSchema,
      })

  return (
    <div>

<div>
        
        <>

          <form onSubmit={handleSubmit}>

          <label htmlFor="email">Email</label>
          <input onChange={handleChange} onBlur={handleBlur} type="email" name="email" />
          {errors.email && touched.email && <div style={{color:'white',backgroundColor:'red'}}>{errors.email}</div>}
          <br/><br/>

          <label htmlFor="password">Password</label>
          <input onChange={handleChange} onBlur={handleBlur} type="password" name="password" />
          {errors.password && touched.password && <div style={{color:'white',backgroundColor:'red'}}>{errors.password}</div>}
          <br/><br/>

          <label htmlFor="passwordConfirm">Confirm password</label>
          <input onChange={handleChange} onBlur={handleBlur} type="password" name="passwordConfirm" />
          {errors.passwordConfirm && touched.passwordConfirm && <div style={{color:'white',backgroundColor:'red'}}>{errors.passwordConfirm}</div>}
          <br/><br/>

          <br/><br/>
          <button type="submit">Submit</button>
          <br/><br/>
          </form>

          <code>
            {JSON.stringify(values)}
          </code>

        </>
    </div>

    </div>
  )
}

export default Signup