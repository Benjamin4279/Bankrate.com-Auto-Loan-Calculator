Auto Loan Calculator Test Plan
Author: Benjamin Saint Elien
Date: 1/22/19
Version: 1.0.0














Table of Contents

1.	Introduction 

1.1.	Purpose
1.2.	Product Overview
1.3.	Audience/Personnel

2.	Test Strategy

2.1.	Test Objective
2.2.	Test Assumptions
2.3.	Test Schedule

3.	Execution Strategy

3.1.	Entry and exit criteria
3.2.	Test Cycles
3.3.	Validation and Defect Management
3.4.	Risk and Mitigations

4.	Test Management

4.1.	Project Management
4.2.	Test Lead
4.3.	Test Team
4.4.	Project Development



















Introduction

1.1 Purpose

The approach will drive the product is test for stability, scalability, and functionality. These guidelines will be implemented as part of the framework of the testing plan.
The test strategy will include the rules of the project that will be given (start/end, dates, objectives, assumptions). The process of setting up valid tests (entry/exit criteria, creation of test cases, specific tasks to perform, scheduling, data strategy).
The execution strategy will be performed and process to identify and report defects, and to fix implement fixes.
The test management will handle logistics of the test and all the events that come up during execution (communications, escalation procedures, team roster).

1.2 Project Overview

The Bankrate.com auto loan calculator is an online calculating module available for car buyers regarding financing. 
This calculator contains sections for the consumer to provide information to input the amount of money borrowed, interest rate, and the length of time to get the monthly estimate amount. An algorithm is used to execute the calculations to display the end result.

1.3 Audience

The team members will perform tasks specified in this document, and provide input and recommendations on this document. 
The project manager plans for the testing activities in the overall project schedule, reviews the document, tracks the performance of the test according to the task specified, and approves the document and is accountable for the results.
The stakeholders and participants may take part in the user acceptance testing to ensure the business is aligned with the results of the test. 
The development team ensures that the test plan and deliverables are in line with the design, provides the environment for testing and follows the procedures related to the design fixes of the defects.
Business analysts will provide their inputs on functional changes. 

Test Strategy

2.1	Test Objectives

The main objective of the test strategy is to test the functionality of the Bankrate.com auto loan calculator.
The test will be executed by implementing exploratory, functional, and user acceptance testing methods. Also, to identify, fix, and retest medium and high severity defects per entrance of criteria, and prioritize lower severity defects for future fixing.
The final product of the test is two-fold that would consist of a software that is production ready, and a set of stable test scripts that can be reuse for functional and UAT test execution. 

2.2	Test Assumptions

Key Assumptions

The production like data will be available in the system to start functional testing.
A third cycle will be used if the defect rate is high in the second test cycle.

General Assumptions

The business analyst will assume the role to support the inputs by the test design, review and sign off all test cases prepared by the test team prior of the start of the test execution, and review and sign off all test deliverables. 
The project manager will review and sign off all test deliverables.
The test team will manage the test efforts with close coordination with the project manager and business analyst. 
The development team will provide defect fix plans based on the defect meetings during each cycle to plan. The same will be informed to the test team prior to start of defect cycles. 
The test team assumes all necessary inputs required during the test design and execution, and will be supported by development or business analyst appropriately. 
All defects would come along with a snapshot JPEG format. 
The test environment and preparation activities will be owned by the development team. 
The third cycle will be initiated if there are more bugs found in the second cycle.               
             

Functional Testing

The test approach is to use numerical data to input text fields, and click on the drop down menus to select new or used automobile, the length of time, and to select interest rate. 
User Acceptance Testing  
The user acceptance test will be performed by end users and notify the QA group will provide their support on creating UAT scripts.

Test Principles

To provide as much information of all the guidelines possible. The goals are eliminating redundancy or duplication; providing flexibility with the ability to make changes needed.
There will be an entrance and exit criteria.
The test activity will be divided into distinct phases, each with clearly defined objectives and goals. 
The test activity will be focused on meeting the business objectives, cost efficiency, and quality. 

Data Approach

The data will be used in the system that is being pre-loaded and which is used for testing activities. 
Scope and Levels of Testing

Procedure: Exploratory testing
Purpose: Critical defects are removed before next levels of testing can start. 
Scope: Input numerical and alphanumerical data on the text field to display software behavioral patterns. 
Testers: The test team
Method: There will be no test scripts carried out in this procedure.
Timing: At the start of each cycle. 
Test acceptance criteria: Documentation used for the project; test cases approved and signed off to start execution, test plan reviewed, approved, and signoff prior to test execution. Test environment in Windows 10 with the Bankrate.com auto loan calculator installed, configured, and ready to use. 



Test Deliverables

Deliverable: Test cases, author name: Benjamin Saint Elien, Reviewer: Business Analyst
Deliverable: Test plan, author name:  Benjamin Saint Elien, Reviewer: Business Analyst     

