/// <reference types="cypress"/>
import Login from '../page/login.page'
import loginData from '../data/loginData'

describe('Login with page objects', () => {
  beforeEach(() => {
    cy.visit('/')

  })

  it('should login with valid credentials', () => {
    Login.loginUser(loginData.validuser.username, loginData.validuser.password)
  })

  it('should login with invalid credentials', () => {
    Login.loginUser(loginData.invaliduser.username, loginData.invaliduser.password)
    cy.get(Login.errmessage)
      .should('be.visible')
      .and('have.text', loginData.invaliduser.message)
  })

  it('should login with locked out user credentials', () => {
    Login.loginUser(loginData.lockedoutuser.username, loginData.lockedoutuser.password)
    cy.get(Login.errmessage).should('exist')
    cy.get(Login.errmessage).contains(loginData.lockedoutuser.errmessage)
  })

  it('should login with problem user credentials', () => {
    Login.loginUser(loginData.problemuser.username, loginData.problemuser.password)
    cy.url().should('contain', '/inventory')
  })

  it('should login with glitch user credentials', () => {
    Login.loginUser(loginData.glitchuser.username, loginData.glitchuser.password)
    cy.url().should('contain', '/inventory')
  })

})
