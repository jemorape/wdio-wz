Feature: Shopping
  Scenario: Add multiple items to the shopping cart

    Given I am on the login page
    When I login with "standard_user" and "secret_sauce"
    Then I am on "PRODUCT" page
    Then I added multiple products
    Then I verify the shopping cart