import React from 'react'
import { useSelector } from 'react-redux';
import "./jobSearchPage.css"
import DropdownWithSeach from '../DropDownWithSearch/DropdownWithSeach';
import JobListing from '../JobListing/JobListing';
import SaerchCompany from '../SearchCompany/SearchCompany';


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
            <DropdownWithSeach items={roles} inputName="Roles"/>
            <DropdownWithSeach items={experience} inputName="Experience"/>
            <DropdownWithSeach items={remote} inputName="Remote"/>
            <DropdownWithSeach items={remote} inputName="Remote"/>
            <DropdownWithSeach items={salary} inputName="Min Base Pay Salary"/>
            <SaerchCompany/>
        </div>
        <JobListing/>

    </div>
  )
}

export default JobSearchPage
