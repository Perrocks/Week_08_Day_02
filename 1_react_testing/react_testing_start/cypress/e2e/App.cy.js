describe('Comments Application', () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })


  it("Loads the App homepage", () => {
    // grab an element on the page, cy.get()
    cy.get('[data-testid="app"]')
  })

  it('Should start with some comments', () => {
    cy.get('#comment-list > li')
    .should('have.length.greaterThan', 0)
  })

  it("Should be able to add a comment", () => {
    // get html elements & add text using (.type())
    cy.get('#name-input').type('John Johnson')
    cy.get('#comment-input').type('some comments')
    
    // submit text inputs
    cy.get('#comment-form').submit()

    // check displays html elements
    cy.get('#comment-list > li').should('have.length', 3)
    // this is a bad test - testing length of parent is prone to bugs
    // future change may put default number to 3, may not match comment submitted, etc.
    // has it actually created a new li? 

    // This is better - 
    cy.get('#comment-list > li > p').last().should('contain', 'John Johnson')
  })




})