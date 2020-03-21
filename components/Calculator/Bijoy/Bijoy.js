import React, {useState} from "react";
import BijoyData from "../Data/Bijoy.json";

import {
  IsBanglaBanjonborno,
  IsBanglaKar,
  IsBanglaNukta,
  IsBanglaHalant,
  IsSpace,
  IsBanglaPreKar,
  IsBanglaPostKar
} from "../Utils";

export default function Bijoy() {
  let [bijoy, setBijoy] = useState("");
  let [outputs, setOutput] = useState("");

  const bijoyChange = e => {
    setBijoy(e.target.value);  
  };

  const CovertToBijoy = () => {
    var conversion_map = BijoyData;

    for (var ascii in conversion_map) {
      var myRegExp = new RegExp(ascii, "g");
      bijoy = bijoy.replace(myRegExp, conversion_map[ascii]);
    }
    bijoy = ReArrangeUnicodeConvertedText(bijoy); 
    var myRegExp = new RegExp("অা", "g");
    bijoy = bijoy.replace(myRegExp, "আ"); 
    setOutput(bijoy);
  };
  const ReArrangeUnicodeConvertedText = str => {
    for (var i = 0; i < str.length; i++) {
      if (
        i > 0 &&
        str.charAt(i) == "\u09CD" &&
        (IsBanglaKar(str.charAt(i - 1)) || IsBanglaNukta(str.charAt(i - 1))) &&
        i < str.length - 1
      ) {
        var temp = str.substring(0, i - 1);
        temp += str.charAt(i);
        temp += str.charAt(i + 1);
        temp += str.charAt(i - 1);
        temp += str.substring(i + 2, str.length);
        str = temp;
      }
      if (
        i > 0 &&
        i < str.length - 1 &&
        str.charAt(i) == "\u09CD" &&
        str.charAt(i - 1) == "\u09B0" &&
        str.charAt(i - 2) != "\u09CD" &&
        IsBanglaKar(str.charAt(i + 1))
      ) {
        var temp = str.substring(0, i - 1);
        temp += str.charAt(i + 1);
        temp += str.charAt(i - 1);
        temp += str.charAt(i);
        temp += str.substring(i + 2, str.length);
        str = temp;
      }
      if (
        i < str.length - 1 &&
        str.charAt(i) == "র" &&
        IsBanglaHalant(str.charAt(i + 1)) &&
        !IsBanglaHalant(str.charAt(i - 1))
      ) {
        var j = 1;
        while (true) {
          if (i - j < 0) break;
          if (
            IsBanglaBanjonborno(str.charAt(i - j)) &&
            IsBanglaHalant(str.charAt(i - j - 1))
          )
            j += 2;
          else if (j == 1 && IsBanglaKar(str.charAt(i - j))) j++;
          else break;
        }
        var temp = str.substring(0, i - j);
        temp += str.charAt(i);
        temp += str.charAt(i + 1);
        temp += str.substring(i - j, i);
        temp += str.substring(i + 2, str.length);
        str = temp;
        i += 1;
        continue;
      }
      if (
        i < str.length - 1 &&
        IsBanglaPreKar(str.charAt(i)) &&
        IsSpace(str.charAt(i + 1)) == false
      ) {
        var temp = str.substring(0, i);
        var j = 1;

        while (IsBanglaBanjonborno(str.charAt(i + j))) {
          if (IsBanglaHalant(str.charAt(i + j + 1))) j += 2;
          else break;
        }
        temp += str.substring(i + 1, i + j + 1);
        var l = 0;
        if (str.charAt(i) == "ে" && str.charAt(i + j + 1) == "া") {
          temp += "ো";
          l = 1;
        } else if (str.charAt(i) == "ে" && str.charAt(i + j + 1) == "ৗ") {
          temp += "ৌ";
          l = 1;
        } else temp += str.charAt(i);
        temp += str.substring(i + j + l + 1, str.length);
        str = temp;
        i += j;
      }
      if (
        i < str.length - 1 &&
        str.charAt(i) == "ঁ" &&
        IsBanglaPostKar(str.charAt(i + 1))
      ) {
        var temp = str.substring(0, i);
        temp += str.charAt(i + 1);
        temp += str.charAt(i);
        temp += str.substring(i + 2, str.length);
        str = temp;
      }
    }
    return str;
  };
  return (
    <>
      <h1 className="text-center mb-4 text-lg ">Bijoy to Unicode Converter</h1>
      <textarea
        id="paste_text__id_bijoy"
        className="border border-teal-300 w-full p-3"
        placeholder="বিজয় কি-বোর্ডের লেখা এখানে পেস্ট করুন"
        cols="100"
        rows="10"
        onChange={bijoyChange}
        value={bijoy}
      ></textarea>
      <div className="flex justify-center">
        <button onClick={() => CovertToBijoy()} className=" my-4 py-3 px-5 rounded shadow-lg bg-teal-400 text-white">
          Convert Now
        </button>
      </div>
      <h1 className="text-gray-600 text-lg mb-2">Output: </h1>
      <p className="border border-teal-300 w-full p-3 h-64">{outputs}</p>
    </>
  );
}
