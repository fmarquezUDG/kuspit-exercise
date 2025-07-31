import './commands'

beforeEach(() => {
  cy.viewport(1920, 1080)
})

//Manejo de errores
Cypress.on('uncaught:exception', (err, runnable) => {

  if (err.message.includes('Script error')) {
    return false
  }
  
  if (err.message.includes('behavioural_biometrics')) {
    return false
  }
  
  if (err.message.includes('Cannot read properties of undefined')) {
    return false
  }
  
  if (err.name === 'TypeError' && err.message.includes('reading')) {
    return false
  }
  
  return true
})