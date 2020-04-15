package step;

import java.io.IOException;

import com.baseclass.library;
import com.pages.add_newtask;
import com.pages.loginpage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import seleniumutility.seleniumutill;

public class add_newtask_step extends library{
	seleniumutill  util;
	add_newtask newtask; 
	loginpage login;
	 
	 @Given("^Launch the Website in the Browser2$")
		public void launch_the_Website_in_the_Browser() throws IOException  {
		    launchApp();

			
		}
	
	@When("^Click on the AddNewTask$")
		public void click_on_the_AddNewTask() {
		login = new loginpage(driver);
	    login.code_enterusername("admin");
	    login.code_enterpassword("admin");
	    login.code_clickloginbtn();		
		    
	   
		}
	 @Then("^Enter all the details$")
		public void enter_all_the_details()  {
		 newtask = new add_newtask (driver);
		 newtask.add_task();
		 newtask = new add_newtask (driver);
		 newtask.add_description();
		 newtask = new add_newtask (driver);
		 newtask.add_project();
		 newtask = new add_newtask (driver);
		 newtask.add_priority();
		 newtask = new add_newtask (driver);
		 newtask.add_status();
		 newtask = new add_newtask (driver);
		 newtask.add_type();
		 newtask = new add_newtask (driver);
		 newtask.add_assingedto();
		 newtask = new add_newtask (driver);
		newtask.StartDate();
		 newtask = new add_newtask (driver);
		 newtask.EndDate();
	 }
@And("^Click on the Add button1$")
public void click_on_the_Add_button() {
	newtask = new add_newtask (driver);
	 newtask.click_add();
	 driver.quit();
	 
}


}



