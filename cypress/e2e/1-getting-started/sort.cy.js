/// <reference types="cypress" />
import Login from '../page/login.page'
import Sort from '../page/sort.page'


describe('Filter', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should sort product list from A-Z', () => {
    Login.loginUser('standard_user', 'secret_sauce')
    cy.get(Sort.filterIcon).select('az')

    var productList = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']
    productList.sort()

    cy.get(Sort.itemName).each(($elem, index) => {
      expect($elem.text()).equal(productList[index])
    })
  })

  it('should sort product list from Z-A', () => {
    Login.loginUser('standard_user', 'secret_sauce')
    cy.get(Sort.filterIcon).select('za')

    var productList = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']
    productList.sort().reverse()

    cy.get(Sort.itemName).each(($elem, index) => {
      expect($elem.text()).equal(productList[index])
    })
  })
})