package com.pages;

import java.util.Set;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;

public class addtask {
	WebDriver driver ;
	
	By add_task = By.xpath("/html/body/table[2]/tbody/tr/td/form/table[2]/tbody/tr[1]/td/input");
	By add_description = By.xpath("/html/body/table[2]/tbody/tr/td/form/table[2]/tbody/tr[2]/td/textarea");
	By add_project = By.xpath("/html/body/table[2]/tbody/tr/td/form/table[2]/tbody/tr[3]/td/select/option[4]");
	By  add_priority = By.xpath("/html/body/table[2]/tbody/tr/td/form/table[2]/tbody/tr[4]/td/select/option[2]");
	By add_status= By.xpath("/html/body/table[2]/tbody/tr/td/form/table[2]/tbody/tr[5]/td/select/option[5]");
	By add_type= By.xpath("/html/body/table[2]/tbody/tr/td/form/table[2]/tbody/tr[6]/td/select/option[3]");
	By add_assingedto= By.xpath("/html/body/table[2]/tbody/tr/td/form/table[2]/tbody/tr[7]/td/select/option[2]");
	By click_add=By.xpath("/html/body/table[2]/tbody/tr/td/form/table[2]/tbody/tr[10]/td/input[1]");
	Logger LOG = Logger.getLogger(addtask.class.getName());
	
	
	public addtask(WebDriver driver) {
		this.driver=driver;
	}
	
	//click the add_task
			public void add_task() {
				driver.findElement(add_task).sendKeys("cts");
				LOG.info(" task is added");
			}
	
			//click the add_description
			public void add_description() {
				driver.findElement(add_description).sendKeys("selenium training");
				LOG.info("description is added");
			}
			

			//click the add_project
			public void add_project() {
				driver.findElement(add_project).click();
				LOG.info(" project is added");
			}

			//click the add_priority
			public void add_priority() {
				driver.findElement(add_priority).click();
				LOG.info(" priorty is added");
			}

			//click the add_status
			public void add_status() {
				driver.findElement(add_status).click();
				LOG.info(" status is added");
			}

			//click the add_type
			public void add_type() {
				driver.findElement(add_type).click();
				LOG.info(" type is added");
			}

			//click the add_assingedto
			public void add_assingedto() {
				driver.findElement(add_assingedto).click();
				LOG.info(" product is added");
			}
			public void StartDate() 
		    {
			        Actions action=new Actions(driver);
			        action.moveToElement(driver.findElement(By.xpath("/html/body/table[2]/tbody/tr/td/form/table[2]/tbody/tr[8]/td/a/img"))).click().build().perform();
			        String parent=driver.getWindowHandle();
			        System.out.println(parent);
			        Set<String>allWindows=driver.getWindowHandles();
		      for(String Window:allWindows)
			   {
				      System.out.println(Window);
				      if(!parent.equalsIgnoreCase(Window))
				  {
					  driver.switchTo().window(Window);
				  }
				
			   }
			       Actions actions=new Actions(driver);
			       actions.moveToElement(driver.findElement(By.xpath("/html/body/center/table/tbody/tr/td/table/tbody/tr[4]/td[5]/a"))).click().build().perform();
			       driver.switchTo().window(parent);
		    }
	// To select the End date	  
		public void EndDate()
		   {
			      Actions action=new Actions(driver);
			      action.moveToElement(driver.findElement(By.xpath("/html/body/table[2]/tbody/tr/td/form/table[2]/tbody/tr[9]/td/a/img"))).click().build().perform();
			      String parent=driver.getWindowHandle();
		          System.out.println(parent);
			      Set<String>allWindows=driver.getWindowHandles();
			      for(String Window:allWindows)
			   {
				     System.out.println(Window);
				     if(!parent.equalsIgnoreCase(Window))
				   {
					   driver.switchTo().window(Window);
				   }
			   }
			     Actions actions=new Actions(driver);
			     actions.moveToElement(driver.findElement(By.xpath("/html/body/center/table/tbody/tr/td/table/tbody/tr[5]/td[5]/a"))).click().build().perform();
			     driver.switchTo().window(parent);
		   }
			//click the add
			public void click_add() {
				driver.findElement(click_add).click();
				LOG.info("task  is added");
			}


	}




