describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display of the running total', () => {
    const total = cy.get('#running-total');
    total.should('contain', '0');
  })

  it('should update the display with the result of the operation', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '4')
    cy.get('#operator-equals').click();
    const total = cy.get('#running-total');
    total.should('contain', '8');
  });

  it('should multiple operations be chained together', () => {
    cy.get('#number4').click();
    cy.get('.display').should('contain', '4')
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
    cy.get('#operator-equals').click();
    const total = cy.get('#running-total');
    total.should('contain', '4');
  });

  it('should display the output as expected for positive num', () => {
    cy.get('#number1').click();
    cy.get('.display').should('contain', '1')
    cy.get('#operator-equals').click();
    const total = cy.get('#running-total');
    total.should('contain', '1');
  });

  it('should display the output as expected for negative num', () => {
    cy.get('#number1').click();
    cy.get('.display').should('contain', '1')
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
    cy.get('#operator-equals').click();
    const total = cy.get('#running-total');
    total.should('contain', '-1');
  });

  it('should display the output as expected for decimal', () => {
    cy.get('#number1').click();
    cy.get('.display').should('contain', '1')
    cy.get('#decimal').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
    cy.get('#operator-equals').click();
    const total = cy.get('#running-total');
    total.should('contain', '1.2');
  });

  it('should display the output as expected for very large num', () => {
    cy.get('#number9').click();
    cy.get('.display').should('contain', '9')
    cy.get('#number9').click();
    cy.get('.display').should('contain', '9')
    cy.get('#number9').click();
    cy.get('.display').should('contain', '9')
    cy.get('#number9').click();
    cy.get('.display').should('contain', '9')
    cy.get('#number9').click();
    cy.get('.display').should('contain', '9')
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('.display').should('contain', '1')
    cy.get('#number0').click();
    cy.get('.display').should('contain', '0')
    cy.get('#number0').click();
    cy.get('.display').should('contain', '0')
    cy.get('#number0').click();
    cy.get('.display').should('contain', '0')
    cy.get('#number0').click();
    cy.get('.display').should('contain', '0')
    cy.get('#operator-equals').click();
    const total = cy.get('#running-total');
    total.should('contain', '999990000');
  });

  it('should show zero-division-error if num divided by 0', () => {
    cy.get('#number1').click();
    cy.get('.display').should('contain', '1')
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('.display').should('contain', '')
    cy.get('#operator-equals').click();
    const total = cy.get('#running-total');
    total.should('contain', 'zero-division-error');
  });

})