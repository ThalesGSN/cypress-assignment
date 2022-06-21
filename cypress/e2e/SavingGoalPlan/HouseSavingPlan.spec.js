/* eslint-disable */

describe('House saving plan', () => {
  const nextButton = '.next';
  const previousButton = '.previous';
  const monthLabel = 'time > :nth-child(1)';
  const yearLabel = 'time > :nth-child(2)';
  const totalAmountInput = '.masked-input';
  const savingDetails = 'details';
  const savingResult = '.animate > strong';
  const now = new Date();

  beforeEach(() => {
    cy.visit('/');
  });

  describe('Total amount input', () => {
    it('should be currency masked', () => {
      const maskedInput = cy.get(totalAmountInput);

      maskedInput.clear().type('340');
      maskedInput.should('have.value', '340');

      maskedInput.clear().type('34000');
      maskedInput.should('have.value', '34,000');

      maskedInput.clear().type('3400000');
      maskedInput.should('have.value', '3,400,000');
    });

    it('should not accept non numeric digits', () => {
      const maskedInput = cy.get(totalAmountInput);

      maskedInput.type('A @,á');
      maskedInput.should('have.value', '25,000');
    });

    it('should accept two decimals', () => {
      const maskedInput = cy.get(totalAmountInput);

      maskedInput.type('.999');
      maskedInput.should('have.value', '25,000.99');
    });
  });

  describe('Reach goal by input', () => {

    it('should display current month on reach goal by input', () => {
      cy.get(yearLabel)
        .should('have.text', (now.getFullYear() + 4).toString());
      cy.get(monthLabel)
        .should('have.text', Months[now.getMonth()]);
    });

    it('should select next month if next is clicked', () => {
      cy.get(nextButton).click();
      cy.get(monthLabel)
        .should('have.text', Months[now.getMonth() + 1]);
    });

    it('should select previous month if previous is clicked', () => {
      cy.get(previousButton).click();
      cy.get(monthLabel)
        .should('have.text', Months[now.getMonth() - 1]);
    });

    it('should select next year if december passes', () => {
      for (let timesClicked = 0; timesClicked < 12; timesClicked++){
       cy.get(nextButton).click();
      }
      cy.get(monthLabel)
        .should('have.text', Months[now.getMonth()]);
      cy.get(yearLabel)
        .should('have.text', (now.getFullYear() + 5).toString());
    });

    it('should select previous year if january passes', () => {
      for (let timesClicked = 0; timesClicked < 12; timesClicked++){
        cy.get(previousButton).click();
      }
      cy.get(monthLabel)
        .should('have.text', Months[now.getMonth()]);
      cy.get(yearLabel)
        .should('have.text', (now.getFullYear() +3).toString());
    });
  });
});


// utils
const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

