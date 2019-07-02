import React from "react";
import BoxParentDetails from "./BoxParentDetails";
import FooterName from "./footer";

import clm1 from "../image/clm1.PNG";
import clm2 from "../image/clm2.PNG";
import clm3 from "../image/clm3.PNG";
import clmbookins from "../image/clmbookins.PNG";
import clmdone from "../image/clmdone.PNG";
import clmdone2 from "../image/clmdone2.PNG";

class ClmBookingSystem extends React.Component {
  render() {
    return (
      <div>
        <BoxParentDetails
          link_Name="This system is private, Dummy Information"
          project_title="Appointment System ASP.NET MVC"
          projectImage1={clm1}          
          Page_Name="Home Page"
          description='The homepage consist of "Start Book" button and the card is for Information of events coming up, booing button will lead to the booking page where users can start book an appointment.'
        />

        <BoxParentDetails
          link_Porfolio="http://odogba.dev.fast.sheridanc.on.ca/portfolio/Beer%20Store/beerstore.html"
          projectImage1={clm2}
          Page_Name="Booking Form"
          description= 'Demo information!!! user fill in personal information in other to book an appointment, if information not provided correctly user will be returned to booking form, behind Logic checks if same date and same time already booked'
        />

<BoxParentDetails
          link_Porfolio="http://odogba.dev.fast.sheridanc.on.ca/portfolio/Beer%20Store/beerstore.html"
          projectImage1={clm3}
          Page_Name="Admin Registration"
          description= 'Admin registration for Clients to manage the system, MSSQL is used to store data and the password is secured using Hashing and Salt Algorithm '
        />

<BoxParentDetails
          link_Porfolio="http://odogba.dev.fast.sheridanc.on.ca/portfolio/Beer%20Store/beerstore.html"
          projectImage1={clmbookins}
          Page_Name="Update on Previous bookings"
          description= 'After Admin logs in all bookings are shown and admin can either cancel the booking or set booking as done and its all registered in the system, same page has a link to view previous schedules already booked'
        />

<BoxParentDetails
          link_Porfolio="http://odogba.dev.fast.sheridanc.on.ca/portfolio/Beer%20Store/beerstore.html"
          projectImage1={clmdone}
          Page_Name="Previous Bookings"
          description= 'Once booking has been clicked done "Status" will be changed and will be registered as previous appointment this way admin can also track all users that have ever made an appointment. Admin can search through the record of appointments, this was efficient using Eager loading'
        />

<BoxParentDetails
          link_Porfolio="http://odogba.dev.fast.sheridanc.on.ca/portfolio/Beer%20Store/beerstore.html"
          projectImage1={clmdone2}
          Page_Name="Update of Test Data"
        />
        <FooterName/>
      </div>
    );
  }
}

export default ClmBookingSystem;
