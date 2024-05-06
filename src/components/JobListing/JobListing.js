import React, { useEffect, useState } from 'react'
import JobCard from '../JobCard/JobCard';
import { useSelector } from 'react-redux';
import "./jobListing.css"
import Shimmer from '../ShimmerUI/Shimmer';
import {useDispatch} from "react-redux"
import { addJobs } from '../../utils/jobListingSlice';

const JobListing = () => {
    const dispatch=useDispatch()
    const jobListings = useSelector(store=>store.jobs.items);
    const companyName = useSelector(state => state.companyName.companyName);
    const location = useSelector(state => state.locationName.locationName);
    const minExperience = useSelector(state => state.experience);
    const minBasepay=useSelector(state => state.basepay);
    const roles = useSelector(state => state.roles.items.map(role => role.toLowerCase())); // Convert roles to lowercase
    const [offset,setOffset]=useState(0);
    const [showShimmer,setShowShimmer]=useState(false);
    //fetehced  api data
    const fetchJobListings = async (offset) => {
        setShowShimmer(true);
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
            dispatch(addJobs(jsonData.jdList));
            setShowShimmer(false);
            
           //added to redux store
            dispatch(addJobs(jobListings));
        } catch (error) {
            console.error(error);
        }
    };


    //implemented scroll event
    useEffect(()=>{
        fetchJobListings(offset);
        window.addEventListener("scroll",handleScroll);
        return ()=>  window.removeEventListener("scroll",handleScroll);
    },[])


    //implemented infinite scroll condition
    const handleScroll=()=>{
        if(window.scrollY+window.innerHeight+0.5>=document.body.scrollHeight){
            setOffset((prevOffset) => prevOffset + 10);
        }
    }

    //when offsets changes fetch more data
    useEffect(()=>{
        fetchJobListings(offset);
      },[offset])


    const filterByRoles = (job) => {
        return roles.length === 0 || roles.includes(job.jobRole.toLowerCase());
    };

    const filterByCompanyName = (job) => {
        return companyName === '' || job.companyName.toLowerCase().includes(companyName.toLowerCase());
    };

    const filterByLocationName = (job) => {
        return location === '' || job.location.toLowerCase().includes(location.toLowerCase());
    };
    const filterByMinExperience = (job) => {
        if (minExperience === null) {
            return true; 
        }
        if (job.minExp === null) {
            return false; 
        }
        return job.minExp >= minExperience;
    };

    const filterByMinBasePay = (job) => {
        if (minBasepay === null) {
            return true; 
        }
        if (job.minJdSalary === null) {
            return false; 
        }
        return job.minJdSalary >= minBasepay;
    };

    const filteredJobListings = jobListings.filter(job => filterByRoles(job) && filterByCompanyName(job) && filterByLocationName(job) && filterByMinExperience(job) && filterByMinBasePay(job));


   
   
  return (
    <div className='job-listing-container'>
       {filteredJobListings.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}

      { showShimmer && <Shimmer/>}
    </div>
  )
}

export default JobListing
