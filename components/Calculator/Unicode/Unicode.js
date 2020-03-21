import React, { useState } from "react";
import UnicodeData from "../Data/Unicode.json";
import { IsBanglaBanjonborno, IsBanglaHalant, IsBanglaPreKar } from "../Utils";

export default function Unicode() {
  let [unicodes, setUnicode] = useState("");
  let [Unioutput, setUnioutput] = useState("");

  const UnicodeChange = e => {
    setUnicode(e.target.value);
  };

  const CovertToBijoy = () => {
    var conversion_map = UnicodeData;
    var myRegExp;
    myRegExp = new RegExp("ো", "g");
    unicodes = unicodes.replace(myRegExp, "ো");
    myRegExp = new RegExp("ৌ", "g"); 
    unicodes = unicodes.replace(myRegExp, "ৌ");

    unicodes = ReArrangeUnicodeText(unicodes);

    for (var unic in conversion_map) {
      myRegExp = new RegExp(unic, "g");
    let  another = new RegExp('h়', "g"); 
      unicodes = unicodes.replace(myRegExp, conversion_map[unic]);
      unicodes = unicodes.replace(another, 'q');
    } 

    setUnioutput(unicodes);
  };
  const ReArrangeUnicodeText = str => {
    var barrier = 0;
    for (var i = 0; i < str.length; i++) {
      if (i < str.length && IsBanglaPreKar(str.charAt(i))) { 
        var j = 1;
        while (IsBanglaBanjonborno(str.charAt(i - j))) {
          if (i - j < 0) break;
          if (i - j <= barrier) break;
          if (IsBanglaHalant(str.charAt(i - j - 1))) j += 2;
          else break;
        }
        var temp = str.substring(0, i - j);
        temp += str.charAt(i);
        temp += str.substring(i - j, i);
        temp += str.substring(i + 1, str.length);
        str = temp;
        barrier = i + 1;
        continue;
      }
      if (
        i < str.length - 1 &&
        IsBanglaHalant(str.charAt(i)) &&
        str.charAt(i - 1) == "র" &&
        !IsBanglaHalant(str.charAt(i - 2))
      ) {
        var j = 1;
        var found_pre_kar = 0;
        while (true) {
          if (
            IsBanglaBanjonborno(str.charAt(i + j)) &&
            IsBanglaHalant(str.charAt(i + j + 1))
          )
            j += 2;
          else if (
            IsBanglaBanjonborno(str.charAt(i + j)) &&
            IsBanglaPreKar(str.charAt(i + j + 1))
          ) {
            found_pre_kar = 1;
            break;
          } else break;
        }
        var temp = str.substring(0, i - 1);
        temp += str.substring(i + j + 1, i + j + found_pre_kar + 1);
        temp += str.substring(i + 1, i + j + 1);
        temp += str.charAt(i - 1);
        temp += str.charAt(i);
        temp += str.substring(i + j + found_pre_kar + 1, str.length);
        str = temp;
        i += j + found_pre_kar;
        barrier = i + 1;
        continue;
      }
    }

    return str;
  };
  return (
    <>
      <h1 className="text-center mb-4 text-lg ">
        Unicode to Unicode Converter
      </h1>

      <textarea
        id="paste_text__id_unicode"
        className="border border-teal-300 w-full p-3"
        placeholder="ইউনিকোড কি-বোর্ডের লেখা এখানে পেস্ট করুন"
        cols="100"
        rows="10"
        onChange={UnicodeChange}
        value={unicodes}
      ></textarea>
      <div className="flex justify-center">
        <button
          onClick={() => CovertToBijoy()}
          className=" my-4 py-3 px-5 rounded shadow-lg bg-teal-400 text-white"
        >
          Convert Now
        </button>
      </div>
      <h1 className="text-gray-600 text-lg mb-2">Output: </h1>
      <p className="border border-teal-300 w-full p-3 h-64 bijoy__output">
        {Unioutput}
      </p>
    </>
  );
}
