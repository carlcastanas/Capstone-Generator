$(document).ready(function() {
    $("#next-quote").on("click", function(e) {
        e.preventDefault();

        var randomQuoteNumber = getRandomQuoteNumber();
        updateQuote(randomQuoteNumber);
    });

    var q = location.search.split("?q=")[1];

    if (q >= 0 && q < quotes.length) {
        updateQuote(q);
    } else {
        $("#next-quote").click();
    }
});

$(document).ready(function() {
  $(".menu-toggle").click(function() {
    $(".nav-links").slideToggle(400);
  });

  // Show/hide dropdown menu on mobile
  $(".dropdown > a").click(function(e) {
    e.preventDefault();
    $(this).siblings(".dropdown-content").slideToggle(400);
  });

  // Close dropdown menu when clicking outside
  $(document).on("click", function(event) {
    if (!$(event.target).closest(".dropdown").length) {
      $(".dropdown-content").slideUp(400);
    }
  });
});

// Function to copy the dynamically generated quote
function copyQuoteToClipboard() {
    var quoteText = document.getElementById("quote").innerText;
    
    // Create a temporary textarea element
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = quoteText;
    
    // Append the textarea element to the body
    document.body.appendChild(tempTextArea);
    
    // Select the text in the textarea
    tempTextArea.select();
    
    // Execute the copy command
    document.execCommand("copy");
    
    // Remove the textarea element
    document.body.removeChild(tempTextArea);
  }
  
  // Function to handle mouseenter event and copy the quote
  function handleMouseEnter() {
    // Call the function to copy the quote to clipboard
    copyQuoteToClipboard();
  }
  
  // Attach the event listener after the quote is generated
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("quote-box").addEventListener("mouseenter", handleMouseEnter);
  });

function updateQuote(quoteNumber) {
    var randomQuote = quotes[quoteNumber];

    $("#quote").html(randomQuote.quote);
    $("#author").html(randomQuote.author);
    $("#quote-box").removeClass().addClass("animated bounceIn").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });

    $("#share").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent($("#hidden").html(randomQuote.quote).text()) + "\" carlcastanas" + quoteNumber);
}

function getRandomQuoteNumber() {
    return Math.floor(Math.random() * quotes.length);
}

document.getElementById('copy-button').addEventListener('click', function() {
    var quoteText = document.getElementById('quote').innerText;
    navigator.clipboard.writeText(quoteText).then(function() {
      console.log('Text copied to clipboard: ' + quoteText);
      // Display success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Text copied to clipboard!',
        text: quoteText
      });
    }, function(err) {
      console.error('Unable to copy text to clipboard: ', err);
      // Display error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Unable to copy text to clipboard!',
        text: err
      });
    });
  });
  document.getElementById('copy-button').addEventListener('click', function() {
    var quoteText = document.getElementById('quote').innerText;
    navigator.clipboard.writeText(quoteText).then(function() {
      console.log('Text copied to clipboard: ' + quoteText);
      // Display success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Text copied to clipboard!',
        text: quoteText,
        customClass: {
          popup: 'dark-mode'
        }
      });
    }, function(err) {
      console.error('Unable to copy text to clipboard: ', err);
      // Display error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Unable to copy text to clipboard!',
        text: err,
        customClass: {
          popup: 'dark-mode'
        }
      });
    });
  });
    
  


