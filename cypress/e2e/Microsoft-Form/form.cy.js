import formPage from "../../support/pages/formPage"
const messages = require("../../fixtures/messages.json")
const data = require("../../fixtures/data.json")


describe('Form Page', () => {
  beforeEach(() => {
    cy.visit('')
    cy.url().should('contain', 'forms')
  })

  it('Fill out the form with normal flow', () => {
    formPage.title(messages.title)
    formPage.name(messages.name, data.name)
    formPage.phone(messages.phone, data.phone)
    formPage.evaluation(messages.eval)
    formPage.rate(messages.rate)
    formPage.date(messages.reviewDate, data.reviewDate)
    formPage.submit()
  })

})