const transactionData = JSON.parse(localStorage.getItem('data')) || [];
// Loacl Storage
function Storage() {
    localStorage.setItem('data', JSON.stringify(transactionData));
}

export function storeData() {

    // Amount value
    const amount = document.querySelector('.amount-input');
    const amountValue = amount.value;

    //   Category value
    const category = document.querySelector('.category-input');
    const categoryValue = category.value;

    // Type value
    const type = document.querySelector('.type-input');
    const typeValue = type.value;

    // Date value
    const date = document.querySelector('.date-input');
    const dateValue = date.value;
    transactionData.push({
        transactionAmount: amountValue,
        transactionCategory: categoryValue,
        transactionType: typeValue,
        transactionDate: dateValue
    });
    Storage();

    // Clear the form
    amount.value = ' ';
    category.value = ' ';
    type.value = ' ';
    date.value = ' ';

}