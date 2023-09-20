$(document).ready(function () {
    const expenseList = $("#expense-list");
    const expenseNameInput = $("#expense-name");
    const expenseAmountInput = $("#expense-amount");
    const addExpenseButton = $("#add-expense-btn");

    addExpenseButton.click(function () {
        const name = expenseNameInput.val();
        const amount = parseFloat(expenseAmountInput.val());

        if (name.trim() === "" || isNaN(amount) || amount <= 0) {
            alert("Please enter a valid expense name and amount.");
            return;
        }

        const expenseItem = `
            <li>
                <span>${name}</span>
                <span>$${amount.toFixed(2)}</span>
            </li>
        `;

        expenseList.append(expenseItem);

        // Clear input fields
        expenseNameInput.val("");
        expenseAmountInput.val("");
    });
});