User Acceptance Test

Procedure: User Acceptance Test
Purpose: Focus on validating business logic.
Testers:  Tested by the end users.
Method: All testing scripts will be provided from the QA team for the end users to start test execution.
Timing: After all levels ae tested.

Test Deliverables

Deliverable: Test scripts, author name: Benjamin Saint Elien, Reviewer: Project Manager

Test Estimation  

Exploratory Testing: 1 hour, Functional Testing: 2 hours, User Acceptance Testing: 1 hour

2.3	Test Schedule: 

Include test milestones identified in the software project schedule as well as all item transmittal events.  Define additional test milestones necessary, and specify the schedule for each testing task and test milestone. For each test resource, specify it’s periods of use.     
Execution Strategy

3.1	Entry and Exit Criteria

The entry level criteria refers to the desirable conditions in order to start test execution; only the mitigation of the code and fixes needed to be assessed at the end of each cycle. 
The exit level criteria refers to the desirable conditions that needed to be met in order to proceed with the implementation. 
Entry and exit criteria are flexible benchmarks. If they are not met, the test team will assess the risk, identify the mitigation actions and provide a recommendation. All this input to the project manager for a final go-no go decision.
The entry criteria to start execution phase of the test: the activities listed in the Test Planning section of the schedule are 100% completed.
The entry criteria to start each cycle: the activities listed in the execution section of the schedule are 100% completed at each cycle.

3.2	Test Cycles

There will be two test cycles. Each cycle will execute all the scripts. 
The objective of the first cycle is to identify any blocking, critical defects, and most of the high defects.
The objective of the second cycle is to identify remaining medium and high defects, remove the work around from the first cycle. Correct gaps in the scripts and obtain performance results. 
Write down UAT will consist of one cycle.

3.3	Validation and Defect Management

The exceptions from the testers involved in the testing plan in terms of participating in executing all test scripts, and could also do additional testing if they identify a possible gap in the scripts. 
Defects will be tracked.

The expectations of the QA team responsibility on opening defects, linked them to the corresponding script, assign an initial severity and status, retest and close the defect. It is the responsibility of the defect manager to review the severity of the defects and facilitate with the development team the fix and its implementation, communicate with the testers when the test can continue or should be hault, request the tester to retest, and modify status as the defect progress through the cycle. 
Classification of the bug: Severity/Priority

Priority 1: Immediate or critical. Must be resolved within 24 hours. 
Severity 1: Critical. A defect that makes the whole application unusable. 
Priority 2: High. Must be resolved before the release is made.
Severity 2: Major. Occurs when a the functionality is functioning far away from the expectations. 
Priority 3: Medium. Should be resolved after all the serious bugs are fixed. 
Severity 3: Moderate. Occurs when the product doesn’t meet certain criteria or exhibits some unusual behavior.
Priority 4: Low. Can be resolved in the future and does not need immediate attention. 
Severity 4: Low. Occurs when there’s little to no impact on the functionality but it is still a valid defect.



3.4 Risk and Mitigation

Description: Not properly trained Testers, Probability (Low/Med/High): Low, Impact (Low/Med/High): Med, Mitigation: Ongoing sessions for testers
Description: Incomplete test environment due to time constraints, Probability (Low/Med/High): Med, Impact (Low/Med/High): Med, Mitigation: Realistic time and resource planning
Description: Error handling: Testers are not aware on how to report bugs. Probability (Low/Med/High): Low, Impact (Low/Med/High): High, Mitigation: Easy-to-use bug reporting solution for test activities available
Description: Test failure. Probability (Low/Med/High): Low, Impact (Low/Med/High): High, Mitigation:  Feature complete development done before test execution start. 

Test Management

4.1 Project Management

The project manager will assume the responsibilities in terms of reviewing the content of the test plan, test strategy, and test estimates to be signed off on it. 

4.2 Test Lead

The test lead assures entrance criteria are used as input before start of execution.
Develops test plan and the guidelines to create test conditions, test cases, expected  results, and execution scripts. 
Provides guidelines on how to manage defects. 
Attend status meetings in person or via conference call line. 
Communicate to the test team regarding any changes that need to be made to the test deliverables, or application and when they will be completed.
Provide on premise or telecommute support. 

4.3 Test Team

Develop test conditions, test cases, expected results, and execution scripts. 
Identify, document, and prioritize defects according to the guideline provided by the test lead. 
Write down retest after software modifications have been made according to the schedule.
Prepare regular status.             

4.4 Development Team

Review testing deliverables. 
Assist in the validation of results – if requested.
Support the development and testing process being used to support the project. 
Certify correct components have been delivered to the test environment at points specified by the test schedule.
Define process/tools to facilitate the initial and ongoing migration of components. 
Conduct first line investigation into execution discrepancies and assist test executors in creation of the accurate defects. 
Implement fixes to defects according to schedule.         
                 



