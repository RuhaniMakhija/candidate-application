import React from 'react'
import { useSelector } from 'react-redux';
import "./jobSearchPage.css"

import JobListing from '../JobListing/JobListing';

import SearchCompany from '../SearchCompany/SearchCompany';

import DropdownWithSearch from '../DropDownWithSearchMultipleInputs/DropdownWithSeach';
import DropdownWithSingleInput from '../DropdownWithSingleInput/DropdownWithSingleInput';


const JobSearchPage = () => {
    const roles =[{ title: 'Frontend' }, { title: 'Backend' },{ title: 'IOS' },{ title: 'Android' },{ title: 'Tech Lead' }]
    const experience =[{ title: 1 }, { title: 2 }, { title: 3 }];
    const remote =[{ title: "Remote" }, { title: "Hybrid" }, { title: "In-office" }];
    const salary =[{ title: "0L" }, { title: "3L" }, { title: "6L" }];
    const rolesSelected=useSelector((store)=>store.roles.items);
   
    console.log("rolesSelectedrolesSelected",rolesSelected)

  return (

    
    <div>
     
        <div className='dropdown-container'>
            <DropdownWithSearch items={roles} inputName="Roles"/>
            <DropdownWithSingleInput items={experience} inputName="Min Exp"/>
            {/* <DropdownWithSeach items={experience} inputName="Experience"/>
            <DropdownWithSeach items={salary} inputName="Min Base Pay Salary"/> */}
            <SearchCompany title="Search Company Name"/>
            <SearchCompany title="Search Location"/>
        </div>
        <JobListing/>

    </div>
  )
}

export default JobSearchPage
