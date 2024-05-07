@sauce 
Feature: Sauce demo login test

    Background: 
        Given user is on sauce-demo page
        When user login using username "standard_user" and password "secret_sauce"

    @login @v1 
    Scenario: User login successfully
        Then user should redirect to homepage
        And user click add cart button
        And user click cart button
        
    @login @v2 
    Scenario: User login successfully - v2
        Then user should redirect to homepage
        And user click add cart button
        And user click cart button
        