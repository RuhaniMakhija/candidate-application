import React, { useEffect } from 'react'
import JobCard from '../JobCard/JobCard';

const JobListing = () => {
    useEffect(()=>{
        const fetchJobListings = async (offset) => {

            try {
              const myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");
      
              const body = JSON.stringify({
                "limit": 10,
                "offset": offset
              });
      
              const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body
              };
      
              const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
              const jsonData = await response.json();
            
              
              console.log(jsonData);
            } catch (error) {
              console.error(error);
            }
          };

          fetchJobListings();
    },[])
  return (
    <div>
      <JobCard/>
    </div>
  )
}

export default JobListing
