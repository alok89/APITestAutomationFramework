package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions( features = {"src/test/java/featurefiles"}, 
				  glue = {"stepdefinitions"}, 
				  monochrome = true,
				  dryRun = false, 
				  plugin = "html:reports/restapitestsexecution-reports.html"
				  //tags = {"@TheCat", "@NYTimes", "@RestfulBooker"}
				  )
public class TestRunner {

}
