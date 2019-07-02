import React from 'react';
import BoxParentDetails from './BoxParentDetails';
import FooterName from "./footer";

import flexmember from "../image/flexmember.PNG";
import flexmember1 from "../image/flexmember1.PNG";
import flexcourses from "../image/flexcreate.PNG";
import flexapproval from "../image/flexapproval.PNG";
import flexapproval2 from "../image/flexcourses.PNG";
import flexapproval3 from "../image/flexapproval2.PNG";
import flexwithdraw from "../image/flexwithdraw.PNG";



class FlexiLearn extends React.Component{
    render(){
        return(
      <div>
        <BoxParentDetails
         link_Porfolio="https://github.com/JeffreyOdogba"
          link_Name="GitHub"
          project_title="Course registration using ASP.NET MVC: Udemy/Lynda Example"
          projectImage1={flexmember}
          Page_Name="Main Page"
          description= 'This is a school project and end goal is for members to sign up for courses and members are entited to many cousrses. Database used was MSSQL and ASP.NET MVC Entity Framework'
        />

        <BoxParentDetails        
          projectImage1={flexmember1}
          Page_Name="Main Page"
          description= 'Members we are not member yet need to create and account, if memebers already exist user is been alerted and redirected to Sign in Page, Education Level is used to provid what courses are needed for the user'
        />

<BoxParentDetails
          projectImage1={flexcourses}
          Page_Name="Main Page"
          description= 'This page is for creating/adding courses for users {Database was used to store courses}'
        />

<BoxParentDetails
          projectImage1={flexapproval2}
          Page_Name="Main Page"
          description= 'Updated Course that was added user can book courses in other to be approved by the management'
        />

<BoxParentDetails
          projectImage1={flexwithdraw}
          Page_Name="Main Page"
          description= 'This the user dashboard, user can see courses booked and shows level of education for a specfic user'
        />

<BoxParentDetails
          projectImage1={flexapproval}
          Page_Name="Main Page"
          description= 'Admin can Approve the course or Reject it, this shows all users courses they signed up for.'
        />

<BoxParentDetails
          projectImage1={flexapproval3}
          Page_Name="Updated Status if course was approved or rejected"
        />

        <FooterName/>
      </div>

      
        );
    }
}

export default FlexiLearn;