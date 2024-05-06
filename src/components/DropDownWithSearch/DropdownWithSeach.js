import React, { useState } from 'react';
import "./dropdownWithSearch.css"
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { FormControl, IconButton } from '@mui/material';
import CancelIcon from '../../images/CancelIcon';



const DropdownWithSeach = ({items,inputName}) => {
   
 
      const [value, setValue] = useState([]);
      const [options, setOptions] = useState(items);

      const handleRemoveTag = (index) => {
        const updatedOptions = [...options];
        updatedOptions.push(value[index]); // Add back the removed option
        setOptions(updatedOptions.filter(option => option !== value[index])); // Remove the selected option from the options array
        const updatedValue = [...value];
        updatedValue.splice(index, 1);
        setValue(updatedValue);
    };
      console.log("value",value)


  return (
    <div>

      <FormControl>
      
      <Autocomplete
        multiple
        id="size-small-outlined-multi"
        size="small"
        options={options}
        getOptionLabel={(option) => option.title}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        renderTags={(value, getTagProps) =>
        value.map((option, index) => (
            <div key={index} className="MuiButtonBase-root MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-deletable MuiChip-deletableColorDefault MuiChip-filledDefault MuiAutocomplete-tag MuiAutocomplete-tagSizeSmall css-38raov-MuiButtonBase-root-MuiChip-root" tabindex="-1" role="button" data-tag-index={index} style={{borderRadius: '2px', display:"flex"}}>
            <span className="MuiChip-label MuiChip-labelMedium css-6od3lo-MuiChip-label" style={{padding: "3px 3px 3px 6px",fontSize: "12px",textTransform:"capitalize",color:"rgb(51, 51, 51)",borderRadius:"2px"}}>{option.title}</span>
            <div className="cancel-main-container">
            <IconButton
                  aria-label="clear"
                  onClick={() => handleRemoveTag(index)}
                >
            <CancelIcon />
            </IconButton>
            </div>
          </div>
          
         
        ))
      }
        renderInput={(params) => (
          <TextField {...params} label={inputName} />
        )}
       
     
      />
      </FormControl>

       
    </div>
  )
}

export default DropdownWithSeach
