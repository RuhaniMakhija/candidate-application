import React from 'react'

import "./jobSearchPage.css"
import DropdownWithSeach from '../DropDownWithSearch/DropdownWithSeach';
import JobListing from '../JobListing/JobListing';


const JobSearchPage = () => {
    const roles =[{ title: 'Frontend' }, { title: 'Backend' }, { title: 'Full Stack' }];
    const experience =[{ title: 1 }, { title: 2 }, { title: 3 }];
    const remote =[{ title: "Remote" }, { title: "Hybrid" }, { title: "In-office" }];
    const salary =[{ title: "0L" }, { title: "3L" }, { title: "6L" }];

  return (
    <div>
     
        <div className='dropdown-container'>
            <DropdownWithSeach items={roles} inputName="Roles"/>
            <DropdownWithSeach items={experience} inputName="Experience"/>
            <DropdownWithSeach items={remote} inputName="Remote"/>
            <DropdownWithSeach items={remote} inputName="Remote"/>
            <DropdownWithSeach items={salary} inputName="Min Base Pay Salary"/>
        </div>
        <JobListing/>

    </div>
  )
}

export default JobSearchPage