var quotes = [{
        "author": "Carl Andrew Castañas",
        "quote": "Online E-Learning System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Online Examination System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "OJT Timesheet Monitoring System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Home Surveillance and Automation"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "iPhone SMS Notification Systems"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Using GSM Technologies for Detecting Theft"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "POS Apps and Their Use"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Business Use Cases for Accounting Apps"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Time Tracking Solutions for Office Productivity"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "SMS Doorbell Notification Tools"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Wireless Technologies for Surveillance"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Online Learning Systems and Their Relevance"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Online Apps For Business Management"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Improving Nursing Education With a Healthcare System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Project Management Tracking Systems"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Biometric Security Systems"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Most Important Tools For Managing Data Security"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Most Important Tools For Managing Data Security"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "How The Internet Works: The Basics"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Introduction to Data Mining"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Emergency Vehicle Notification Systems"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Benefits of Data Mining"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Student Tracking Performance"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Library Information System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Student Information System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Student Handbook Application"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Thesis and Capstone Archiving System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "School Portal Application"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "School Events Attendance System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Grading System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Student Profile and Guidance Services with Decision Support"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Faculty Evaluation System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Online School Documents Processing with Payment System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Class Scheduling System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Student Council Voting System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Android Based E-learning"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "OJT Records Monitoring System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Sales and Inventory System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Point of Sale Application"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Boarding House Management System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "COOP Management System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Insurance Management System"
    },

    {
        "author": "Carl Andrew Castañas",
        "quote": "Beauty Parlor Management System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Daily Time Record and Payroll System with Barcode/Biometric"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Budget Management System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Queuing System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Financial Management with SMS Notification"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Procurement Management System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Financial Documents Archiving Management System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Teller’s Queuing System Using Barcode Technology"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Service Marketplace System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Tailor Booking Management System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Expense Tracking and Monitoring System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Loan Transaction and Reservation with SMS"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Accounting Information Management System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Food Order and Catering Services System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Online and SMS Based Salary Notification"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Pharmacy Stocks Management"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Laundry Booking System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Hotel Reservation Application"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Tourism Management Database System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Management Information Systems for Tourism and Hospitality"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Hotel And Restaurant Management And Monitoring System with SMS Support"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Mobile Based Tourist Destination Information"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Hotel Best Prices Mobile Application"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Hospitality Information System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Cloud-Based Property and Hospitality Management"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Hotel Booking App For Smart Travel"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Point of Sale (PoS) System used in the Hotel Industry"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "BrowseHotel: Hotel Hopping using Mobile Devices"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Transaction Processing System in Hotel and Restaurant"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Travel Destination and Events Portal Capstone Project"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Property Management Information System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Hotels and Vacation Rentals"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Maternal Records Management"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Smart Healthcare Support for Remote Patient Monitoring During COVID-19 Quarantine"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "X-Ray Results Image Archiving"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "First Aid Knowledge-Based Mobile Application"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Hospital Management System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Hospital Resources and Room Utilization"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Online Platform for COVID-19 Contact Tracing System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Nutrition Office Management Information System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Patient monitoring and tracking system of family planning in the community"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Mask Wearing Monitoring Application"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Mobile Based E-Prescribing App with Admin Panel"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Clinic Management System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Online Platform for Patient Dental and Medical Records"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Web-Based Psychopathology Diagnosis System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Health and Welfare Monitoring System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Mobile Based Common Ailment Guide with Admin Panel"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Blood Bank Information System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Medicine Reminder Application"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Web and Mobile Based Information of Herbal Plants and Medicinal Usages"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Android Based Fitness and Exercise App"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Gym Management System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Nutrition and Diet Mobile Application"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Contact Tracing Application"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": " COVID-19 Facilities Information System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Online Bus Ticket Reservation"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Vehicle Rental System with Mobile App Support"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Driving School Management System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Shipping Management System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Vehicle Insurance Information System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "GPS based Vehicle Theft Detection System using GSM Technology"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Bike Portal Information System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Vehicle Parking Management System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Vehicle Impoundment Information Management System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Vehicle Registration Portal"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Vehicle Franchising and Drivers Offense Software"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Traffic Management System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Mobile Based Airline Reservation System (Android and IOS)"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Tricycle Driver Conduct Reporting Mobile Application"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "PUV Transportation Route and Mapping System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Driving School Management System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "QR Code Fare Payment System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Courier Management System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Mobile Based Emergency Reporting with SMS Support"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Interactive Flood Hazard Map"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Web and Mobile Crime Reporting System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Weather Prediction App"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Bantay Baha Alert System with SMS and Push Notification"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Fire and Smoke Detection Application with SMS Notification"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "SMS-based Flood Monitoring System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Crisis Information Management Software"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Data Platform for Emergency Response Management"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Fire Extinguisher and Fire Fighting Drone"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Disaster Management Information System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Crime Scene Management Mobile Application"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Android Based Controlled Water Sprinkler"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Online Platform for Plant Calendar Scheduling"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "MobileMangrove a Mobile-Based Mangrove Species Field Guide"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Mobile Based Instructional Material for Agriculture"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Soil Moisture Sensor using Micro Controller"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "E-commerce Platform for Farm Trading Activities"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Web and Mobile Based Monitoring and Tracking of Fertilizer Delivery Products"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Online Record Archiving of Soil Analysis Results"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Drone Based Seeding Application Controlled by Mobile Devices"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Dairy Farm Management System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Water Monitoring For Aquaculture with SMS Notification"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Arduino Based Irrigation Device with Android Controlled Settings"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Android Based Feeds Scheduler Dispensing Application"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Mobile Based Farm Management Application"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Electronic Watering System for Vegetable Nursery Garden"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Solar-Powered Water Filtration System used in Farm Land"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Curfew and Travel Pass Information System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Evacuation Center Management System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "PWD Information System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Cloud-Based Business Permit Processing"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Vaccine Distribution System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Senior Citizen Information System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "DSWD Donation System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Information System for Bureau of Fire Protection"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Poverty and Malnutrition Monitoring System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Project Monitoring and Evaluation System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "BJMP’S Visitor’s Log Monitoring System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "City Business Permit and Monitoring System with Decision Support"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Barangay Records Management System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Housing Information Management with Mapping"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Census Monitoring"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Cedula Mobile: Cedula and Certification Request Mobile Application"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": "Health Center Information Management System"
    },
    {
        "author": "Carl Andrew Castañas",
        "quote": ""
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "What are Data Breaches and How to Prevent Them"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Improving Data Security"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Benefits of Car Transportation Systems"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Ecommerce Pricing Control Systems"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Apps for Monitoring Temperature"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Mobile Event Planners"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Alarm SMS Notification Systems"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Mobile Learning: How it Works"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Project Management Systems"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Machine Learning and Big Data"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "University Networks"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "ARPANET: How The Internet Started"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Latest Ecommerce Technologies"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Cre Principles of Cybersecurity"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Information Technology in the 21st century"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Java Programming: The Basics"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Software Testing 101"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Introduction to Software Quality Assurance"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Employee Productivity Apps"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Onboarding Systems and HR"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Cloud-Based Software vs. On-Site Solutions"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Benefits of Cloud Solutions"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Hotel PMS Systems"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Smart Technology in the Hotel Industry"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "IoT and Data"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "New IoT Gadgets"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "What is Artificial Intelligence"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "What is Machine Learning"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Robotics Systems"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Neural Networks"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "How Has Technology Changed Our Lives"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Censorship on the Internet"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Should the Internet be Free?"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Email Marketing Tools"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Web Scrapers"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "How Machine Learning Learns"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "How is AI Affecting us Today"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "New Tech Innovations for the Near Future"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "What is Virtual Reality"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "How are Clouds Technologies Used for Data Storage"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Mobile Apps That Improve Education"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "How The Internet Will Develop"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Software as a Service"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Platform as a Service"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Infrastructure as a Service"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "SaaS, PaaS, & IaaS: Main Differences"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "How Google Ranks Websites"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "3D Visualization in Architecture"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Essential Skills 3D Artists Need"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "3D Rendering Tools"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "DMaaS - Data Mining as a Service"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Augmented Reality"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "VR vs. AR: Differences Explained"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Automation Systems in the 21st century"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Data Management for Big Companies"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Essential Data Analyst Skills"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "AI and Gamification"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Data Mining for Employee Evaluation"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Data Mining in Healthcare"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Machine Learning for OTAs"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Facebook and Data"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Censorship on Social Media"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "How Social Media Filters out Content"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Fingerprint Authentication"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "IoT Sensors"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Web Ordering Systems"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "How to Prevent Phishing Attacks"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Using Web Scraping for Research"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Web Proxies"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Virtual Private Networks"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Differences Between VPNs and Proxies"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "How Proxies Enhances Web Scraping"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Home Automation Systems"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Smart Homes"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Warehouse Management Systems"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "How Voice Recognition Systems Work"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "QR Code Check-ins"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Smart Systems in Cars"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Should Cars Have More Computers or Less?"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Solar Grass Cutters With Automation"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Voice Controlled Tools"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "CRM Software"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Online Training Software Benefits"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "ChatBots: Introduction"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Complex Chat Bots"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Using ML for Cybersecurity"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Machine LEarning in Ecommerce"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Elearning and Gamification"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "How Games Have Improved Digital Technologies"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "How Far Have Video Games Gone?"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Home Voice Assistants"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "How Technology Helps Disabled People"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Apps for Child Monitoring"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Nutrition Tools"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Semantic Web & Big Data"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Autonomous Systems Today"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Is The Internet Helping us?"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Blockchain and Crypto"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "How Bitcoin Works"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "IoT and 5G"
    }, {
        "author": "Carl Andrew Castañas",
        "quote": "Edge Computing Explained"
    }
]
