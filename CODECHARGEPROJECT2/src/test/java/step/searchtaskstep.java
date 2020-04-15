package step;

import java.io.IOException;

import com.baseclass.library;
import com.pages.loginpage;
import com.pages.searachtask;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import seleniumutility.seleniumutill;

public class searchtaskstep extends library {
	seleniumutill   util;
	searachtask search;
	loginpage login;
	
	@Given("^open the prequisite browser$")	
	public void open_the_prequisite_browser() throws IOException  {
		
	    launchApp();
		}
	
	@When("^Click On Task List$")
	public void click_On_Task_List() {	
		login = new loginpage(driver);
	    login.code_enterusername("admin");
	    login.code_enterpassword("admin");
	    login.code_clickloginbtn();    
	    search = new  searachtask(driver);
	    search.click_tasklist();
	}
	@Then("^enter the Task details$")
	public void enter_the_Task_details()  {
		search = new  searachtask(driver);
		search.select_assingento();
		search = new  searachtask(driver);
		search.select_project();
		search = new  searachtask(driver);
		search.select_priority();
		search = new  searachtask(driver);
		search.select_status();
		search = new  searachtask(driver);
		search.select_type();
	}
	
	@Then("^click on search button$")
			public void click_on_the_search_button() {
				search = new  searachtask(driver);
				search.clic_on_search();
				util = new seleniumutill(driver);
				 util.takeSnapShot("C:\\Users\\user\\eclipse-workspace\\EXCERCISE\\src\\test\\resources\\screenshots\\Screenshot (14).png");
				
			}

}
