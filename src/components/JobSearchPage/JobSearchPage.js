import React from 'react'
import { useSelector } from 'react-redux';
import "./jobSearchPage.css"

import JobListing from '../JobListing/JobListing';

import SearchCompany from '../SearchCompany/SearchCompany';

import DropdownWithSearch from '../DropDownWithSearchMultipleInputs/DropdownWithSeach';
import DropdownWithSingleInput from '../DropdownWithSingleInput/DropdownWithSingleInput';


const JobSearchPage = () => {
    const roles =[{ title: 'Frontend' }, { title: 'Backend' },{ title: 'IOS' },{ title: 'Android' },{ title: 'Tech Lead' }]
    const experience =[{ title: 1 }, { title: 2 }, { title: 3 },{ title: 4 },{ title: 5 },{ title: 6 },{ title: 7 },{ title: 8 },{ title: 9 },{ title: 10 }];
    const basePay =[{ title: "0L" }, { title: "10L" }, { title: "20L" },{ title: "30L" },{ title: "40L" },{ title: "50L" },{ title: "60L" },{ title: "70L" }];



  return (

    
    <div>
     
        <div className='dropdown-container'>
            <DropdownWithSearch items={roles} inputName="Roles"/>
            <DropdownWithSingleInput items={experience} inputName="Minimum Experience"/>
            <DropdownWithSingleInput items={basePay} inputName="Minimum Base Pay Salary"/>
            <SearchCompany title="Search Company Name"/>
            <SearchCompany title="Search Location"/>
        </div>
        <JobListing/>

    </div>
  )
}

export default JobSearchPage
