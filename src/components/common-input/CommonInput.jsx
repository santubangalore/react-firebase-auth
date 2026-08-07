
function CommonInput  ({  type, placeholder, onChange, value, name, className }) {
  
  return (
    <div>
      <input 
      type={type||'text'}
      placeholder={placeholder||'enter value'}
      onChange={onChange}
      value ={value} 
      name={name}
      className={className||'w-full block px-5 py-2 mt-2 text-black border rounded-lg'} />
    </div>
  )
}

export default CommonInput;
