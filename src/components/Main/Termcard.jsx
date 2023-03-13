import { useDispatch, } from "react-redux";
import {deleteTerm, editTerm} from "../../state/action/index";
import { useRef, useState } from "react";
import React from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";

const AddTerm =(props)=>{

    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [termData, setTermData] = useState({
      term: props.item.term,
      defination: props.item.defination,
    });
    const inputRef = useRef();         //use useRef hook to refer input on which edit button is click

    // this function handle focus on input on which edit button is clickd
    const handleEdit = () => {
        setIsEdit(true);
        inputRef.current.focus();
      }
       
       // this function dispatch edited input values
      const handleDone = () => {
        setIsEdit(false);
        dispatch(
          editTerm({
            index: props.index,
            ...termData,
          })
        );
      };
    
       // this function set edited input values in termData
      const handleChange = (e) => {
        if (isEdit) {
          const editPropName = e.target.name;
          const editPropValue = e.target.value;
          setTermData({
            ...termData,
            [editPropName]: editPropValue,
          });
        }
      };
    

    
    return(
        <div className="flex gap-2" id="add-Term">
        <span className="bg-gray-800 self-baseline text-white px-2 rounded-full mt-1 text-sm">
          {props.index + 1}
        </span>
        <div className="flex flex-col flex-wrap gap-y-5 mb-3 sm:flex-row sm:gap-x-9 sm:items-start flex-1">
          <div className="flex-1">
            <label htmlFor="termName" className="block mb-2">
              Enter Term <span className="text-red-600">*</span>
            </label>
            <input
              value={termData.term}
              onChange={handleChange}
              type="text"
              name="term"
              ref={inputRef}     //use ref to refer this input
              id="term"
              className="px-2 py-1 w-full border-2 border-gray-900 focus:border-blue-600 outline-none rounded-md shadow-lg "
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="defination" className="block mb-2">
              Defination <span className="text-red-500">*</span>
            </label>
            <textarea
              value={termData.defination}
              onChange={handleChange}
              type="text"
              name="defination"
              id="defination"
              className="px-2 py-1 w-full border-2 border-gray-900 focus:border-blue-600 outline-none rounded-md shadow-lg"
              required
            ></textarea>
          </div>
          <div className="self-end">
            {isEdit ? (
              <button type="button" onClick={handleDone}>
                <AiOutlineCheck className="text-2xl text-green-600" />
              </button>
            ) : (
              <button type="button" onClick={handleEdit}>
                <AiOutlineEdit className="text-2xl text-blue-600" />
              </button>
            )}
  
            <button
              className="ml-3"
              type="button"
              onClick={() => dispatch(deleteTerm(props.index))}
            >
              <AiOutlineDelete className="text-2xl text-red-700" />
            </button>
          </div>
        </div>
      </div>
    );
  };
export default AddTerm;