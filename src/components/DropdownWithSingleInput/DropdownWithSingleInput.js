import { Autocomplete, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import  { clearExperienceOption, updateExperienceOption } from '../../utils/experienceSlice';
import { clearBasepayOption, updateBasepayOption } from '../../utils/basepaySlice';

const DropdownWithSingleInput = ({items,inputName}) => {
    const [options, setOptions] = useState(items);
    const dispatch = useDispatch();

    const handleOptionChange = (event, value) => {
        
        const selectedOption = value?.title;
        if(inputName==="Minimum Experience"){
            if (selectedOption) {
                // Dispatch an action to update the store with the selected experience option
                
                dispatch(updateExperienceOption(selectedOption));
            }else {
                // Dispatch action to clear the selected option
                dispatch(clearExperienceOption()); 
            }
        }

        if(inputName==="Minimum Base Pay Salary"){
            if (selectedOption) {
                const numericValue = parseFloat(selectedOption.replace(/\D/g, ''));
                dispatch(updateBasepayOption(numericValue));
            }else {
                dispatch(clearBasepayOption()); 
            }
        }
       
    };

  return (
    <div>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      size="small"
      sx={{ width: "250px" }}
      renderInput={(params) => <TextField {...params} label={inputName} />}
      getOptionLabel={(option) => option.title}
      onChange={handleOptionChange}
    />
    </div>
  )
}

export default DropdownWithSingleInput
