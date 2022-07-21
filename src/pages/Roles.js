import React from 'react'
import './Roles.css'

export default function Roles() {
  
  
  return (
    <div className="r-roles">
      <form className='r-form'>
        <select className='r-list' placeholder='Select Role'>
          <option>  </option>
          <option> HR </option>
          <option> Admin </option>
          <option> Manager </option>
          <option> Employee </option>
        </select>
      </form>
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
