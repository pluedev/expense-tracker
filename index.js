const inputText = document.querySelector(".input-text");
const inputDate = document.querySelector(".input-date");
const inputAmount = document.querySelector(".input-amount");
const submitBtn= document.querySelector(".submit-btn");
const expenseTable= document.querySelector(".expense-table");
const expenseTbody= document.querySelector(".expense-tbody");


submitBtn.addEventListener("click", addExpense);


function addExpense(event) {
    event.preventDefault();
    const name = inputText.value;
    const date = inputDate.value;
    const amount = inputAmount.value;
    
    expenseTbody.innerHTML += `
    <tr>
        <td>${name}</td>
        <td>${date}</td>
        <td>${amount}</td>
        <td><button class="delete">Delete</button</td>
    </tr>
    `
    inputText.value = "";
    inputDate.value = "";
    inputAmount.value = "";
}
