import Login from '../page/login.page'
import Products from '../page/products.page'

describe('remove item with page objects', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should remove product from product list page', () => {
    Login.loginUser('standard_user', 'secret_sauce')

    cy.get(Products.title).should('exist')
    cy.get(Products.item).click()
    cy.get(Products.BPremoveBtn).should('exist')
    cy.get(Products.BPremoveBtn).click()

  })

  it('should remove product from cart', () => {
    Login.loginUser('standard_user', 'secret_sauce')

    cy.get(Products.title).should('exist')
    cy.get(Products.item).click()

    cy.get(Products.cartTotal).should('have.text', 1)
    cy.get(Products.cart).click()
    cy.get(Products.cartTitle).contains('Your Cart')
    cy.get(Products.inventoryName).should('have.text', 'Sauce Labs Backpack')
    cy.get(Products.BPremoveBtn).should('exist')
    cy.get(Products.BPremoveBtn).click()
  })
})