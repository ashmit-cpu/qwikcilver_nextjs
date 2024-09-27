import React from "react";
import "../../../styles/form.css";
import FormHandle from './formHandle'

function Form() {
  return (
    <section className="Form_sec mt-20">
      <div className="container">
        <div className="flex">
          <div className="w-2/4">
            <h2>
              Get started with <br /> us 
              <span> today.</span>
            </h2> 

            <FormHandle />


          </div>
          <div className="w-2/4">
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
