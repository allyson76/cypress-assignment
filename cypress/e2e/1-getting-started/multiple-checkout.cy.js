import Login from '../page/login.page'
import Products from '../page/products.page'
import productsData from '../data/productsData'

describe('Checkout Cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })


  it('should checkout successfully with multiple items', () => {
    Login.loginUser('standard_user', 'secret_sauce')

    cy.get(Products.title).should('exist')
    cy.get(Products.item).click()
    cy.get(Products.item2).click()
    cy.get(Products.item3).click()
    cy.get(Products.cartTotal).should('have.text', 3)

    cy.get(Products.cart).click()
    cy.get(Products.cartTitle).contains('Your Cart')
    // cy.get(Products.inventoryName).should('have.text', 'Sauce Labs Backpack')
    cy.get(Products.BPremoveBtn).should('exist')
    cy.get(Products.BLremoveBtn).should('exist')
    cy.get(Products.FJremoveBtn).should('exist')

    cy.get(Products.checkoutBtn).click()
    cy.get(Products.checkoutTitle).contains('Checkout: Your Information')
    Products.checkout(productsData.validinfo.firstname, productsData.validinfo.lastname, productsData.validinfo.postalcode)

    cy.get(Products.productName1).should('have.text', 'Sauce Labs Backpack')
    cy.get(Products.productName2).contains('Bike Light')
    cy.get(Products.productName3).should('be.visible')
    cy.get(Products.grandTotal).contains('97.17')
    cy.get(Products.finishBtn).click()

    cy.get(Products.checkoutCompleted).contains('Checkout: Complete!')
    cy.get(Products.checkoutHeader).contains('THANK YOU')
  })

  it('should unsuccessfully checkout with multiple items', () => {
    Login.loginUser('standard_user', 'secret_sauce')

    cy.get(Products.title).should('exist')
    cy.get(Products.item).click()
    cy.get(Products.item2).click()
    cy.get(Products.item3).click()
    cy.get(Products.cartTotal).should('have.text', 3)

    cy.get(Products.cart).click()
    cy.get(Products.cartTitle).contains('Your Cart')
    cy.get(Products.BPremoveBtn).should('exist')
    cy.get(Products.BLremoveBtn).should('exist')
    cy.get(Products.FJremoveBtn).should('exist')

    cy.get(Products.checkoutBtn).click()
    cy.get(Products.checkoutTitle).contains('Checkout: Your Information')
    Products.invalidcheckout(productsData.invalidinfo.lastname, productsData.invalidinfo.postalcode)
    cy.get(Login.errmessage)
      .should('be.visible')
      .and('contain', productsData.invalidinfo.message)
  })
})