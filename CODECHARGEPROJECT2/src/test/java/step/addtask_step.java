package step;

import java.io.IOException;

import com.baseclass.library;
import com.pages.addtask;
import com.pages.loginpage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import seleniumutility.seleniumutill;

public class addtask_step extends library {
	seleniumutill  util;
	addtask  step;
	loginpage login;
	
	
	
	@Given("^launch the  website in the browser$")
	public void launch_the_website_in_the_Browser() throws IOException  {
	    launchApp();

		
	}
	
	
	@When("^click on addTask$")
	public void click_on_the_addTask() {
		login = new loginpage(driver);
	    login.code_enterusername("admin");
	    login.code_enterpassword("admin");
	    login.code_clickloginbtn();		
		    
	   
		}
	@Then("^enter all the details$")
	public void enter_all_the_details()  {
		 step = new addtask (driver);
		 step.add_task();
		 step = new addtask (driver);
		 step.add_description();
		 step = new addtask(driver);
		 step.add_project();
		 step = new addtask (driver);
		 step.add_priority();
		 step = new addtask (driver);
		 step.add_status();
		 step = new addtask (driver);
		 step.add_type();
		 step = new addtask (driver);
		 step.add_assingedto();
		 step = new addtask (driver);
		step.StartDate();
		 step = new addtask (driver);
		 step.EndDate();
	}
	@Then("^click on Add button$")
	public void click_on_the_Add_button() {
		step = new addtask (driver);
		 step.click_add();
		 util = new seleniumutill(driver);
		 util.takeSnapShot("C:\\Users\\user\\eclipse-workspace\\CODECHARGEPROJECT2\\src\\test\\resources\\screenshots\\Screenshot (16).pngs");
		 
		 
	}
	
	
}
	
