package com.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//Cucumber class
@RunWith(Cucumber.class)
@CucumberOptions
(
	
	 features = "src/test/resources/feature",
			 glue = {"step"},	       
			 plugin = {"pretty", "html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport",
		        		"com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"}
		       //tags = {"@tc_01_login", "@tc_02_addtask","@tc_03_search","@tc_04_screenshot","tc_05_logout"}
		       
		      //  monochrome = true
			 )
public class testrunner3 {

}
