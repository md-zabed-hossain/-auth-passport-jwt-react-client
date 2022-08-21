import React from "react";

const Form = ({ name, type, placeholder, value, onChange }) => {
  // const [user,setUser] = useState({name, type, placeholder, value, onChange});
  // setUser({name:name, type:type, placeholder:placeholder, value:value, onChange:onChange});
  // const {name, type, placeholder, value, onChange} = user;
  // const [password,setPassword] = useState({name, type, placeholder, value, onChange});
  return (
    <>
      <div>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>   
    </>
  );
};

export default Form;
