import React from 'react'
import classes from "./job.module.css";
import SearchBox from '../components/SearchBox';
import Card from '../components/Card';

const JobPage = () => {
  return (
    <div className= {classes.jobs}>
    <h1>Job Hiring</h1>
    <p>Apply for the jobs of your interest</p>
    <SearchBox />
    <div className="jobsContainer">
      <Card />
    </div>
    </div>
  )
}

export default JobPage