import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { updateCompanyName } from '../../utils/companySlice';

const SaerchCompany = () => {
    const [companyName, setCompanyName] = useState('');
    const dispatch = useDispatch();
    const handleCompanyNameChange = (event) => {
        const value = event.target.value;
        setCompanyName(value);
        dispatch(updateCompanyName(value));
      };
  return (
    <div className="MuiBox-root css-j7qwjs">
      
      <div className="MuiFormControl-root MuiTextField-root css-11avutt">
        <TextField
          id="companyName"
          label="Company Name" // Assuming you want to include a label for the TextField
          placeholder="Search Company Name"
          variant="outlined"
          className="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"
          value={companyName}
          onChange={handleCompanyNameChange}
          size="small"
        />
      </div>
    </div>
  );
};

export default SaerchCompany;