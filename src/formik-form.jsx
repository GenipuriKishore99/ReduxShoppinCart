import { Form,Field,ErrorMessage,Formik } from "formik"
export function FormikForm(){
    return(
        <Formik initialValues={{"userName":"","Age":0,"City":"","Phone":""}}
        >

        </Formik>

    )
}