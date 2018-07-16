import React, { Component } from "react";


function DynamicFont({text}){
  const arabic = /[\u0600-\u06FF]/;
  const arabicText = text ? arabic.test(text) : false;
  return <span className={arabicText ? 'arabic-font' : 'latin-font'}>{text}</span>
}

export default DynamicFont;