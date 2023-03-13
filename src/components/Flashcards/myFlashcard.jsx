import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {displayAllCards} from "../../state/action/index";
import { AiOutlineArrowRight } from "react-icons/ai";

const MyFlashcard=()=>{
  // extract data of addGroup  from redux store
    const state = useSelector((state) => state.addGroup);
    const dispatch = useDispatch();
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-3 sm:px-6 lg:px-8 text-center items-stretch">
        {state.length === 0 ? (
            // if there is no group created
          <h1 className="col-span-4 text-center text-2xl text-red-600">
            There is no flashcard yet....
          </h1>
        ) : (
           // if there is group ,This iterates the addGroup state and show all group
          state.map((item, index) => {
            return (
              <div key={index} className="bg-indigo-400 p-4 leading-10  rounded-md shadow-md hover:scale-105 transition-transform">
            
                  <p>{item.groupname}</p>
                  <p>{item.description === "" 
                        ? "No Description..." //if there is no group decsription available
                           : item.description}
                      </p>
                  <p>{item.terms.length} Cards</p>
                  <Link
                    to={`/flashcard-${index}`}
                    className="hover:bg-gray-700 hover:text-white text-blue-900 font-semibold rounded-md flex justify-center items-center"
                    onClick={() => dispatch(displayAllCards(index))} //call dispatch to dispatch displayAllCards action with current index
                  >
                  <span> view cards </span>  
                  <AiOutlineArrowRight className="text-lg ml-3 inline-block" />
                  </Link>
                </div>
              
            );
          })
        )}
      </div>
    );
  };
export default MyFlashcard;