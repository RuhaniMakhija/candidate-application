import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import "./dropdownWithSearch.css"
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {useDispatch} from "react-redux"
import { FormControl, IconButton } from '@mui/material';
import CancelIcon from '../../images/CancelIcon';
import { addRoles, removeRoles } from '../../utils/rolesSlice';



const DropdownWithSearch = ({items,inputName}) => {

      const dispatch=useDispatch()
      const rolesSelected=useSelector((store)=>store.roles.items);
      const prevValueRef = useRef([]);
      const [value, setValue] = useState([]);
      const [options, setOptions] = useState(items);

      const handleRemoveTag = (index) => {
        const removedValue = value[index]; 
        const updatedValue = value.filter((_, i) => i !== index); 

        if(inputName==="Roles"){
          dispatch(removeRoles(removedValue.title))
        }
       
        
     
        setValue(updatedValue);
        setOptions(prevOptions => {
            if (!prevOptions.includes(removedValue)) {
                return [...prevOptions, removedValue];
            }
            return prevOptions;
        });
      };
    
      const handleChange = (event, newValue) => {
        
        if(inputName==="Roles"){
          newValue.forEach(item => {
            if (!rolesSelected.includes(item.title)) {
              dispatch(addRoles(item.title));
          }
          });
        }
          
   
        prevValueRef.current = newValue;
          setValue(newValue);
      };


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
        onChange={handleChange}
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

export default DropdownWithSearch
