$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/t.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 19,
      "value": "#@tag"
    },
    {
      "line": 20,
      "value": "#Feature: Title of your feature"
    },
    {
      "line": 21,
      "value": "#I want to use this template for my feature file"
    },
    {
      "line": 22,
      "value": "#"
    },
    {
      "line": 23,
      "value": "#@tag1"
    },
    {
      "line": 24,
      "value": "#Scenario: Title of your scenario"
    },
    {
      "line": 25,
      "value": "#Given I want to write a step with precondition"
    },
    {
      "line": 26,
      "value": "#And some other precondition"
    },
    {
      "line": 27,
      "value": "#When I complete action"
    },
    {
      "line": 28,
      "value": "#And some other action"
    },
    {
      "line": 29,
      "value": "#And yet another action"
    },
    {
      "line": 30,
      "value": "#Then I validate the outcomes"
    },
    {
      "line": 31,
      "value": "#And check more outcomes"
    },
    {
      "line": 32,
      "value": "#"
    },
    {
      "line": 33,
      "value": "#@tag2"
    },
    {
      "line": 34,
      "value": "#Scenario Outline: Title of your scenario outline"
    },
    {
      "line": 35,
      "value": "#Given I want to write a step with \u003cname\u003e"
    },
    {
      "line": 36,
      "value": "#When I check for the \u003cvalue\u003e in step"
    },
    {
      "line": 37,
      "value": "#Then I verify the \u003cstatus\u003e in step"
    },
    {
      "line": 38,
      "value": "#"
    },
    {
      "line": 39,
      "value": "#Examples:"
    },
    {
      "line": 40,
      "value": "#| name  | value | status  |"
    },
    {
      "line": 41,
      "value": "#| name1 |     5 | success |"
    },
    {
      "line": 42,
      "value": "#| name2 |     7 | Fail    |"
    }
  ],
  "line": 45,
  "name": "taskmanager website",
  "description": "",
  "id": "taskmanager-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 48,
  "name": "Login to the TaskManager with valid data and invalid data",
  "description": "",
  "id": "taskmanager-website;login-to-the-taskmanager-with-valid-data-and-invalid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@tc_01_login"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "Open the  taskmanager website  Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "login page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "enter the \"\u003cusername1\u003e\" and \"\u003cpassword1\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "click on Login button",
  "keyword": "And "
});
formatter.examples({
  "line": 55,
  "name": "",
  "description": "",
  "id": "taskmanager-website;login-to-the-taskmanager-with-valid-data-and-invalid-data;",
  "rows": [
    {
      "cells": [
        "username1",
        "password1"
      ],
      "line": 56,
      "id": "taskmanager-website;login-to-the-taskmanager-with-valid-data-and-invalid-data;;1"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 57,
      "id": "taskmanager-website;login-to-the-taskmanager-with-valid-data-and-invalid-data;;2"
    },
    {
      "cells": [
        "admin1",
        "admiin2"
      ],
      "line": 58,
      "id": "taskmanager-website;login-to-the-taskmanager-with-valid-data-and-invalid-data;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 57,
  "name": "Login to the TaskManager with valid data and invalid data",
  "description": "",
  "id": "taskmanager-website;login-to-the-taskmanager-with-valid-data-and-invalid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@tc_01_login"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "Open the  taskmanager website  Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "login page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "enter the \"admin\" and \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "loginstep.launch_the_browser()"
});
formatter.result({
  "duration": 16435249600,
  "status": "passed"
});
formatter.match({
  "location": "loginstep.login_page_is_opened()"
});
formatter.result({
  "duration": 749923600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 11
    },
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "loginstep.enter_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 263671200,
  "status": "passed"
});
formatter.match({
  "location": "loginstep.click_on_Login_button()"
});
formatter.result({
  "duration": 2758956500,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Login to the TaskManager with valid data and invalid data",
  "description": "",
  "id": "taskmanager-website;login-to-the-taskmanager-with-valid-data-and-invalid-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@tc_01_login"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "Open the  taskmanager website  Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "login page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "enter the \"admin1\" and \"admiin2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "loginstep.launch_the_browser()"
});
formatter.result({
  "duration": 13658333100,
  "status": "passed"
});
formatter.match({
  "location": "loginstep.login_page_is_opened()"
});
formatter.result({
  "duration": 691772900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin1",
      "offset": 11
    },
    {
      "val": "admiin2",
      "offset": 24
    }
  ],
  "location": "loginstep.enter_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 419117200,
  "status": "passed"
});
formatter.match({
  "location": "loginstep.click_on_Login_button()"
});
formatter.result({
  "duration": 1871083600,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "addTask to the Application",
  "description": "",
  "id": "taskmanager-website;addtask-to-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@tc_02_addtaskonly"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "launch the  website in the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "click on addTask",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "enter all the details",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "click on Add button",
  "keyword": "And "
});
formatter.match({
  "location": "addtask_step.launch_the_website_in_the_Browser()"
});
formatter.result({
  "duration": 12295053400,
  "status": "passed"
});
formatter.match({
  "location": "addtask_step.click_on_the_addTask()"
});
formatter.result({
  "duration": 2492297900,
  "status": "passed"
});
formatter.match({
  "location": "addtask_step.enter_all_the_details()"
});
formatter.result({
  "duration": 10315808800,
  "status": "passed"
});
formatter.match({
  "location": "addtask_step.click_on_the_Add_button()"
});
formatter.result({
  "duration": 2062186300,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "searching the entered Task",
  "description": "",
  "id": "taskmanager-website;searching-the-entered-task",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 67,
      "name": "@tc_03_searchtask"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "open the prequisite browser",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "Click On Task List",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "enter the Task details",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "searchtaskstep.open_the_prequisite_browser()"
});
formatter.result({
  "duration": 14249712500,
  "status": "passed"
});
formatter.match({
  "location": "searchtaskstep.click_On_Task_List()"
});
formatter.result({
  "duration": 4642070700,
  "status": "passed"
});
formatter.match({
  "location": "searchtaskstep.enter_the_Task_details()"
});
formatter.result({
  "duration": 644772600,
  "status": "passed"
});
formatter.match({
  "location": "searchtaskstep.click_on_the_search_button()"
});
formatter.result({
  "duration": 2238016400,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Add new employee in TaskManager website",
  "description": "",
  "id": "taskmanager-website;add-new-employee-in-taskmanager-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 74,
      "name": "@tc_04_Addemployee"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "Launch the Website in the Browser1",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "I click on administration",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "I click on employees",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "I click on add new employee",
  "keyword": "Then "
});
formatter.match({
  "location": "addemployee_stepdef.launch_the_Website_in_the_Browser()"
});
formatter.result({
  "duration": 20032969700,
  "status": "passed"
});
formatter.match({
  "location": "addemployee_stepdef.i_click_on_administration()"
});
formatter.result({
  "duration": 1947967900,
  "status": "passed"
});
formatter.match({
  "location": "addemployee_stepdef.i_click_on_employees()"
});
formatter.result({
  "duration": 746461300,
  "status": "passed"
});
formatter.match({
  "location": "addemployee_stepdef.i_click_on_add_new_employee()"
});
formatter.result({
  "duration": 2702352100,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "Add employee details in TaskManager website",
  "description": "",
  "id": "taskmanager-website;add-employee-details-in-taskmanager-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 81,
      "name": "@tc_05_employeedetails"
    }
  ]
});
formatter.step({
  "line": 83,
  "name": "Launch the Website in the Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "I enter all the details of employee",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "I click on Add button",
  "keyword": "And "
});
formatter.match({
  "location": "employeedetails_stepdef.launch_the_Website_in_the_Browser()"
});
formatter.result({
  "duration": 24242662400,
  "status": "passed"
});
formatter.match({
  "location": "employeedetails_stepdef.I_enter_all_the_details_of_employee()"
});
formatter.result({
  "duration": 9536008500,
  "status": "passed"
});
formatter.match({
  "location": "employeedetails_stepdef.I_click_on_Add_button()"
});
formatter.result({
  "duration": 1461265800,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "Add Project to the TaskManager Website",
  "description": "",
  "id": "taskmanager-website;add-project-to-the-taskmanager-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 89,
      "name": "@tc_06_addproject"
    }
  ]
});
formatter.step({
  "line": 92,
  "name": "Open the Website in the Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "click on the administration",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "Click on the Projects",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "Click on the Add New Project",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "Enter the Project Name",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "Click on the Add Button",
  "keyword": "And "
});
formatter.match({
  "location": "Addprojectstep2.open_the_Website_in_the_Browser()"
});
formatter.result({
  "duration": 15799812100,
  "status": "passed"
});
formatter.match({
  "location": "Addprojectstep2.click_on_the_administration()"
});
formatter.result({
  "duration": 2355513400,
  "status": "passed"
});
formatter.match({
  "location": "Addprojectstep2.click_on_the_Projects()"
});
formatter.result({
  "duration": 3733183200,
  "status": "passed"
});
formatter.match({
  "location": "Addprojectstep2.click_on_the_Add_New_Project()"
});
formatter.result({
  "duration": 1757903800,
  "status": "passed"
});
formatter.match({
  "location": "Addprojectstep2.enter_the_Project_Name()"
});
formatter.result({
  "duration": 236184700,
  "status": "passed"
});
formatter.match({
  "location": "Addprojectstep2.click_on_the_Add_Button()"
});
formatter.result({
  "duration": 2668960400,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "Search the  New Project",
  "description": "",
  "id": "taskmanager-website;search-the--new-project",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 99,
      "name": "@tc_07_searchnewproject"
    }
  ]
});
formatter.step({
  "line": 102,
  "name": "Open the website  Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "Click On Task List1",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "Select the Newly Entered Project",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "Click on the Search button",
  "keyword": "And "
});
formatter.match({
  "location": "searchprojectstep.open_the_website_Browser()"
});
formatter.result({
  "duration": 25664188800,
  "status": "passed"
});
formatter.match({
  "location": "searchprojectstep.click_On_Task_List()"
});
formatter.result({
  "duration": 11038081600,
  "status": "passed"
});
formatter.match({
  "location": "searchprojectstep.select_the_Newly_Entered_Project()"
});
formatter.result({
  "duration": 323185000,
  "status": "passed"
});
formatter.match({
  "location": "searchprojectstep.click_on_the_Search_button()"
});
formatter.result({
  "duration": 4349552800,
  "status": "passed"
});
formatter.scenario({
  "line": 108,
  "name": "Add Task to the  Newly entered Project",
  "description": "",
  "id": "taskmanager-website;add-task-to-the--newly-entered-project",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 107,
      "name": "@tc_8_addtasktonewproject"
    }
  ]
});
formatter.step({
  "line": 110,
  "name": "Launch the Website in the Browser2",
  "keyword": "Given "
});
formatter.step({
  "line": 111,
  "name": "Click on the AddNewTask",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "Enter all the details",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "Click on the Add button1",
  "keyword": "And "
});
formatter.match({
  "location": "add_newtask_step.launch_the_Website_in_the_Browser()"
});
formatter.result({
  "duration": 15616613700,
  "status": "passed"
});
formatter.match({
  "location": "add_newtask_step.click_on_the_AddNewTask()"
});
formatter.result({
  "duration": 3048522700,
  "status": "passed"
});
formatter.match({
  "location": "add_newtask_step.enter_all_the_details()"
});
formatter.result({
  "duration": 10862384900,
  "status": "passed"
});
formatter.match({
  "location": "add_newtask_step.click_on_the_Add_button()"
});
formatter.result({
  "duration": 4343292400,
  "status": "passed"
});
formatter.scenario({
  "line": 117,
  "name": "logout the page",
  "description": "",
  "id": "taskmanager-website;logout-the-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 116,
      "name": "@tc_9_logout"
    }
  ]
});
formatter.step({
  "line": 119,
  "name": "Launch the Website Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 120,
  "name": "click administration",
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "click onlogout",
  "keyword": "Given "
});
formatter.match({
  "location": "logoutstep.Launch_the_Website_Browser()"
});
formatter.result({
  "duration": 21159476400,
  "status": "passed"
});
formatter.match({
  "location": "logoutstep.click_administration()"
});
formatter.result({
  "duration": 1091862100,
  "status": "passed"
});
formatter.match({
  "location": "logoutstep.click_onlogout()"
});
formatter.result({
  "duration": 3182044500,
  "status": "passed"
});
});