import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Style.css';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
export default function Form() {
// const FILE_SIZE =160 *1024;
// const SUPPORTED_FORMATS=[
//     "image/jpg",
//     "image/jpeg",
//     "image/gif",
//     "image/png"
// ]     


  const refreshPage=()=>{
    window.location.reload(false);
  }


   const formik = useFormik({
    initialValues :{
        name:'',
        lastname:'',
        Email:'',
        address:'',
        phone:'',
        address1:'',
        confirmpassword:'',
        password:'',
        resume:'',
       photo:'',
       DOB:'',
       city:'',
       religon:'',
       country:'',
       username:'',
       state:'',
       education:'',
       experience:'',
       jobtitle:'',
       from:'',
       to:'',
       still:'',

   },
        validationSchema:yup.object({
            name:yup.string()
            .trim()
            .strict()
            .min(5, "Minimum 5 Charaters required")
            .max(15, "Maximum 15 characters required")
            .required("Name is Required"),
  lastname:yup.string()
  .min(5, "Minimum 5 Charaters required")
  .max(15, "Maximum 15 characters required")
  .required("LastName is Required"),
  Email:yup.string()
  .required("Email is required"),
  username:yup.string()
  .trim()
  .strict()
  .required()
  .min(5, "Minimum 5 charaters required"),
  password:yup.string()
  .required(),
  confirmpassword:yup.string()
  .oneOf([yup.ref('password'),null],"Confirm password must be same")
  .required(),
  
  resume:yup.string()
  .required("A file is required"),

  phone:yup.string()

  .max(10,"Minimum 10 characters allowed"),

  photo:yup.mixed()
 
    .required("You need to provide a file")
    // .test("fileSize", "The file is too large", (value) => {
    //     return value && value[0] <= 550000000;
    // })
    // .test("type", "Only the following formats are accepted: .jpeg, .jpg,.pdf ", (value) => {
    //     return value && (
    //         value[0].type === "image/jpeg" ||
    //          value[0].type === "image/png" 
          
    //     );
    // }),
//   .nullable()
//       .required('A file is required')
//       .test('Fichier taille',
//         'upload file', (value) => !value || (value && value.size <= 1024 * 1024))
//       .test('format',
//         'upload file', (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))),
// .test(1000, "File Size is too large", value => value.size <= FILE_SIZE) .test('fileType', "Unsupported File Format", value => SUPPORTED_FORMATS.includes(['image/*']) )


//   .test(
//     "fileSize", "File too large",
//     value => value && value.size <=FILE_SIZE
//   )
//   .test(
//     "fileFormat",
//     "Unsupported Format",
//    value => value && SUPPORTED_FORMATS.includes(value.type)
//   )
  


     
        }),
        onSubmit:(userInputData)=>{
            console.log(userInputData);
         alert("Thank you for Submitting");
        },
     
    
   })
    

   
  return (
    <div className="container">
        <div className='box-form'>
<h1>Job seeker Registration Form</h1>
        </div>
        <div>
           <form autoComplete="off"  onSubmit={formik.handleSubmit} >
            <label className='label1'>Name:</label>
            <input  className="input1"type="text"
            name='name'
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder='Enter your Name'></input>
            {formik.errors.name ? <div className="error1 text-danger">{formik.errors.name}</div> :  null }
            <label className='label2'>Last Name:</label>
            <input  className="input2"type="text" placeholder='Last Name' name='lastname' 
            value={formik.values.lastname} onChange={formik.handleChange}
            ></input>
            {formik.errors.lastname ? <div className='error2 text-danger'>{formik.errors.lastname}</div> : null}
            <label className='label3'>Email id</label>
            <input  className="input3"type="email" placeholder='Enter your Email' name='Email'
             value={formik.values.Email} onChange={formik.handleChange}
            ></input>
            {formik.errors.Email ? <div className='error3 text-danger' >{formik.errors.Email}</div> : null}
            <label className='label4'>Phone#</label>
            <input  className="input4"type="text" placeholder='Enter your Phone#' name='phone' value={formik.values.phone} onChange={formik.handleChange}></input>
            {formik.errors.phone ? <div className=' error10 text-danger'>{formik.errors.phone}</div> : null}
            <label className='label5'>D.O.B</label>
            <input  className="input5"type="date" placeholder='Date of Birth' name='DOB' value={formik.values.DOB} onChange={formik.handleChange}></input>
            <label className='label6'>Address</label>
            <input  className="input6"type="text" placeholder='Enter your Address' name='address' value={formik.values.address} onChange={formik.handleChange}></input>
            <label className='label7'>Address 1</label>
            <input  className="input7"type="text" placeholder='Enter your Address' name='address1' value={formik.values.address1} onChange={formik.handleChange}></input>
            <label className='label8'>City</label>
           <select className='input8' placeholder='Enter your City' name="city" value={formik.values.city} onChange={formik.handleChange}>
            <option value="Chennai">Chennai </option>
            <option value="Kanchipuram">Kanchipuram </option>
            <option value="Villpuram">Villpuram </option>
            <option value="Salem">Salem</option>
            <option value="Karur">Karur </option>
            <option value="Namakkal">Namakkal </option>
            <option value="Erode">Erode </option>
            <option value="Trichy">Trichy </option>
            <option value="Thanjaur">Thanjaur </option>
           </select>
           <label className='label9'>State</label>
           <select className='input9' placeholder='Enter your State' name="state" value={formik.values.state} onChange={formik.handleChange}>
            <option value="TamilNadu">TamilNadu</option>
            <option value="Andhra Pradash ">Andhra Pradash </option>
            <option value="Assam">Assam </option>
            <option value="Mathya pradash">Mathya pradash</option>
            <option value="Uttar Pradash">Uttar Pradash</option>
            <option value="Bihar">Bihar </option>
            <option value="Jammu Kashmiri">Jammu Kashmiri</option>
            <option value="Karandaka">Karandaka</option>
            <option value="Nagpur">Nagpur </option>
           </select>
           <label className='label10'>Religon</label>
           <select className='input10' placeholder='Enter your Religon' name="religon" value={formik.values.religon} onChange={formik.handleChange}>
            <option value="Christians">Christians</option>
            <option value="Muslims ">Muslims </option>
            <option value="Irreligious">Irreligious</option>
            <option value="Hindus">Hindus</option>
            <option value="Buddhists">Buddhists</option>
            <option value="Sikhism">Sikhism </option>
            <option value="Judaism">Judaism</option>
            <option value="Jainism">Jainism</option>
            <option value="Spiritism">Spiritism </option>
           </select>
           <label className='label11'>Country</label>
           <select className='input11' placeholder='Enter your Country' name="country" value={formik.values.country} onChange={formik.handleChange}>
            <option value="India">India</option>
            <option value="Albania ">Albania </option>
            <option value="Algeria">Algeria</option>
            <option value="Andorra">Andorra</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bhutan">Bhutan </option>
            <option value="	Bulgaria">Bulgaria</option>
            <option value="	Burundi">Burundi</option>
            <option value="China">China</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bhutan">Bhutan </option>
            <option value="	Bulgaria">Bulgaria</option>
            <option value="	Burundi">Burundi</option>
            <option value="China">China</option>
           </select>
           <label className='label12'>UserName</label>
            <input  className="input12"type="text" placeholder='UserName' name="username" value={formik.values.username} onChange={formik.handleChange}></input>
            {formik.errors.username ? <div className='error4 text-danger'>{formik.errors.username}</div> :null}
            <label className='label13'>Password</label>
            <input  className="input13"type="Password" placeholder='Passcode' name="password" value={formik.values.password} onChange={formik.handleChange}></input>
            {formik.errors.password ? <div className='error5 text-danger'>{formik.errors.password}</div> :null}
            <label className='label14'>Confirm Password</label>
            <input  className="input14"type="Password" placeholder='C.Passcode' name="confirmpassword" value={formik.values.confirmpassword} onChange={formik.handleChange}></input>
            {formik.errors.confirmpassword ? <div className='error6 text-danger'>{formik.errors.confirmpassword}</div> :null}
            <label className='label15'>Education</label>
           <select className='input15' name="education" value={formik.values.education} onChange={formik.handleChange}>
            <option value="BE/B.BTECH">BE/B.BTECH</option>
            <option value="MASTER OF ARTS">MASTER OF ARTS</option>
            <option value="PG DEGREE">PG DEGREE</option>
           </select>
            <label className='label16'>Experience</label>
            <input  className="input16"type="text" placeholder='Name of Employee' name="experience" value={formik.values.experience} onChange={formik.handleChange}></input>
            <label className='label17'>Job Title</label>
            <input  className="input17" type="text" placeholder='Job Title' name="jobtitle" value={formik.values.jobtitle} onChange={formik.handleChange}></input>
            <label className='label18'>Are still working on this organization</label>
            <input type="Checkbox" className='input18' name="still" value={formik.values.still} onChange={formik.handleChange}></input>
            <label className='label19'>From</label>
            <input  className="input19" type="date" placeholder='Job Title' name="from" value={formik.values.from} onChange={formik.handleChange}></input>
            <label className='label20'>To</label>
            <input  className="input20" type="date" placeholder='Job Title' name="to" value={formik.values.to} onChange={formik.handleChange}></input>
            <label className='label21'>Photo</label>
            <input  className="input21" type="file" placeholder='photo' accept="image/x-png,image/gif,image/jpeg" name="photo" value={formik.values.photo} onChange={formik.handleChange}></input>
            {formik.errors.photo? <div className='error8 text-danger'>{formik.errors.photo}</div> :null}
            <label className='label21a'>( jpg, png ,pdf)</label>

            <label className='label22'>Resume</label>
            <input  className="input22" type="file" placeholder='Resume' name="resume"  accept="pdf/*"value={formik.values.resume} onChange={formik.handleChange}></input>
            {formik.errors.resume ? <div className='error9 text-danger'>{formik.errors.resume}</div> :null}
            <label className='label22a'>( pdf,Doc, 2MB max)</label>
            <button className='btn' type='submit' onSubmit={formik.handleSubmit}  >Submit</button>
            <button className='btn2' type='submit' onClick={refreshPage} value="reset">Cancel</button>
           </form>
           
        </div>
    </div>
  )
}
