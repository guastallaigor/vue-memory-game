// https://docs.cypress.io/api/introduction/api.html

describe('When you play the game', () => {
  it('should match all the cards and show player won', () => {
    cy.viewport(1855, 984)
    cy.visit('http://localhost:8082/#/')
    for (let i = 1; i <= 12; i++) {
      for (let j = 1; j <= 12; j++) {
        if (i === j) j++

        const playerWon = cy.get('.player-won')
        playerWon.should('have.attr', 'style')
          .then((style) => {
            if (style.includes('flex')) return
          })


        const imageI = cy.get('.main > .card:nth-child(' + i + ') > .card-flip-inner > .card-flip-front > .v-lazy-image')
        imageI.should('be.visible').and('have.attr', 'src')
          .then((src) => {
            if (src && src.includes('back-card')) {
              cy.get('.main > .card:nth-child(' + i + ') > .card-flip-inner').click()
              cy.wait(1000)
            }
          })

        const imageJ = cy.get('.main > .card:nth-child(' + j + ') > .card-flip-inner > .card-flip-front > .v-lazy-image')
        imageJ.should('be.visible').and('have.attr', 'src')
          .then((src) => {
            if (src && src.includes('back-card')) {
              cy.get('.main > .card:nth-child(' + j + ') > .card-flip-inner').click()
              cy.wait(1000)
            }
          })
      }
    }
  })
})

// ir jogando em um array
