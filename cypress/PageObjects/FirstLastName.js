class Name
{
    setFirstName(firstname)
    {
        cy.get('#firstname').type(firstname);

    }
    setLastName(lastname)
    {
        cy.get('#lastname').type(lastname);

    }


}

export default Name;