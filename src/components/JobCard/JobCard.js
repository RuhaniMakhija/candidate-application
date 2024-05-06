import React from 'react';
import "./jobCard.css"

const JobCard = ({job}) => {
    const limitedString = (str, limit) => {
        return str?.length < limit ? str : str?.slice(0, limit)+"...";
      };

      const redirectToLink=()=>{
        const jobLink = job?.jdLink;
        if (jobLink) {
            window.location.href = jobLink;
        }
      }
      
    return (
        <div className="jobCardConatiner">
        <div className='job-details'>
        <div>
            {job?.logoUrl && <img src={job?.logoUrl} className='logo' alt='logo'/>}
        </div>
        <div className='text-details'>
            <div>
                <h3 className='company-name'>{job?.companyName}</h3>
                <h2 className='job-role'>{job?.jobRole}</h2>
            </div>
            <p className='job-location'>{job?.location}</p>
        </div>
        </div>
        {(job?.minJdSalary || job?.maxJdSalary) && <p className='job-salary'>Estimated Salary: ₹{job?.minJdSalary}{job?.minJdSalary && job?.maxJdSalary &&" -"}  {job?.maxJdSalary} LPA<span aria-label="Offered salary range" class=""> ✅</span></p>}

        <div>
            <p className='about-comapny'>About Company: </p>
            <p className='about-us'><strong>About us</strong></p>
            <p className='company-info'>{limitedString(job?.jobDetailsFromCompany,450)}
            </p>
        </div>
        {job?.jobDetailsFromCompany?.length>450 && <button className='view-job'  onClick={redirectToLink}>View Job</button>}
       {job?.minExp && <div>
            <h3 className='min-exp-heading'>Minimum Experience</h3>
            <h2 className='min-exp'>{job?.minExp} years</h2>
        </div>}
        <button className='easy-apply' onClick={redirectToLink}>⚡ Easy Apply</button>
        <button className='refferal-ask'> Unlock referral asks</button>




        </div>
    )
}

export default JobCard
