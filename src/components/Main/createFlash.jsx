import React from "react";
import GroupCard from "./Groupcard";
import Terms from "./terms"
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { emptyTerm, addGroup } from "../../state/action/index";



const CreateFlashcard=()=>{

    const state= useSelector((state)=> state.terms);  /// extract data of terms from redux store
    const dispatch = useDispatch();
    
    const initialValues = {
        groupname: "",
        description: "",                 /// define the initial values
        term: "",
        defination: "",
      };

      const validate = (values) => {            //// here we do validation
        let errors = {};
        if (!values.groupname) {
          errors.groupname = "This field is required";      
        }
    
        if (!values.term) {
          errors.term = "This field is required";
        }
    
        if (!values.defination) {
          errors.defination = "This field is required";
        } else if (values.defination.length < 10) {
          errors.defination = "Please type more than 10 characters ";
        }
    
        return errors;
      };
    
        /// here we define what to do when user click on create flashcard button
     const onSubmit = ()=>{
      const currentValues={
        term: formik.values.term,
        defination: formik.values.defination, 
      }
      state.push(currentValues);   /// push the current value of term and defination to term state

      /// dispatch addgroup action
      dispatch(
        addGroup({
          groupname: formik.values.groupname,
          description: formik.values.description,
          terms: state,
        })
      );
      dispatch(emptyTerm());  //dispatch emptyTerm action (which delete all terms data in localStorage and set terms to empty array)

      formik.resetForm();
     }
     const formik= useFormik({
      initialValues,
      validate,
      onSubmit
     })
    
   
    
      
    return(
        <div>
             <form onSubmit={formik.handleSubmit}>
                <GroupCard formik={formik}/>   {/*  send formik as prop */}
                <Terms formik={formik}  />     {/*  send formik as prop */}
        <div className="text-center">   
            <button 
            type="submit"
            className="bg-gray-900 text-white px-3 py-2 rounded-md text-md w-1/4 mt-8 hover:bg-gray-700">Create</button>
        </div>
        </form>
        </div>
    )
}
export default CreateFlashcard;