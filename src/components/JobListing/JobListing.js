import React, { useEffect, useState } from 'react'
import JobCard from '../JobCard/JobCard';
import "./jobListing.css"

const JobListing = () => {
    const [jobListings, setJobListings] = useState([]);
    useEffect(()=>{
        const fetchJobListings = async (offset) => {

            try {
              const myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");
      
              const body = JSON.stringify({
                "limit": 10,
                "offset": 0
              });
      
              const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body
              };
      
              const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
              const jsonData = await response.json();
              setJobListings((prevJobListing)=>[...prevJobListing,...jsonData?.jdList]);
              
              console.log(jsonData);
            } catch (error) {
              console.error(error);
            }
          };

          fetchJobListings();
    },[])
  return (
    <div className='job-listing-container'>
       {jobListings.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  )
}

export default JobListing
