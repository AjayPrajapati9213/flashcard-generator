import { useSelector, useDispatch } from "react-redux";
import AddTerm from "./Termcard";
import React from "react";
import { addTerm } from "../../state/action";



const Terms = ({ formik }) => {
   // extract data of terms  from redux store
  const state = useSelector((state) => state.terms);
  const dispatch = useDispatch();

    // this function dispatch current input value and reset the input value to empty string when add more button is clicked
  const handleAddTerm = () => {
    dispatch(
      addTerm({
        term: formik.values.term,
        defination: formik.values.defination,
      })
    );

    formik.values.term = "";
    formik.values.defination = "";
  };

  return (
    <div className="bg-white p-3 sm:px-6 lg:px-8 mt-8 shadow-md rounded-md">
      {state.length === 0
        ? null
        : state.map((item, index) => {
            return <AddTerm key={index} index={index} item={item} />;
          })}
      <div className="flex gap-2">
        <span className="bg-gray-800 self-start text-white px-2 rounded-full mt-1 text-sm">
          {state.length + 1}
        </span>
        <div className="flex flex-col flex-wrap gap-y-5 mb-3 sm:flex-row sm:gap-x-9 flex-1">
          <div className="flex-1">
            <label htmlFor="termName" className="block mb-2">
              Enter Term <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="term"
              id="term"
              value={formik.values.term}
              onBlur={formik.handleBlur}   //use formik.handleBlur which give us a special state touched(is user clicked on input)
              onChange={formik.handleChange}
              placeholder="Write title here..."
              className="px-2 py-1 w-full border-2 border-gray-900 focus:border-blue-600 outline-none rounded-md shadow-lg"
              style={
                formik.touched.term && formik.errors.term
                  ? { borderColor: "red" }
                  : { borderColor: "initial" }
              }
            />
            {formik.touched.term && formik.errors.term ? (
              <div className="text-red-600 text-sm">{formik.errors.term}</div>
            ) : null}
          </div>
          <div className="flex-1">
            <label htmlFor="defination" className="block mb-2">Enter
              Defination <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="defination"
              id="defination"
              value={formik.values.defination}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Write defination here..."
              className="px-2 py-1 w-full border-2 border-gray-900 focus:border-blue-600 outline-none rounded-md shadow-lg"
              style={
                formik.touched.defination && formik.errors.defination
                  ? { borderColor: "red" }
                  : { borderColor: "initial" }
              }
            />
             {/* use formik>touched and error to show error message */}
            {formik.touched.defination && formik.errors.defination ? (
              <div className="text-red-600 text-sm">
                {formik.errors.defination}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <button
        className="font-semibold text-gray-600 hover:text-gray-900"
        type="button"
        onClick={handleAddTerm}
      >
        + Add More
      </button>
    </div>
  );
}

export default Terms;
