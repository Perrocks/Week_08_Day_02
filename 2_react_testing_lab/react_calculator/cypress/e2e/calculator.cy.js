describe("Calculator", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it("has working buttons", () => {
    cy.get('#number1').click()
    cy.get('.display').should("contain", '1')
  })

  // 2. Do the arithmetical operations update the display with the result of the operation?
  it("Should add", () => {
    cy.get('#number1').click()
    cy.get('#operator_add').click()
    cy.get('#number5').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '6')
  })
  it("Should minus", () => {
    cy.get('#number1').click()
    cy.get('#operator-subtract').click()
    cy.get('#number5').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-4')
  })
  it("Should Multiply", () => {
    cy.get('#number2').click()
    cy.get('#operator-multiply').click()
    cy.get('#number5').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '10')
  })
  it("Should Divide", () => {
    cy.get('#number4').click()
    cy.get('#operator-divide').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '2')
  })

  // 3. Can multiple operations be chained together?
  it("Should Multiply in chains", () => {
    cy.get('#number2').click()
    cy.get('#operator-multiply').click()
    cy.get('#number5').click() //10
    cy.get('#operator-multiply').click()
    cy.get('#number2').click() //20
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '20')
  })

  // 4. Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  it("Should return negatives", () => {
    cy.get('#number1').click()
    cy.get('#operator-subtract').click()
    cy.get('#number5').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-4')
  })
  it("Should return decimals", () => {
    cy.get('#number5').click()
    cy.get('#operator-divide').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '2.5')
  })
  it("Should return huge numbers", () => {
    for(let i=0; i<10; i++){
      cy.get('#number9').click()
    }
    cy.get('#operator-multiply').click()
    for(let i=0; i<10; i++){cy.get('#number9').click()}
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain.float.greaterThan', '15')
  })

  // 5. What does the code do in exceptional circumstances? 
  // Specifically, if you divide by zero, what is the effect?
  // Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
  xit("Should return 'err' for 0 division", () => {
    cy.get('#number5').click()
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', 'err')
  })


})





