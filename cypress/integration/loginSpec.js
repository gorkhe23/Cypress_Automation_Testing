/// <reference types="Cypress" />
describe('Login without UI', () => {

    //this test will show that user will be redirected to login page
    it('Login without XHR', function () {
        cy.visit('https://rahulshettyacademy.com/client');
        cy.url().should('include', '/client/dashboard/dash')
    })

    //this test will show that user is logged with XHR request and will be redirected to homepage
    it('Login with XHR', function () {
        cy.request('POST', 'https://rahulshettyacademy.com/api/ecom/auth/login', {userEmail:'shresthaprahlad@gmail.com',userPassword:'Password@123'}).then(
          (response) =>   {
            if (response.status === 200)
            {
                window.localStorage.setItem('token', response.body.token)
            }
        })
        cy.visit('https://rahulshettyacademy.com/client');
        cy.url().should('include', '/client/dashboard/dash')
    })
})
