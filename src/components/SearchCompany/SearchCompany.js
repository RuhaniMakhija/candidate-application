import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { updateCompanyName } from '../../utils/companySlice';
import { updateLocationName } from '../../utils/locationSlice';

const SearchCompany = ({title}) => {
    const [companyName, setCompanyName] = useState('');
    const dispatch = useDispatch();
    const handleCompanyNameChange = (event) => {
        const value = event.target.value;
        setCompanyName(value);
        if(title==="Search Company Name"){
            dispatch(updateCompanyName(value));
        }else if(title==="Search Location"){
            dispatch(updateLocationName(value))
        }

      };
  return (
    <div className="MuiBox-root css-j7qwjs">
      
      <div className="MuiFormControl-root MuiTextField-root css-11avutt">
        <TextField
          id={title}
          label={title} // Assuming you want to include a label for the TextField
          placeholder={title}
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

export default SearchCompany;