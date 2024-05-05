import React from 'react';
import "./jobCard.css"

const JobCard = () => {
    const limitedString = (str, limit) => {
        return str?.length < limit ? str : str?.slice(0, limit)+"...";
      };
      const para="Flex Wash is an operating system for the car wash industry. Our solutions help owners manage their operations and grow revenue. Our POS has a built-in CRM, allowing car washes to take advantage of their customer transaction history in order to funnel customers into subscriptions and higher margin wash packagesFlex Wash is an operating system for the car wash industry. Our solutions help owners manage their operations and grow revenue.Our POS has a built-in CRM, allowing car washes to take advantage of their customer transaction history in order to funnel customers into subscriptions and higher margin wash packages"
  return (
    <div className="jobCardConatiner">
    <div className='job-details'>
      <div>
        <img src="" className='logo' alt='logo'/>
      </div>
      <div className='text-details'>
        <div>
            <h3 className='company-name'>FlexWash Technologies</h3>
            <h2 className='job-role'>Frontend Engineer</h2>
        </div>
        <p className='job-location'>Bangalore</p>
      </div>
    </div>
    <p className='job-salary'>Estimated Salary: ₹18-35 LPA<span aria-label="Offered salary range" class=""> ✅</span></p>

    <div>
        <p className='about-comapny'>About Company: </p>
        <p className='about-us'><strong>About us</strong></p>
        <p className='company-info'>{limitedString(para,450)}
        </p>
    </div>
    {para?.length>450 && <button className='view-job'>View Job</button>}
    <div>
        <h3 className='min-exp-heading'>Minimum Experience</h3>
        <h2 className='min-exp'>5 years</h2>
    </div>
    <button className='easy-apply'>⚡ Easy Apply</button>
    <button className='refferal-ask'> Unlock referral asks</button>




    </div>
  )
}

export default JobCard
