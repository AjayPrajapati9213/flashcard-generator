import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Share from "./share";
import {
  AiOutlineArrowLeft,
  AiOutlineCaretRight,
  AiOutlineCaretLeft,
  AiOutlineShareAlt,
  AiOutlineDownload,
  AiOutlinePrinter,
} from "react-icons/ai";

const DetailFlashcard = () => {
  // extract data of addGroup and displayAllCards from redux store
  const state = useSelector((state) => state.addGroup);
  const viewFlashcardState = useSelector((state) => state.displayAllCards);
   //  make selectCard state to hold current term defination card
  const [selectCard, setSelectCard] = useState(0);

  // this function handles next and previous button
  const handleIncDec = (num, array) => {
    if (selectCard === 0 && num === -1) {
      setSelectCard(0);
    } else if (selectCard === array.length - 1 && num === 1) {
      setSelectCard(array.length - 1);
    } else {
      setSelectCard(selectCard + num);
    }
  };

   // make shareBox state to hold display property of share page
  const [shareBox, setShareBox] = useState("none");
    
  // these function handles share button
  const openShareBox = () => {
    setShareBox("flex");
  };
  const closeShareBox = () => {
    setShareBox("none");
  };

  return (
    <div className="px-2">
       {/* This iterates the addGroup state */}
      {state.map((obj, index) => {
        return index === viewFlashcardState ? ( // check index match to viewFlashcardState (which holds the index of clicked group card in myFlashcard component)
          <div className="text-lg" key={index}>
             {/* title section ,this section contains back button , group name and group description*/}
            <div className="mb-6">
               {/* use Link ,to make back button */}
            <Link
                to="/my-flashcards"
                className="flex items-center font-bold text-blue-600 gap-3"
              >
                  <AiOutlineArrowLeft />
                <span>{obj.groupname}</span>
              </Link>
            
              <p className="text-base text-gray-600 pl-8 ">
                {obj.description}</p>
            </div>
            <div className="flex flex-col  gap-6 md:flex-row md:gap-14 md:items-start">
              {/* flashcard list section, this conatins all term titles  */}
              <div className=" bg-white px-5 py-2 shadow-md rounded-md">
                <p className="border-b-2 border-gray-300 font-bold mb-2">flashcards</p>
                <ol>
                    {/* This iterates the addGroup.terms (which holds all term data as object in array) state */}
                  {obj.terms.map((item, index) => {
                    return (
                      <li
                        className="cursor-pointer"
                        style={
                          selectCard === index
                          ? { fontWeight: "bold", color: "red" }
                          : { fontWeight: "normal" }
                        }
                        onClick={() => setSelectCard(index)}
                        key={index}
                      >
                        {item.term}
                      </li>
                    );
                  })}
                </ol>
              </div>
               {/* main section , which shows selected term defination */}
              <div className="flex-1">
                <div className=" bg-white px-5 py-2  shadow-md rounded-md">
                   {/* This iterates the addGroup.terms (which holds all term data as object in array) state */}
                  {obj.terms.map((item, index) => {
                    return selectCard === index ? (
                      <div key={index}>
                      <p>{item.defination}</p>
                      </div>
                    ) : null;
                  })}
                </div>
                <div className="flex justify-center items-center gap-4 mt-4">
                  <button 
                  className="hover:scale-110 hover:text-red-600  transition-all"
                  onClick={() => handleIncDec(-1, obj.terms)}>
                     <AiOutlineCaretLeft className="text-2xl" />
                  </button>
                  <p> {selectCard + 1} / {obj.terms.length}</p>
                  <button 
                  className="hover:scale-110 hover:text-red-600 transition-all"
                  onClick={() => handleIncDec(1, obj.terms)}>
                    <AiOutlineCaretRight className="text-2xl" />
                  </button>
                </div>
              </div>
              <div>
              <button
                  className=" bg-white px-5 py-2 mb-4 flex items-center gap-2 w-full shadow-md rounded-md hover:scale-105 transition-transform"
                  onClick={openShareBox}
                >
                  <AiOutlineShareAlt className="text-2xl" />
                  <span>Share</span>
                </button>
                <button className=" bg-white px-5 py-2 mb-4 flex items-center gap-2 w-full shadow-md rounded-md hover:scale-105 transition-transform">
                  <AiOutlineDownload className="text-2xl" />
                  <span>Download</span>
                </button>
                <button className=" bg-white px-5 py-2 mb-4 flex items-center gap-2 w-full shadow-md rounded-md hover:scale-105 transition-transform">
                  <AiOutlinePrinter className="text-2xl" />
                  <span>Print</span>
                </button>
              </div>
            </div>
          </div>
        ) : null;
      })};
    {/* send shareBox state, setShareBox and closeShareBox function as prop to Share componenet */}
       <Share
        shareBox={shareBox}
        setShareBox={setShareBox}
        closeShareBox={closeShareBox}
      />
    </div>
  );
};

export default DetailFlashcard;
