describe("Input data into username Field and Password", ()=> {
    it("It inputs username", () => {
        cy.visit("/")
        cy.get("[type=email]").type("sample@example.com").should("have.value", "sample@example.com")
    })
    it("It inputs password", () => {
        cy.get("[type=password]").type("somePa55w0rd").should("have.value", "somePa55w0rd")
    })
})

describe("Submit to a mockAPI", ()=> {
    it("It makes a request and return a response from a mockAPI", () => {
        cy.get("[type=submit]").click()
        cy.contains("id")
    })
    it("It is still on the same page", () => {
        cy.url().should("have.value","localhost")
    })
})