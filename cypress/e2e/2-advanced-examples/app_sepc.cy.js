///<reference types='cypress' />
import '@testing-library/cypress';

describe('Snichat', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('renders', () => {
        cy.get('.n_logo > p').should('exist')
    })

    it('send a message', ()=> {
        cy.get('.chatRows > :nth-child(1)').click();
        cy.get('.msginput').type('This is testing');
        cy.get('.btn_inner > button').click();
        cy.get(':nth-child(4) > .m_container > p').should('have.text','This is testing');
    })
})