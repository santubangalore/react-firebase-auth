import CommonInput from "../common-input/CommonInput";
import { useEffect } from "react";

const formElementTypes={
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};
/*
(event) => {
            setFormData({
              ...getFormData,
              [getformControl.name]: event.target.value
            });
          }
*/

function CommonForm({formControls, buttonText, formData, onSubmit, setFormData}) {
  async function submitHandler(event) {
    event.preventDefault();
    await onSubmit(event);
    
  }
  

  function renderFormElement(getformControl,getFormData) {
    let element=null;

    switch (getformControl.componentType) {
      case formElementTypes.INPUT:

       element=   <CommonInput 
            type={getformControl.type} 
            placeholder={getformControl.placeholder}
            value={getFormData[getformControl.name]}
            name={getformControl.name}
            onChange={(event) => {
              setFormData({
                ...getFormData,
                [getformControl.name]: event.target.value
              });
            }}
          />
        break;
      case formElementTypes.SELECT:
        element = <CommonSelect options={getformControl.options} />
        break;
      case formElementTypes.TEXTAREA:
        element = <CommonTextarea placeholder={getformControl.placeholder} rows={8} width={getformControl.width} />
        break;
      default:
        return null;
    }
    return element;
  }

  
  return (

    <form onSubmit={(e)=>submitHandler(e)}>
      {
        formControls.map((control, index) => 
          {
                return renderFormElement(control,formData);
          })
      }
       <div className='px-6 py-5 items-center justify-content text-center'>
        <button type="submit" className="block bg-blue-200 text-black px-5 py-2 mt-2 rounded-lg">
          {buttonText || 'Submit'}
        </button>
      </div>
    </form>
  )
}

export default CommonForm
