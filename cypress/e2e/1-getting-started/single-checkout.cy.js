import Login from '../page/login.page'
import Products from '../page/products.page'
import productsData from '../data/productsData'

describe('Checkout', () => {
  beforeEach(() => {
    cy.visit('/')
  })


  it('should successfully checkout with one item', () => {
    //Login with valid credentials
    Login.loginUser('standard_user', 'secret_sauce')

    //Add to Cart
    cy.get(Products.title).should('exist')
    cy.get(Products.item).click()

    //Checkout Info
    cy.get(Products.cartTotal).should('have.text', 1)
    cy.get(Products.cart).click()
    cy.get(Products.cartTitle).contains('Your Cart')
    cy.get(Products.inventoryName).should('have.text', 'Sauce Labs Backpack')
    cy.get(Products.BPremoveBtn).should('exist')

    //Checkout Page
    cy.get(Products.checkoutBtn).click()
    cy.get(Products.checkoutTitle).contains('Checkout: Your Information')
    Products.checkout(productsData.validinfo.firstname, productsData.validinfo.lastname, productsData.validinfo.postalcode)

    //Checkout: Overview Page
    cy.get(Products.inventoryName).should('have.text', 'Sauce Labs Backpack')
    cy.get(Products.inventoryPrice).contains('29.99')
    cy.get(Products.inventoryTotal).should('have.text', 1)
    cy.get(Products.finishBtn).click()

    //Checkout: Completed Page
    cy.get(Products.checkoutCompleted).contains('Checkout: Complete!')
    cy.get(Products.checkoutHeader).contains('THANK YOU')
  })

  it('should unsuccessfully checkout with one item', () => {
    Login.loginUser('standard_user', 'secret_sauce')

    cy.get(Products.title).should('exist')
    cy.get(Products.item).click()

    cy.get(Products.cartTotal).should('have.text', 1)
    cy.get(Products.cart).click()
    cy.get(Products.cartTitle).contains('Your Cart')
    cy.get(Products.inventoryName).should('have.text', 'Sauce Labs Backpack')
    cy.get(Products.BPremoveBtn).should('exist')

    cy.get(Products.checkoutBtn).click()
    cy.get(Products.checkoutTitle).contains('Checkout: Your Information')
    Products.invalidcheckout(productsData.invalidinfo.lastname, productsData.invalidinfo.postalcode)
    cy.get(Login.errmessage)
      .should('be.visible')
      .and('contain', productsData.invalidinfo.message)
  })
})