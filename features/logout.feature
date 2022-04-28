Feature: Logout  
  Scenario: Logout from the home page

    Given I am on the login page
    When I login with "standard_user" and "secret_sauce"
    Then I am on "PRODUCT" page
    Then I click on the menu button and click on logout button