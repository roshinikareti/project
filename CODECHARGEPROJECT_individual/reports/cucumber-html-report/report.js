$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("t.feature");
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
  "duration": 24809919400,
  "status": "passed"
});
formatter.match({
  "location": "loginstep.login_page_is_opened()"
});
formatter.result({
  "duration": 507028900,
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
  "duration": 208597500,
  "status": "passed"
});
formatter.match({
  "location": "loginstep.click_on_Login_button()"
});
formatter.result({
  "duration": 121669300900,
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
  "duration": 22857714600,
  "status": "passed"
});
formatter.match({
  "location": "loginstep.login_page_is_opened()"
});
formatter.result({
  "duration": 513711000,
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
  "duration": 211040300,
  "status": "passed"
});
formatter.match({
  "location": "loginstep.click_on_Login_button()"
});
formatter.result({
  "duration": 3131504000,
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
  "duration": 18133441100,
  "status": "passed"
});
formatter.match({
  "location": "addtask_step.click_on_the_addTask()"
});
formatter.result({
  "duration": 4602434700,
  "status": "passed"
});
formatter.match({
  "location": "addtask_step.enter_all_the_details()"
});
formatter.result({
  "duration": 9843632900,
  "status": "passed"
});
formatter.match({
  "location": "addtask_step.click_on_the_Add_button()"
});
formatter.result({
  "duration": 5439810800,
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
  "duration": 17543248400,
  "status": "passed"
});
formatter.match({
  "location": "searchtaskstep.click_On_Task_List()"
});
formatter.result({
  "duration": 5808961700,
  "status": "passed"
});
formatter.match({
  "location": "searchtaskstep.enter_the_Task_details()"
});
formatter.result({
  "duration": 327504600,
  "status": "passed"
});
formatter.match({
  "location": "searchtaskstep.click_on_the_search_button()"
});
formatter.result({
  "duration": 3156559400,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "logout the page",
  "description": "",
  "id": "taskmanager-website;logout-the-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 74,
      "name": "@tc_4_logout"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "Launch the Website Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "click administration",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "click onlogout",
  "keyword": "Given "
});
formatter.match({
  "location": "logoutstep.Launch_the_Website_Browser()"
});
formatter.result({
  "duration": 27883608300,
  "status": "passed"
});
formatter.match({
  "location": "logoutstep.click_administration()"
});
formatter.result({
  "duration": 1863703000,
  "status": "passed"
});
formatter.match({
  "location": "logoutstep.click_onlogout()"
});
formatter.result({
  "duration": 3825170300,
  "status": "passed"
});
});