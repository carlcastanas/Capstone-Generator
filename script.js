$(document).ready(function () {
  $("#next-quote").on("click", function (e) {
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

function updateQuote(quoteNumber) {
  var randomQuote = quotes[quoteNumber];

  $("#quote").html(randomQuote.quote);
  $("#author").html(randomQuote.author);
  $("#quote-box").removeClass().addClass("animated bounceIn").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    $(this).removeClass();
  });

  $("#share").attr("href", "m.me/carlcastanas"" + encodeURIComponent($("#hidden").html(randomQuote.quote).text()) + "\" https://www.facebook.com/carlcastanas");
}

function getRandomQuoteNumber() {
  return Math.floor(Math.random() * quotes.length);
}

var quotes = [
  {"author": "Carl Andrew Castañas", "quote": "Online E-Learning System"},
  {"author": "Carl Andrew Castañas", "quote": "Online Examination System"}, 
  {"author": "Carl Andrew Castañas", "quote": "OJT Timesheet Monitoring System"},
  {"author": "Carl Andrew Castañas", "quote": "Home Surveillance and Automation"},
  {"author": "Carl Andrew Castañas", "quote": "iPhone SMS Notification Systems"}, 
  {"author": "Carl Andrew Castañas", "quote": "Using GSM Technologies for Detecting Theft"},
  {"author": "Carl Andrew Castañas", "quote": "POS Apps and Their Use"},
  {"author": "Carl Andrew Castañas", "quote": "Business Use Cases for Accounting Apps"}, 
  {"author": "Carl Andrew Castañas", "quote": "Time Tracking Solutions for Office Productivity"},
  {"author": "Carl Andrew Castañas", "quote": "SMS Doorbell Notification Tools"},
  {"author": "Carl Andrew Castañas", "quote": "Wireless Technologies for Surveillance"}, 
  {"author": "Carl Andrew Castañas", "quote": "Online Learning Systems and Their Relevance"},
  {"author": "Carl Andrew Castañas", "quote": "Online Apps For Business Management"},
  {"author": "Carl Andrew Castañas", "quote": "Improving Nursing Education With a Healthcare System"}, 
  {"author": "Carl Andrew Castañas", "quote": "Project Management Tracking Systems"},
  {"author": "Carl Andrew Castañas", "quote": "Biometric Security Systems"},
  {"author": "Carl Andrew Castañas", "quote": "Most Important Tools For Managing Data Security"}, 
  {"author": "Carl Andrew Castañas", "quote": "Most Important Tools For Managing Data Security"},
  {"author": "Carl Andrew Castañas", "quote": "How The Internet Works: The Basics"},
  {"author": "Carl Andrew Castañas", "quote": "Introduction to Data Mining"}, 
  {"author": "Carl Andrew Castañas", "quote": "Emergency Vehicle Notification Systems"},
  {"author": "Carl Andrew Castañas", "quote": "Benefits of Data Mining"},
  {"author": "Carl Andrew Castañas", "quote": "Student Tracking Performance"}, 
  {"author": "Carl Andrew Castañas", "quote": "Library Information System"},
  {"author": "Carl Andrew Castañas", "quote": "Student Information System"},
  {"author": "Carl Andrew Castañas", "quote": "Student Handbook Application"}, 
  {"author": "Carl Andrew Castañas", "quote": "Thesis and Capstone Archiving System"},
  {"author": "Carl Andrew Castañas", "quote": "School Portal Application"},
  {"author": "Carl Andrew Castañas", "quote": "School Events Attendance System"}, 
  {"author": "Carl Andrew Castañas", "quote": "Grading System"},
  {"author": "Carl Andrew Castañas", "quote": "Student Profile and Guidance Services with Decision Support"},
  {"author": "Carl Andrew Castañas", "quote": "Faculty Evaluation System"}, 
  {"author": "Carl Andrew Castañas", "quote": "Online School Documents Processing with Payment System"},
  {"author": "Carl Andrew Castañas", "quote": "Class Scheduling System"},
  {"author": "Carl Andrew Castañas", "quote": "Student Council Voting System"}, 
  {"author": "Carl Andrew Castañas", "quote": "Android Based E-learning"},
  {"author": "Carl Andrew Castañas", "quote": "OJT Records Monitoring System"},
  {"author": "Carl Andrew Castañas", "quote": "Sales and Inventory System"}, 
  {"author": "Carl Andrew Castañas", "quote": "Point of Sale Application"},
  {"author": "Carl Andrew Castañas", "quote": "Boarding House Management System"},
  {"author": "Carl Andrew Castañas", "quote": "COOP Management System"}, 
  {"author": "Carl Andrew Castañas", "quote": "Insurance Management System"},
  
  {"author": "Carl Andrew Castañas", "quote": "Beauty Parlor Management System"},
  {"author": "Carl Andrew Castañas", "quote": "Daily Time Record and Payroll System with Barcode/Biometric"}, 
  {"author": "Carl Andrew Castañas", "quote": "Budget Management System"},
  {"author": "Carl Andrew Castañas", "quote": "Queuing System"},
  {"author": "Carl Andrew Castañas", "quote": "Financial Management with SMS Notification"}, 
  {"author": "Carl Andrew Castañas", "quote": "Procurement Management System"},
  {"author": "Carl Andrew Castañas", "quote": "Financial Documents Archiving Management System"},
  {"author": "Carl Andrew Castañas", "quote": "Teller’s Queuing System Using Barcode Technology"}, 
  {"author": "Carl Andrew Castañas", "quote": "Service Marketplace System"},
  {"author": "Carl Andrew Castañas", "quote": "Tailor Booking Management System"},
  {"author": "Carl Andrew Castañas", "quote": "Expense Tracking and Monitoring System"}, 
  {"author": "Carl Andrew Castañas", "quote": "Loan Transaction and Reservation with SMS"},
  {"author": "Carl Andrew Castañas", "quote": "Accounting Information Management System"},
  {"author": "Carl Andrew Castañas", "quote": "Food Order and Catering Services System"}, 
  {"author": "Carl Andrew Castañas", "quote": "Online and SMS Based Salary Notification"},
  {"author": "Carl Andrew Castañas", "quote": "Pharmacy Stocks Management"},
  {"author": "Carl Andrew Castañas", "quote": "Laundry Booking System"}, 
  {"author": "Carl Andrew Castañas", "quote": "Hotel Reservation Application"},
  {"author": "Carl Andrew Castañas", "quote": "Tourism Management Database System"},
  {"author": "Carl Andrew Castañas", "quote": "Management Information Systems for Tourism and Hospitality"}, 
  {"author": "Carl Andrew Castañas", "quote": "Hotel And Restaurant Management And Monitoring System with SMS Support"},
  {"author": "Carl Andrew Castañas", "quote": "Mobile Based Tourist Destination Information"},
  {"author": "Carl Andrew Castañas", "quote": "Hotel Best Prices Mobile Application"}, 
  {"author": "Carl Andrew Castañas", "quote": "Hospitality Information System"},
  {"author": "Carl Andrew Castañas", "quote": "Cloud-Based Property and Hospitality Management"},
  {"author": "Carl Andrew Castañas", "quote": "Hotel Booking App For Smart Travel"},
  {"author": "Carl Andrew Castañas", "quote": "Point of Sale (PoS) System used in the Hotel Industry"},
  {"author": "Carl Andrew Castañas", "quote": "BrowseHotel: Hotel Hopping using Mobile Devices"}, 
  {"author": "Carl Andrew Castañas", "quote": "Transaction Processing System in Hotel and Restaurant"},
  {"author": "Carl Andrew Castañas", "quote": "Travel Destination and Events Portal Capstone Project"},
  {"author": "Carl Andrew Castañas", "quote": "Property Management Information System"}, 
  {"author": "Carl Andrew Castañas", "quote": "Hotels and Vacation Rentals"},
  {"author": "Carl Andrew Castañas", "quote": "Maternal Records Management"},
  {"author": "Carl Andrew Castañas", "quote": "Smart Healthcare Support for Remote Patient Monitoring During COVID-19 Quarantine"},
  {"author": "Carl Andrew Castañas", "quote": "X-Ray Results Image Archiving"},
  {"author": "Carl Andrew Castañas", "quote": "First Aid Knowledge-Based Mobile Application"}, 
  {"author": "Carl Andrew Castañas", "quote": "Hospital Management System"},
  {"author": "Carl Andrew Castañas", "quote": "Hospital Resources and Room Utilization"},
  {"author": "Carl Andrew Castañas", "quote": "Online Platform for COVID-19 Contact Tracing System"}, 
  {"author": "Carl Andrew Castañas", "quote": "Nutrition Office Management Information System"},
  {"author": "Carl Andrew Castañas", "quote": "Patient monitoring and tracking system of family planning in the community"},
  {"author": "Carl Andrew Castañas", "quote": "Mask Wearing Monitoring Application"},
  {"author": "Carl Andrew Castañas", "quote": "Mobile Based E-Prescribing App with Admin Panel"},
  {"author": "Carl Andrew Castañas", "quote": "Clinic Management System"}, 
  {"author": "Carl Andrew Castañas", "quote": "Online Platform for Patient Dental and Medical Records"},
  {"author": "Carl Andrew Castañas", "quote": "Web-Based Psychopathology Diagnosis System"},
  {"author": "Carl Andrew Castañas", "quote": "Health and Welfare Monitoring System"}, 
  {"author": "Carl Andrew Castañas", "quote": "Mobile Based Common Ailment Guide with Admin Panel"},
  {"author": "Carl Andrew Castañas", "quote": "Blood Bank Information System"},
  {"author": "Carl Andrew Castañas", "quote": "Medicine Reminder Application"},
  {"author": "Carl Andrew Castañas", "quote": "Web and Mobile Based Information of Herbal Plants and Medicinal Usages"},
  {"author": "Carl Andrew Castañas", "quote": "Android Based Fitness and Exercise App"}, 
  {"author": "Carl Andrew Castañas", "quote": "Gym Management System"},
  {"author": "Carl Andrew Castañas", "quote": "Nutrition and Diet Mobile Application"},
  {"author": "Carl Andrew Castañas", "quote": "Contact Tracing Application"}, 
  {"author": "Carl Andrew Castañas", "quote": " COVID-19 Facilities Information System"},
  {"author": "Carl Andrew Castañas", "quote": "Online Bus Ticket Reservation"},
  {"author": "Carl Andrew Castañas", "quote": "Vehicle Rental System with Mobile App Support"},
  {"author": "Carl Andrew Castañas", "quote": "Driving School Management System"},
  {"author": "Carl Andrew Castañas", "quote": "Shipping Management System"},
  {"author": "Carl Andrew Castañas", "quote": "Vehicle Insurance Information System"},
  {"author": "Carl Andrew Castañas", "quote": "GPS based Vehicle Theft Detection System using GSM Technology"}, 
  {"author": "Carl Andrew Castañas", "quote": "Bike Portal Information System"},
  {"author": "Carl Andrew Castañas", "quote": "Vehicle Parking Management System"},
  {"author": "Carl Andrew Castañas", "quote": "Vehicle Impoundment Information Management System"}, 
  {"author": "Carl Andrew Castañas", "quote": "Vehicle Registration Portal"},
  {"author": "Carl Andrew Castañas", "quote": "Vehicle Franchising and Drivers Offense Software"},
  {"author": "Carl Andrew Castañas", "quote": "Traffic Management System"},
  {"author": "Carl Andrew Castañas", "quote": "Mobile Based Airline Reservation System (Android and IOS)"},
  {"author": "Carl Andrew Castañas", "quote": "Tricycle Driver Conduct Reporting Mobile Application"}, 
  {"author": "Carl Andrew Castañas", "quote": "PUV Transportation Route and Mapping System"},
  {"author": "Carl Andrew Castañas", "quote": "Driving School Management System"},
  {"author": "Carl Andrew Castañas", "quote": "QR Code Fare Payment System"}, 
  {"author": "Carl Andrew Castañas", "quote": "Courier Management System"},
  {"author": "Carl Andrew Castañas", "quote": "Mobile Based Emergency Reporting with SMS Support"},
  {"author": "Carl Andrew Castañas", "quote": "Interactive Flood Hazard Map"},
  {"author": "Carl Andrew Castañas", "quote": "Web and Mobile Crime Reporting System"},
  {"author": "Carl Andrew Castañas", "quote": "Weather Prediction App"}, 
  {"author": "Carl Andrew Castañas", "quote": "Bantay Baha Alert System with SMS and Push Notification"},
  {"author": "Carl Andrew Castañas", "quote": "Fire and Smoke Detection Application with SMS Notification"},
  {"author": "Carl Andrew Castañas", "quote": "SMS-based Flood Monitoring System"}, 
  {"author": "Carl Andrew Castañas", "quote": "Crisis Information Management Software"},
  {"author": "Carl Andrew Castañas", "quote": "Data Platform for Emergency Response Management"},
  {"author": "Carl Andrew Castañas", "quote": "Fire Extinguisher and Fire Fighting Drone"},
  {"author": "Carl Andrew Castañas", "quote": "Disaster Management Information System"},
  {"author": "Carl Andrew Castañas", "quote": "Crime Scene Management Mobile Application"},
  {"author": "Carl Andrew Castañas", "quote": "Android Based Controlled Water Sprinkler"},
  {"author": "Carl Andrew Castañas", "quote": "Online Platform for Plant Calendar Scheduling"}, 
  {"author": "Carl Andrew Castañas", "quote": "MobileMangrove a Mobile-Based Mangrove Species Field Guide"},
  {"author": "Carl Andrew Castañas", "quote": "Mobile Based Instructional Material for Agriculture"},
  {"author": "Carl Andrew Castañas", "quote": "Soil Moisture Sensor using Micro Controller"}, 
  {"author": "Carl Andrew Castañas", "quote": "E-commerce Platform for Farm Trading Activities"},
  {"author": "Carl Andrew Castañas", "quote": "Web and Mobile Based Monitoring and Tracking of Fertilizer Delivery Products"},
  {"author": "Carl Andrew Castañas", "quote": "Online Record Archiving of Soil Analysis Results"},
  {"author": "Carl Andrew Castañas", "quote": "Drone Based Seeding Application Controlled by Mobile Devices"},
  {"author": "Carl Andrew Castañas", "quote": "Dairy Farm Management System"}, 
  {"author": "Carl Andrew Castañas", "quote": "Water Monitoring For Aquaculture with SMS Notification"},
  {"author": "Carl Andrew Castañas", "quote": "Arduino Based Irrigation Device with Android Controlled Settings"},
  {"author": "Carl Andrew Castañas", "quote": "Android Based Feeds Scheduler Dispensing Application"}, 
  {"author": "Carl Andrew Castañas", "quote": "Mobile Based Farm Management Application"},
  {"author": "Carl Andrew Castañas", "quote": "Electronic Watering System for Vegetable Nursery Garden"},
  {"author": "Carl Andrew Castañas", "quote": "Solar-Powered Water Filtration System used in Farm Land"},
  {"author": "Carl Andrew Castañas", "quote": "Curfew and Travel Pass Information System"},
  {"author": "Carl Andrew Castañas", "quote": "Evacuation Center Management System"}, 
  {"author": "Carl Andrew Castañas", "quote": "PWD Information System"},
  {"author": "Carl Andrew Castañas", "quote": "Cloud-Based Business Permit Processing"},
  {"author": "Carl Andrew Castañas", "quote": "Vaccine Distribution System"}, 
  {"author": "Carl Andrew Castañas", "quote": "Senior Citizen Information System"},
  {"author": "Carl Andrew Castañas", "quote": "DSWD Donation System"},
  {"author": "Carl Andrew Castañas", "quote": "Information System for Bureau of Fire Protection"},
  {"author": "Carl Andrew Castañas", "quote": "Poverty and Malnutrition Monitoring System"},
  {"author": "Carl Andrew Castañas", "quote": "Project Monitoring and Evaluation System"}, 
  {"author": "Carl Andrew Castañas", "quote": "BJMP’S Visitor’s Log Monitoring System"},
  {"author": "Carl Andrew Castañas", "quote": "City Business Permit and Monitoring System with Decision Support"},
  {"author": "Carl Andrew Castañas", "quote": "Barangay Records Management System"}, 
  {"author": "Carl Andrew Castañas", "quote": "Housing Information Management with Mapping"},
  {"author": "Carl Andrew Castañas", "quote": "Census Monitoring"},
  {"author": "Carl Andrew Castañas", "quote": "Cedula Mobile: Cedula and Certification Request Mobile Application"},
  {"author": "Carl Andrew Castañas", "quote": "Health Center Information Management System"},
  {"author": "Carl Andrew Castañas", "quote": ""}, 
// What are Data Breaches and How to Prevent Them
// Improving Data Security
// Benefits of Car Transportation Systems
// Ecommerce Pricing Control Systems
// Apps for Monitoring Temperature
// Mobile Event Planners
// Alarm SMS Notification Systems
// Mobile Learning: How it Works
// Project Management Systems
// Machine Learning and Big Data
// University Networks
// ARPANET: How The Internet Started
// Latest Ecommerce Technologies
// Cre Principles of Cybersecurity
// Information Technology in the 21st century
// Java Programming: The Basics
// Software Testing 101
// Introduction to Software Quality Assurance
// Employee Productivity Apps
// Onboarding Systems and HR
// Cloud-Based Software vs. On-Site Solutions
// Benefits of Cloud Solutions
// Hotel PMS Systems
// Smart Technology in the Hotel Industry
// IoT and Data
// New IoT Gadgets
// What is Artificial Intelligence
// What is Machine Learning
// Robotics Systems
// Neural Networks
// How Has Technology Changed Our Lives
// Censorship on the Internet
// Should the Internet be Free?
// Email Marketing Tools
// Web Scrapers
// How Machine Learning Learns
// How is AI Affecting us Today
// New Tech Innovations for the Near Future
// What is Virtual Reality
// How are Clouds Technologies Used for Data Storage
// Mobile Apps That Improve Education
// How The Internet Will Develop
// Software as a Service
// Platform as a Service
// Infrastructure as a Service
// SaaS, PaaS, & IaaS: Main Differences
// How Google Ranks Websites
// 3D Visualization in Architecture
// Essential Skills 3D Artists Need
// 3D Rendering Tools
// DMaaS - Data Mining as a Service
// Augmented Reality
// VR vs. AR: Differences Explained
// Automation Systems in the 21st century
// Data Management for Big Companies
// Essential Data Analyst Skills
// AI and Gamification
// Data Mining for Employee Evaluation
// Data Mining in Healthcare
// Machine Learning for OTAs
// Facebook and Data
// Censorship on Social Media
// How Social Media Filters out Content
// Fingerprint Authentication
// IoT Sensors
// Web Ordering Systems
// How to Prevent Phishing Attacks
// Using Web Scraping for Research
// Web Proxies
// Virtual Private Networks
// Differences Between VPNs and Proxies
// How Proxies Enhances Web Scraping
// Home Automation Systems
// Smart Homes
// Warehouse Management Systems
// How Voice Recognition Systems Work
// QR Code Check-ins
// Smart Systems in Cars
// Should Cars Have More Computers or Less?
// Solar Grass Cutters With Automation
// Voice Controlled Tools
// CRM Software
// Online Training Software Benefits
// ChatBots: Introduction
// Complex Chat Bots
// Using ML for Cybersecurity
// Machine LEarning in Ecommerce
// Elearning and Gamification
// How Games Have Improved Digital Technologies
// How Far Have Video Games Gone?
// Home Voice Assistants
// How Technology Helps Disabled People
// Apps for Child Monitoring
// Nutrition Tools
// Semantic Web & Big Data
// Autonomous Systems Today
// Is The Internet Helping us?
// Blockchain and Crypto
// How Bitcoin Works
// IoT and 5G
// Edge Computing Explained
// //
]
