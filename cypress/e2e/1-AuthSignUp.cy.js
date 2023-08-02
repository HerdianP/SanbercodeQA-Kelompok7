import Name from "../PageObjects/FirstLastName.js";


describe('AuthSignUp', () => {
  it('sukses_signup', () => {
    cy.visit('https://magento.softwaretestingboard.com')
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action').click()


    //POM
    const ln = new Name();
    ln.setFirstName("Herdian")
    ln.setLastName("Testing")

    cy.get('#email_address').type("herdiantesting17@gmail.com")
    cy.get('#password').type("123123qwe@@")
    cy.get('#password-confirmation').type("123123qwe@@")
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-success').should('be.visible')
  })

  it('gagal_signup_emailterdaftar', () => {
    cy.visit('https://magento.softwaretestingboard.com')
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action').click()

    const ln = new Name();
    ln.setFirstName("Herdian")
    ln.setLastName("Testing")

    cy.get('#email_address').type("testing@gmail.com")
    cy.get('#password').type("123123qwe@@")
    cy.get('#password-confirmation').type("123123qwe@@")
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-error').should('be.visible')
  })

  it('gagal_signup_passtidaksesuai', () => {
    cy.visit('https://magento.softwaretestingboard.com')
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action').click()

    const ln = new Name();
    ln.setFirstName("Herdian")
    ln.setLastName("Testing")
    
    cy.get('#email_address').type("herdiantesting@gmail.com")
    cy.get('#password').type("123123qwe")
    cy.get('#password-confirmation').type("123123qwe")
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('#password-error').should('be.visible')
  })

  it('gagal_signup_blankfield', () => {
    cy.visit('https://magento.softwaretestingboard.com')
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action').click()
    cy.get('#firstname').click()
    cy.get('#lastname').click()
    cy.get('#email_address').click()
    cy.get('#password').click()
    cy.get('#password-confirmation').click()
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('#firstname-error').should('be.visible')
  })
})