Feature: E2E Add to Cart Validation
    Regression Testing

    @Regression
    Scenario: Ecommerce product delivery
    Given I open ecommerce page
    When I add items to cart
    And Validates the total prices
    Then Select the country, checkout and verify thankyou

    @Smoke
    Scenario: Filling the form for shop
    Given I open ecommerce page
    When I fill the form details
    |name | gender |
    |Bobz | Male   |
    Then Validates the form behavior
    And Selects the shop page