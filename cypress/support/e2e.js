import './commands'

// Configuración global
beforeEach(() => {
  cy.viewport(1920, 1080)
})

// Manejo de errores mejorado
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignorar errores específicos de la aplicación demo
  if (err.message.includes('Script error')) {
    return false
  }
  
  // Ignorar error de behavioural_biometrics
  if (err.message.includes('behavioural_biometrics')) {
    return false
  }
  
  // Ignorar errores de propiedades undefined
  if (err.message.includes('Cannot read properties of undefined')) {
    return false
  }
  
  // Ignorar errores de TypeError comunes en demos
  if (err.name === 'TypeError' && err.message.includes('reading')) {
    return false
  }
  
  // Permitir que otros errores fallen el test
  return true
})