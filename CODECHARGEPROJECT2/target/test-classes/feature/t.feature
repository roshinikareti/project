#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
#@tag
#Feature: Title of your feature
  #I want to use this template for my feature file
#
  #@tag1
  #Scenario: Title of your scenario
    #Given I want to write a step with precondition
    #And some other precondition
    #When I complete action
    #And some other action
    #And yet another action
    #Then I validate the outcomes
    #And check more outcomes
#
  #@tag2
  #Scenario Outline: Title of your scenario outline
    #Given I want to write a step with <name>
    #When I check for the <value> in step
    #Then I verify the <status> in step
#
    #Examples: 
      #| name  | value | status  |
      #| name1 |     5 | success |
      #| name2 |     7 | Fail    |
      
      
      Feature: taskmanager website

@tc_01_login
Scenario Outline: Login to the TaskManager with valid data and invalid data

Given Open the  taskmanager website  Browser
When login page is opened
Then  enter the "<username1>" and "<password1>"
And  click on Login button

Examples:
|username1    |password1 |
|admin		 |admin |
|admin1    |admiin2|

@tc_02_addtaskonly
Scenario: addTask to the Application
Given launch the  website in the browser
When click on addTask
Then enter all the details
And click on Add button

@tc_03_searchtask
Scenario: searching the entered Task
Given open the prequisite browser
When  Click On Task List
Then enter the Task details
And click on search button

@tc_04_Addemployee
Scenario: Add new employee in TaskManager website
Given  Launch the Website in the Browser1
When I click on administration
When I click on employees
Then I click on add new employee

@tc_05_employeedetails
Scenario: Add employee details in TaskManager website
Given Launch the Website in the Browser
Then I enter all the details of employee
And I click on Add button



@tc_06_addproject
Scenario: Add Project to the TaskManager Website

Given Open the Website in the Browser
When click on the administration
When Click on the Projects
When Click on the Add New Project
Then Enter the Project Name 
And Click on the Add Button

@tc_07_searchnewproject
Scenario: Search the  New Project

Given Open the website  Browser
When  Click On Task List1
Then  Select the Newly Entered Project
And Click on the Search button

@tc_8_addtasktonewproject
Scenario: Add Task to the  Newly entered Project

Given Launch the Website in the Browser2
When  Click on the AddNewTask
Then Enter all the details
And Click on the Add button1


@tc_9_logout
Scenario: logout the page

Given Launch the Website Browser
Given click administration
Given click onlogout

      


      
