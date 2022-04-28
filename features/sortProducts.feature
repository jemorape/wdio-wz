Feature: Sort products by Price  
  Scenario: Sort products by Price (low to high)

    Given I am on the login page
    When I login with "standard_user" and "secret_sauce"
    Then I am on "PRODUCT" page
    Then I click on the filter menu and sort to low to high


Scenario: Sort products by Price (high to low)

    Given I am on the login page
    When I login with "standard_user" and "secret_sauce"
    Then I am on "PRODUCT" page
    Then I click on the filter menu and sort to high to low