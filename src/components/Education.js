// src/components/Education.js
import React from 'react';
import '../Job.css'; // Reuse the same Job.css file

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>

      {/* Education Entry 1 */}
      <div className="job">
        {' '}
        {/* You can use the "job" class for consistency */}
        <div className="job-details">
          <div className="left">
            <span className="company-name">Arizona State University</span>
            <span className="role">Masters in Information Technology</span>
          </div>
          <div className="right">
            <span className="location">Tempe, Arizona, USA</span>
            <span className="time">August 2021 - May 2023</span>
          </div>
        </div>
      </div>

      {/* Education Entry 2 */}
      <div className="job">
        <div className="job-details">
          <div className="left">
            <span className="company-name">
              Great Lakes Institute of Management
            </span>
            <span className="role">
              Post-Graduation certification Program in Data Science and
              Analytics Engineering
            </span>
          </div>
          <div className="right">
            <span className="location">Hyderabad,India</span>
            <span className="time">June 2019 - December 2019</span>
          </div>
        </div>
      </div>

      {/* Education Entry 3 */}
      <div className="job">
        <div className="job-details">
          <div className="left">
            <span className="company-name">
              Amrita School Of Engineering, Amrita Vishwa Vidyapeetham
            </span>
            <span className="role">B.Tech Mechanical Engineering</span>
          </div>
          <div className="right">
            <span className="location">Bangalore, India</span>
            <span className="time">August 2015 - May 2019</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
