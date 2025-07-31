export class TransferPage {
 static elements = {
   moveMoneyBtn: 'span.chakra-yqpppt:contains("Move Money")',
   accountTransferBtn: 'div.panel--bordered__item__label.h4:contains("Account Transfer")',
   
   // Campos del formulario
   amount: '#Transfer_Amount',
   description: '#Transfer_Description',
   whenNow: '[data-semantic="now"]',
   whenLater: '[data-semantic="future"]', 
   whenRepeating: '[data-semantic="recurring"]',
   
   nextBtn: 'button[type="submit"]'
 }

 static goToTransfer() {
   cy.contains('Move Money').click()
   cy.contains('Account Transfer').click()
 }

 static fillBasicForm(data) {
   // Selección de cuenta origen - buscar en sección "Transfer From"
   cy.contains('Transfer From')
     .parent()
     .contains('Demo Multi Signatory Account')
     .click()
   
   // Selección de cuenta destino - buscar en sección "Transfer To"  
   cy.contains('Transfer To')
     .parent()
     .contains('Demo My Mastercard')
     .click()
   
   // Datos de transferencia
   cy.get(this.elements.amount).type(data.amount)
   cy.get(this.elements.description).type(data.description)
 }

 static selectWhen(when) {
   if (when === 'Now') {
     cy.get(this.elements.whenNow).click()
   } else if (when === 'Later') {
     cy.get(this.elements.whenLater).click()
   } else if (when === 'Repeating') {
     cy.get(this.elements.whenRepeating).click()
   }
 }

 static clickNext() {
   cy.contains('Next').click()
 }
}