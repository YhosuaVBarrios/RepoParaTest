Cypress.on('uncaught:exception', (err, runnable) => { return false; });
/// <reference types="cypress" />
describe("Bienvenido a mi primer curso de cypress", () =>{ 

    it("Mi priemr test hola mundo",() =>{
        cy.log("Hola mundo")
        cy.log("Esto se muestra solo por consola")
        cy.log("Ahora entraremos en esta pagina demoqa.com/tex-box")
        cy.wait(3000)// esperamos 3 segundos
    })
    it("Segundo test -> Campo name", () =>{
        cy.visit("https://demoqa.com/text-box")
   cy.get("#userName").type("yhosua")
   cy.get("#userEmail").type("yhosua93@gmail.com")
   cy.get("#currentAddress").type("c/galeon numero 8 bajo c")
   cy.get("#permanentAddress").type("Esta es mi direccion permanente")
   cy.wait(4000)
   cy.get("#submit").click()

    })
})// cierre de describe