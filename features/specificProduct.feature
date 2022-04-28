Feature: Specific product

  Scenario: Specific product Sauce Labs Onesie

    Given I am on the login page
    When I login with "standard_user" and "secret_sauce"
    Then I am on "PRODUCT" page
    Then I add a specific product
    Then I verify the specific product on a cart