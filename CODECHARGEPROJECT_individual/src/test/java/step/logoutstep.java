package step;

import java.io.IOException;

import com.baseclass.library;
import com.pages.loginpage;
import com.pages.logout;


import cucumber.api.java.en.Given;
import seleniumutility.seleniumutill;

public class logoutstep extends library {
	seleniumutill  util;
	logout click; 
	loginpage login;
	
	@Given("^Launch the Website Browser$")
	public void Launch_the_Website_Browser() throws IOException  {
	    launchApp();
	    login = new loginpage(driver);
	    login.code_enterusername("admin");
	    login.code_enterpassword("admin");
	    login.code_clickloginbtn();
	}
	@Given("^click administration$")
	public void click_administration() { 
		 click = new logout(driver);
		 click.click_administration();
	}
		 
	@Given("^click onlogout$")
		 public void click_onlogout() {
			 click = new logout(driver);
			 click.click_logout();
			 driver.quit();
		 }
	
	}

	   


