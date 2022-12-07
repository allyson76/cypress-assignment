class Products {
  get title() { return ('.title') }
  get item() { return ('#add-to-cart-sauce-labs-backpack') }
  get item2() { return ('#add-to-cart-sauce-labs-bike-light') }
  get item3() { return ('#add-to-cart-sauce-labs-fleece-jacket') }

  //Checkout Info
  get cartTotal() { return ('.shopping_cart_badge') }
  get cart() { return ('.shopping_cart_link') }
  get cartTitle() { return ('.title') }
  get BPremoveBtn() { return ('#remove-sauce-labs-backpack') }
  get BLremoveBtn() { return ('#remove-sauce-labs-bike-light') }
  get FJremoveBtn() { return ('#remove-sauce-labs-fleece-jacket') }
  get inventoryName() { return ('.inventory_item_name') }

  //Checkout Page
  get checkoutBtn() { return ('#checkout') }
  get checkoutTitle() { return ('.title') }
  get firstName() { return ('#first-name') }
  get lastName() { return ('#last-name') }
  get postCode() { return ('#postal-code') }
  get continueBtn() { return ('#continue') }

  checkout(firstname, lastname, postalcode) {
    cy.get(this.firstName).type(firstname)
    cy.get(this.lastName).type(lastname)
    cy.get(this.postCode).type(postalcode)
    cy.get(this.continueBtn).click()
  }

  invalidcheckout(lastname, postalcode) {
    cy.get(this.lastName).type(lastname)
    cy.get(this.postCode).type(postalcode)
    cy.get(this.continueBtn).click()
  }
  //Checkout: Overview Page
  get checkoutOverview() { return ('.title') }
  get inventoryPrice() { return ('.inventory_item_price') }
  get inventoryTotal() { return ('.cart_quantity') }
  get finishBtn() { return ('#finish') }

  //Checkout: Overview Page- multiple products
  get productName1() { return ('a[id="item_4_title_link"] div') }
  get productName2() { return ('a[id="item_0_title_link"] div') }
  get productName3() { return ('a[id="item_5_title_link"] div') }
  get grandTotal() { return ('.summary_total_label') }
  get finishBtn() { return ('#finish') }

  //Checkout: Completed Page
  get checkoutCompleted() { return ('.title') }
  get checkoutHeader() { return ('.complete-header') }



}

export default new Products()
