describe('TC-TRANS-001: Basic Transfer', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Should perform successful basic transfer', () => {
    cy.fixture('transfer-data').then((data) => {
      cy.performBasicTransfer(data.basicTransfer)
    })
  })
})