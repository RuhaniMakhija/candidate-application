import { Autocomplete, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import  { clearExperienceOption, updateExperienceOption } from '../../utils/experienceSlice';

const DropdownWithSingleInput = ({items,inputName}) => {
    const [options, setOptions] = useState(items);
    const dispatch = useDispatch();

    const handleOptionChange = (event, value) => {
        
        const selectedExperience = value?.title;
        if (selectedExperience) {
            // Dispatch an action to update the store with the selected experience option
            dispatch(updateExperienceOption(selectedExperience));
        }else {
            // Dispatch action to clear the selected option
            dispatch(clearExperienceOption()); 
        }
    };

  return (
    <div>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      size="small"
      sx={{ width: "150px" }} 
      renderInput={(params) => <TextField {...params} label={inputName} />}
      getOptionLabel={(option) => option.title}
      onChange={handleOptionChange}
    />
    </div>
  )
}

export default DropdownWithSingleInput
