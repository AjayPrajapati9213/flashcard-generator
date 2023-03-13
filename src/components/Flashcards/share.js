import React from "react";
import { AiOutlineClose, AiOutlineCopy } from "react-icons/ai";

const Share = (props) => {
   // get current url and assign it to variable
  const url = document.location.href;

  const copyUrl = () => {
    navigator.clipboard.writeText(url);  //copy url to user clipboard
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center "
      style={{ display: props.shareBox }}
    >
      <div className="relative bg-white rounded-md p-5 w-4/5 lg:w-2/5 ">
        <h3 className="text-lg font-semibold mb-2">Share</h3>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex-1 px-4 py-3 rounded-md outline-dashed outline-1 outline-gray-900">
            <p>
              URL :{" "}
              <a className="text-blue-900" href={url}>
                {url}
              </a>
            </p>
          </div>
          <AiOutlineCopy
            className="text-3xl cursor-pointer"
            onClick={copyUrl}
          />
        </div>
        <AiOutlineClose
          className="absolute top-3 right-3 text-lg cursor-pointer"
          onClick={props.closeShareBox}
        />
      </div>
    </div>
  );
};

export default Share;