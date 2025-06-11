describe('SauceDemo - Login', () => {
  const baseUrl = 'https://www.saucedemo.com';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('1 - Login com usuário inválido', () => {
    cy.get('[data-test="username"]').type('usuario_invalido');
    cy.get('[data-test="password"]').type('senha_invalida');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });

  it('2 - Login com usuário válido', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
  });
});
describe('SauceDemo - Jornada de Compra Completa', () => {
  const baseUrl = 'https://www.saucedemo.com';

  beforeEach(() => {
    cy.visit(baseUrl);
    cy.login("standard_user","secret_sauce");
  });

  it('1 - Visualizar detalhes de um produto', () => {
    cy.contains('Sauce Labs Backpack').click();
    cy.url().should('include', '/inventory-item.html');
    cy.get('.inventory_details_name').should('contain', 'Sauce Labs Backpack');
  });

  it('2 - Adicionar produto ao carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('contain', '1');
  });

  it('3 - Remover produto do carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('not.exist');
  });

  it('4 - Fazer checkout', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('André');
    cy.get('[data-test="lastName"]').type('Alves');
    cy.get('[data-test="postalCode"]').type('77000-000');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.get('.complete-header').should('contain', 'Thank you for your order!');
  });

  it('5 - Logout após login', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    cy.url().should('eq', `${baseUrl}/`);
  });
});