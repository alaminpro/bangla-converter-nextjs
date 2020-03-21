export const IsBanglaBanjonborno = CUni => {
  if (
    CUni == "ক" ||
    CUni == "খ" ||
    CUni == "গ" ||
    CUni == "ঘ" ||
    CUni == "ঙ" ||
    CUni == "চ" ||
    CUni == "ছ" ||
    CUni == "জ" ||
    CUni == "ঝ" ||
    CUni == "ঞ" ||
    CUni == "ট" ||
    CUni == "ঠ" ||
    CUni == "ড" ||
    CUni == "ঢ" ||
    CUni == "ণ" ||
    CUni == "ত" ||
    CUni == "থ" ||
    CUni == "দ" ||
    CUni == "ধ" ||
    CUni == "ন" ||
    CUni == "প" ||
    CUni == "ফ" ||
    CUni == "ব" ||
    CUni == "ভ" ||
    CUni == "ম" ||
    CUni == "শ" ||
    CUni == "ষ" ||
    CUni == "স" ||
    CUni == "হ" ||
    CUni == "য" ||
    CUni == "র" ||
    CUni == "ল" ||
    CUni == "য়" ||
    CUni == "ং" ||
    CUni == "ঃ" ||
    CUni == "ঁ" ||
    CUni == "ৎ"
  )
    return true;

  return false;
};

export function IsBanglaKar(CUni) {
  if (IsBanglaPreKar(CUni) || IsBanglaPostKar(CUni)) return true;
  return false;
}
export function IsBanglaNukta(CUni) {
  if (CUni == "ং" || CUni == "ঃ" || CUni == "ঁ") return true;

  return false;
}
export function IsBanglaHalant(CUni) {
  if (CUni == "্") return true;

  return false;
}

export function IsSpace(C) {
  if (C == " " || C == "\t" || C == "\n" || C == "\r") return true;

  return false;
}
export function IsBanglaPreKar(CUni) {
  if (CUni == "ি" || CUni == "ৈ" || CUni == "ে") return true;

  return false;
}
export function IsBanglaPostKar(CUni) {
  if (
    CUni == "া" ||
    CUni == "ো" ||
    CUni == "ৌ" ||
    CUni == "ৗ" ||
    CUni == "ু" ||
    CUni == "ূ" ||
    CUni == "ী" ||
    CUni == "ৃ"
  )
    return true;
  return false;
}
