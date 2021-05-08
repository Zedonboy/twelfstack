import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic"
const EditorPage = dynamic(() => import("../../../components/utils/Editor"), {
    ssr : false
})
export default function New() {
    
  return (
   <EditorPage/>
  );
}
