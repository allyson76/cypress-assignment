class Login {
  get inputUsername() { return ('#user-name') }
  get inputPassword() { return ('#password') }
  get loginBtn() { return ('#login-button') }

  get errmessage() { return ('h3[data-test="error"]') }

  loginUser(username, password) {
    cy.get(this.inputUsername).type(username)
    cy.get(this.inputPassword).type(password)
    cy.get(this.loginBtn).click()
  }

}
export default new Login()
