import {useFormik} from 'formik';
import  * as yup from 'yup';
export function Formik(){
    const formik=useFormik({
        initialValues:{
            "userName":'',
            "Age":0,
            "city":'',
            "Phone":""
        },
    
        onSubmit:(values)=>{
            alert(JSON.stringify(values))
        },validationSchema:yup.object({
            "userName":yup.string().required("Name is mandatary").min(4,'Name is short').max(10,'Name is long'),
            "Age":yup.number().required("age is required"),
            "Phone":yup.string().matches(/\+91\d{10}/,"Invalid +91 10 Digits number")

        })

    })
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control"  name="userName" onChange={formik.handleChange}></input>
                </div>
                <hr size="4" noshade></hr>
                <div className='text-danger'>{formik.errors.userName}</div>
                <div className="form-group">
                    <label className="form-label">Age</label>
                    <input type="number" className="form-control" name="Age" onChange={formik.handleChange}></input>
                </div>
                <div className='text-danger'>{formik.errors.Age}</div>

                <div>
                    <label className="form-label">Choose Location</label>
                    <select className="form-select" name="city" onChange={formik.handleChange}>
                        <option>Delhi</option>
                        <option>Hyderabad</option>
                        <option>Banagalore</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" name="phone" onChange={formik.handleChange}></input>
                </div>
                <div className='text-danger'>{formik.errors.Phone}</div>

                <div>
                    <input type="submit" className="btn btn-primary" value="Submit"></input>
                    <input type="reset" value="Cancel" className="btn btn-danger"></input>
                </div>
            </form>
        </div>
    )
}