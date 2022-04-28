Feature: Login test cases

  Scenario: Login with a valid user

    Given I am on the login page
    When I login with "standard_user" and "secret_sauce"
    Then I am on "PRODUCT" page

  Scenario: Login with an invalid user

    Given I am on the login page
    When I login with "fail_user" and "test"
    Then I should see a flash message saying "Epic sadface: Username and password do not match any user in this service"
