package step;

import java.io.IOException;

import com.baseclass.library;
import com.pages.loginpage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import seleniumutility.seleniumutill;


public class loginstep extends library {
	loginpage login;
	seleniumutill util;
	
	@Given("^Open the  taskmanager website  Browser$")
     public void launch_the_browser() throws IOException {
    	
    	launchApp();
	   	}
	@When("^login page is opened$")
	public void login_page_is_opened()   {
	    
		util = new seleniumutill(driver);
		util.takeSnapShot("C:\\Users\\user\\eclipse-workspace\\EXCERCISE\\src\\test\\resources\\screenshots\\Screenshot (10).png");
		
		
	}
	
	
	@Then("^enter the \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enter_Username_and_Password(String username1, String password1) {
		login = new  loginpage(driver);
		login.code_enterusername(username1);
		login.code_enterpassword(password1);
		
	}
	@Then("^click on Login button$")
	public void click_on_Login_button()  {
		login = new  loginpage(driver);
		   login.code_clickloginbtn();
		   driver.quit();
		}
	
	

}
