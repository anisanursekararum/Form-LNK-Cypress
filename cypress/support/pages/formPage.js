class FormPage {
  
  titleForm = '#FormTitleId_titleAriaId'
  titleName = '#QuestionId_r9f62b2a1fbe746ab953326f6937d4e73 > .--d-51 > .-h-52 > [aria-level="2"] > .text-format-content'
  inputName = ':nth-child(1) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60'
  titlePhone = '#QuestionId_r5c2dd5cf6732459894e3d1cb504c8110 > .--d-51 > .-h-52 > [aria-level="2"] > .text-format-content'
  inputPhone = ':nth-child(2) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60'
  titleEval = '#QuestionId_r8bc17b753f0048ecb03794ef45037bb7 > .--d-51 > .-h-52 > [aria-level="2"] > .text-format-content > span'
  option1Eval = ':nth-child(1) > div > .--x-77 > .-a-79 > .-hE-80'
  option2Eval = ':nth-child(2) > div > .--x-77 > .-a-79 > .-hE-80'
  titleRate = '#QuestionId_r9f97f2550332479a8fdd2914bd99bc1d > .--d-51 > .-h-52 > [aria-level="2"] > .text-format-content > span'
  selectRate = '.-hK-86'
  titleDate = '#QuestionId_r1abee94394494318b1e34a419838e56c > .--d-51 > .-h-52 > [aria-level="2"] > .text-format-content'
  selectData = '#DatePicker0-label'
  buttonSubmit = '.css-224'
  
  title(title){
    cy.get(this.titleForm).should('contain', title)
  }
  
  name(nameTitle, nameValue){
    cy.get(this.titleName).should('have.text', nameTitle)
    cy.input(this.inputName, nameValue)
  }

  phone(phoneTitle, phoneValue){
    cy.get(this.titlePhone).should('have.text', phoneTitle)
    cy.input(this.inputPhone, phoneValue)
  }

  evaluation(evalTitle){
    cy.get(this.titleEval).should('have.text', evalTitle)
    cy.get(this.option1Eval).check().should('be.checked')
    cy.get(this.option2Eval).should('not.be.checked')
  }
  
  rate(rateTitle){
    cy.get(this.titleRate).should('have.text', rateTitle)
    cy.button(this.selectRate)
  }

  date(dateTitle, dateValue){
    cy.get(this.titleDate).should('have.text', dateTitle)
    cy.input(this.selectData, dateValue)
  }

  submit(){
    cy.button(this.buttonSubmit)
  }

  
}

export default new FormPage()