describe('Bankrate Auto Loan Calculator', function(){
  it('Calculating monthly estimates - Used Vehicle ', function(){

    cy.visit('https://www.bankrate.com/calculators/auto/auto-loan-calculator.aspx')

    var counter_principal = 100000
    var counter_interest_rate = 50
    var principal, interest_rate

   // First test cycles for principal amount

    for(principal = 1000; principal < counter_principal; principal++){
      principal = principal * 2

        cy.get('[name=amount]')
          .type(principal)
          .click('topRight')
          .clear()

    }

    //First test cycle for interest rate
    for(interest_rate = 1; interest_rate < counter_interest_rate; interest_rate++){

      interest_rate = interest_rate + 1

      cy.get('[name=interest-rate]')
        .type(interest_rate)
        .click('topRight')
        .clear()

    }

    //Menu selection for length of time - First Selection
    cy.contains('60 months')
      .click()

    cy.get('.dropdown__list-item')
      .contains('48 months')
      .click()

   //Second test cycle for principal amount
    for(principal = 1000; principal < counter_principal; principal++){
      principal = principal * 5

      cy.get('[name=amount]')
        .type(principal)
        .click('topRight')
        .clear()

    }

    //Second test cycle for interest rate
    for(interest_rate = 1; interest_rate < counter_interest_rate; interest_rate++){
      interest_rate = interest_rate + 1

      cy.get('[name=interest-rate]')
        .type(interest_rate)
        .click('topRight')
        .clear()

    }

    //Menu selection for length of time - Second Selection
     cy.contains('48 months')
       .click()

     cy.get('.dropdown__list-item')
       .contains('36 months')
       .click()

    //Third test cycle for principal amount
    for (principal = 1000; principal < counter_principal; principal++) {
      principal = principal * 5

      cy.get('[name=amount]')
        .type(principal)
        .click('topRight')
        .clear()

    }

    //Third test cycle for interest rate
    for (interest_rate = 1; interest_rate < counter_interest_rate; interest_rate++) {
      interest_rate = interest_rate + 1

      cy.get('[name=interest-rate]')
        .type(interest_rate)
        .click('topRight')
        .clear()

    }

     //Menu selection for length of time - Third selection

     cy.contains('36 months')
       .click()

     cy.get('.dropdown__list-item')
       .contains('60 months')
       .click()

    //Fourth test cycle for principal amount
    for (principal = 1000; principal < counter_principal; principal++) {
      principal = principal * 5

      cy.get('[name=amount]')
        .type(principal)
        .click('topRight')
        .clear()

    }

    //Fourth test cycle for interest
    for (interest_rate = 1; interest_rate < counter_interest_rate; interest_rate++) {
      interest_rate = interest_rate + 1

      cy.get('[name=interest-rate]')
        .type(interest_rate)
        .click('topRight')
        .clear()
    }

  })

  it('Calculating monthly estimates - New vehicle ', function(){

    cy.contains('Used')
      .click()

    cy.get('.dropdown__list-item')
      .contains('New')
      .click()

      var counter_principal = 100000
      var counter_interest_rate = 100
      var principal, interest_rate

     // First test cycles for principal amount

      for(principal = 1000; principal < counter_principal; principal++){
        principal = principal * 2

          cy.get('[name=amount]')
            .type(principal)
            .click('topRight')
            .clear()

      }

      //First test cycle for interest rate
      for(interest_rate = 1; interest_rate < counter_interest_rate; interest_rate++){

        interest_rate = interest_rate + 1

        cy.get('[name=interest-rate]')
          .type(interest_rate)
          .click('topRight')
          .clear()

      }

      //Menu selection for length of time - First Selection
      cy.contains('60 months')
        .click()

      cy.get('.dropdown__list-item')
        .contains('48 months')
        .click()

     //Second test cycle for principal amount
      for(principal = 1000; principal < counter_principal; principal++){
        principal = principal * 5

        cy.get('[name=amount]')
          .type(principal)
          .click('topRight')
          .clear()

      }

      //Second test cycle for interest rate
      for(interest_rate = 1; interest_rate < counter_interest_rate; interest_rate++){
        interest_rate = interest_rate + 1

        cy.get('[name=interest-rate]')
          .type(interest_rate)
          .click('topRight')
          .clear()

      }

      //Menu selection for length of time - Second Selection
       cy.contains('48 months')
         .click()

       cy.get('.dropdown__list-item')
         .contains('36 months')
         .click()

      //Third test cycle for principal amount
      for (principal = 1000; principal < counter_principal; principal++) {
        principal = principal * 5

        cy.get('[name=amount]')
          .type(principal)
          .click('topRight')
          .clear()

      }

      //Third test cycle for interest rate
      for (interest_rate = 1; interest_rate < counter_interest_rate; interest_rate++) {
        interest_rate = interest_rate + 1

        cy.get('[name=interest-rate]')
          .type(interest_rate)
          .click('topRight')
          .clear()

      }

       //Menu selection for length of time - Third selection

       cy.contains('36 months')
         .click()

       cy.get('.dropdown__list-item')
         .contains('60 months')
         .click()

      //Fourth test cycle for principal amount
      for (principal = 1000; principal < counter_principal; principal++) {
        principal = principal * 5

        cy.get('[name=amount]')
          .type(principal)
          .click('topRight')
          .clear()

      }

      //Fourth test cycle for interest
      for (interest_rate = 1; interest_rate < counter_interest_rate; interest_rate++) {
        interest_rate = interest_rate + 1

        cy.get('[name=interest-rate]')
          .type(interest_rate)
          .click('topRight')
          .clear()
      }

  })

})
