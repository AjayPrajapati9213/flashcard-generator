import React from "react";

const GroupCard=({formik})=>{
    return(
        
        <div className="p-3 sm:px-6 lg:px-8 shadow-md rounded-md bg-white" data-testid="group">
            <div>
            <label
                htmlFor="groupname"
                className="text-[25px] block my-2">Create Group <span  className="text-red-500">*</span>
                </label>
            <input
                type='text'
                name="groupname"
                id="groupname"
                value={formik.values.groupname}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Add Your Group Name Here"
                className="px-6 py-5 w-full rounded-md shadow-md outline-none border-2 border-gray-900 focus:border-blue-600"
                style={
                    formik.touched.groupname && formik.errors.groupname
                      ? { borderColor: "red" }
                      : { borderColor: "initial" }
                  }
                    />
                     {formik.touched.groupname && formik.errors.groupname ? (
          <div className="text-red-600 text-sm">{formik.errors.groupname}</div>
        ) : null}
                   </div>
                <div>
                    <label htmlFor="description" className="text-[25px] block my-2">Add Description</label>
                    <textarea 
                        type='textarea'
                        name='description'
                        id='description'
                        placeholder="Add about you"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        className='px-2 py-1  w-full rounded-md shadow-md outline-none border-2 border-gray-900 focus:border-blue-600 '
                        rows="3"
                           
                           />
                       
                        
                        
                    
                    </div> 
                    
                    
                  
                  
        </div>
        
    )
}
export default GroupCard;