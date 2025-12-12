import { X } from "lucide-react";
// import React, { useState } from "react";
import style from "./report.module.css";
const report = (closeReport) => {
   
  
  return (
    <div>
       <div className={style.heading_wrapper}>
        <h1>
          Report a malicious form 
          <X onClick={closeReport} style={{ cursor: "pointer" }} />
        </h1>
        <div className={style.line}></div>
      </div>

      <div>
        <span className={style.content}>
          Please briefly describe how this form is being misused. Our team will
          review your report as soon as possible.
        </span>
        <div>
            <input type="radio"  className={style.selector}/><span>Spam, malware, or phishing</span>
            <input type="radio" className={style.selector}/><span>Spam, malware, or phishing</span>
            <textarea placeholder="Optionally, please briefly describe how this form is being misused." name="text" id="textarea"></textarea>
        </div>
        
      </div>
      
    <div className={style.btn}>
        <button onClick={closeReport} className={style.cancle}>Cancel</button>
        <button className={style.submit}>Submit</button>
      </div>
    </div>
  );
};

export default report;
