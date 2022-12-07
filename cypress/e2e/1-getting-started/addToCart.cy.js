import Login from '../page/login.page'
import Products from '../page/products.page'

describe('add product to cart using page objects', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should add one product to cart', () => {
    Login.loginUser('standard_user', 'secret_sauce')

    cy.get(Products.title).should('exist')
    cy.get(Products.item).click()

  })

  it('should add multiple products to cart', () => {
    Login.loginUser('standard_user', 'secret_sauce')

    cy.get(Products.title).should('exist')
    cy.get(Products.item).click()
    cy.get(Products.item2).click()
    cy.get(Products.item3).click()
    cy.get(Products.cartTotal).should('have.text', 3)

  })
})