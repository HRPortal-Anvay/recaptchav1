import React from 'react'
import './Roles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import RoleAccordion from '../components/RoleAccordion';


export default function Roles() {

  function selectedRole() {
    var mylist = document.getElementById("r-list");
    document.getElementById("role").value = mylist.options[mylist.selectedIndex].text;
    console.log(mylist.options[mylist.selectedIndex].text)
  }

  const handleAdd = () => {
    var role = document.getElementById("role")
    console.log(role)
  }

  return (
    <div className="r-roles">

      <form className='r-form'>
        <select className='r-list' id='r-list' onChange={selectedRole}>
          <option>  </option>
          <option> HR </option>
          <option> Admin </option>
          <option> Manager </option>
          <option> Employee </option>
          <option> xxxxxxxxxx </option>
          <option> xxxxxxxxxxxx </option>
        </select>
      </form>

      <button className='plus-btn'>
        <FontAwesomeIcon icon={faCirclePlus} className="plus" size='2x' onClick={handleAdd}/>
      </button>
      <hr className='hr' />

      <div className="role-name">
        <ul className='flex-container space-between'>
          <li className='flex-item'>Role Name:</li>
          <li>
            <input type="text" id="role" size="20" className='flex-item'/>
          </li>
        </ul>
      </div>
<br /> <br />
        <RoleAccordion />

    </div>
  )
}

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import './Roles.css'

// export default function BasicSelect() {
//   const [role, setRole] = React.useState('');

//   const handleChange = (event) => {
//     setRole(event.target.value);
//   };

//   return (
//     <Box sx={{ minWidth: 10 }} className='box'>
//       <FormControl fullWidth className='form-full'>
//         <InputLabel className="dropdown">Select Role</InputLabel>
//         <Select
//           className='options'
//           value={role}
//           label="Select Role"
//           onChange={handleChange}
//         >
//           <MenuItem value={1}>HR</MenuItem>
//           <MenuItem value={2}>Admin</MenuItem>
//           <MenuItem value={3}>Manager</MenuItem>
//           <MenuItem value={4}>Employee</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }
