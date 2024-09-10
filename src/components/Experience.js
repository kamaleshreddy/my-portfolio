// src/components/WorkExperience.js
import React from 'react';
import '../Job.css'; // Ensure you're using the correct CSS file

const Experience = () => {
  return (
    <section id="experience">
      <h2>Work Experience</h2>

      {/* Job Entry 1 */}
      <div className="job">
        <div className="job-details">
          <div className="left">
            <span className="company-name">Amazon Web Services (AWS)</span>
            <span className="role">
              Software Development Engineer Intern (SDE Intern)
            </span>
          </div>
          <div className="right">
            <span className="location">Seattle, USA</span>
            <span className="time">June 2022 - August 2022</span>
          </div>
        </div>
        {/* Experience points */}
        <ul className="experience-points">
          <li>
            Used AWS Lambda functions to transform Clojure data from Clara Rule
            engine into Nodes & Edges for visualization, and stored the data in
            AWS S3 Bucket, resulting in a 15% increase in user engagement.
          </li>
          <li>
            Created and presented a QUIP design document for the Clara rule
            engine visualization project, incorporating feedback from team
            members.
          </li>
          <li>
            Maintained and developed 60 unit tests for back-end Clojure
            application, improving code coverage & modified AWS Cloud
            development kit.
          </li>
          <li>
            Designed a dynamic React Redux and Typescript front-end UI to
            visualize data using AWS Lambda functions and store it in AWS S3
            Bucket.
          </li>
          <li>
            Strong soft skills, such as communication, teamwork, and
            problem-solving, with 2 years of experience in presenting data
            findings to technical and non-technical audiences.
          </li>
          <li>
            Participated in SCRUM calls, 1:1, & weekly sprints, ensuring that
            team members were aligned on goals and deliverables.
          </li>
        </ul>
      </div>

      {/* Job Entry 2 */}
      <div className="job">
        <div className="job-details">
          <div className="left">
            <span className="company-name">Arizona State University</span>
            <span className="role">Graduate Assistantship</span>
          </div>
          <div className="right">
            <span className="location">Tempe, USA</span>
            <span className="time">August 2021 - May 2023</span>
          </div>
        </div>
        {/* Experience points */}
        <ul className="experience-points">
          <li>
            Mentored students in advanced database management systems and
            business database courses, providing comprehensive support to ensure
            comprehension of course material and successful completion of
            assignments, resulting in a 15% reduction in average assignment
            turnaround time and improved student satisfaction.
          </li>
          <li>
            Enhanced students' learning experience by providing constructive
            feedback on SQL Server Management Studio assignments and identifying
            areas for improvement and Achieved a 10% increase in student
            participation in discussion sections by creating a more engaging and
            interactive learning environment.
          </li>
        </ul>
      </div>

      {/* Job Entry 3 */}
      <div className="job">
        <div className="job-details">
          <div className="left">
            <span className="company-name">Levadata Solutions Pvt Ltd</span>
            <span className="role">Assoiate Engineer</span>
          </div>
          <div className="right">
            <span className="location">Hyderabad, India</span>
            <span className="time">August 2020 - August 2021</span>
          </div>
        </div>
        {/* Experience points */}
        <ul className="experience-points">
          <li>
            Built Python scripts and Apache Airflow pipelines to automate data
            processing and analysis. This resulted in a 20% reduction in the
            time it took to process data, and a 10% improvement in the accuracy
            of the results.
          </li>
          <li>
            Expertise in developing and consuming REST APIs using JSON and
            Python. Experienced in R, with proficiency in data wrangling, data
            cleaning, and statistical modeling.
          </li>
          <li>
            Knowledge with Jira, with 2 years of experience in issue tracking
            and project management. Experienced in agile and waterfall project
            management methodologies, with a focus on delivering high-quality
            software on time and within budget.
          </li>
          <li>
            Proven ability to create data models that meet business
            requirements, including logical and physical data modeling,
            normalization, and data warehousing.
          </li>
          <li>
            Experience in Apache Airflow, which helps in workflow automation.
            Automated Python codes and queries using schedulers, task
            dependencies, monitoring the status in interface, exception
            handling, and sending alerts. Decreased manual work by 20%.
          </li>
          <li>
            Created around 25 dashboards, visualizations, and reports in Power
            BI to help businesses make better decisions.
          </li>
        </ul>
      </div>

      {/* Job Entry 4 */}
      <div className="job">
        <div className="job-details">
          <div className="left">
            <span className="company-name">Levadata Solutions Pvt Ltd</span>
            <span className="role">Data Analyst</span>
          </div>
          <div className="right">
            <span className="location">Hyderabad, India</span>
            <span className="time">March 2020 - August 2020</span>
          </div>
        </div>
        {/* Experience points */}
        <ul className="experience-points">
          <li>
            Expertise in Microsoft Excel, including creating macros, pivot
            tables, and data analysis. Proficient in using Excel functions such
            as VLOOKUP, INDEX/MATCH, and SUMPRODUCT. Developed macros to
            automate repetitive tasks and improve efficiency by 25%. Used pivot
            tables to analyze data and identify trends.
          </li>
          <li>
            Performed web scraping using Python, Beautiful Soup, Selenium, and
            Scrapy to gather data for improving training data for a project that
            resulted in a 15% increase in accuracy.
          </li>
          <li>
            Proficient in data deduplication, with experience in removing
            duplicate values from more than 200 datasets.
          </li>
          <li>
            Utilized ETL tools, including Alteryx, to extract, transform, and
            load large datasets with more than 100 columns for analysis and
            reporting purposes.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
