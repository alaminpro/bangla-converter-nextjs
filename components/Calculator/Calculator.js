import React, { useState } from "react";
import Bijoy from "./Bijoy/Bijoy";
import Unicode from "./Unicode/Unicode";

export default function Calculator() {
  let [converter, setConverter] = useState(false);

  const bijoyConverter = () => {
    setConverter(!converter);
  };

  return (
    <>
      <div className="max-w-full rounded  shadow-lg overflow-hidden p-6">
        <div className="flex justify-center py-5">
          <button
            onClick={bijoyConverter}
            className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-l ${!converter &&
              "bg-teal-500 hover:bg-teal-500"} `}
          >
            Unicode to bijoy
          </button>
          <button
            onClick={bijoyConverter}
            className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-r ${converter &&
              "bg-teal-500 hover:bg-teal-500"} `}
          >
            Bijoy to unicode
          </button>
        </div>
        {!converter && (
          <div> 
            <Unicode /> 
          </div>
        )}
        {converter && (
          <div>
            <Bijoy />
          </div>
        )}
      </div>
    </>
  );
}
