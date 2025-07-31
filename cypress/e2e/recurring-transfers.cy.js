describe('TC-TRANS-003: Recurring Transfer', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Should perform recurring transfer', () => {
    cy.fixture('transfer-data').then((data) => {
      cy.performRecurringTransfer(data.recurringTransfer)
    })
  })
})