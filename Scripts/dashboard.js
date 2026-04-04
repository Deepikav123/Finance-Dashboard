import { storeData,transactionData } from "./transaction.js";
// Add Button
document.querySelector('.addButton').addEventListener('click',()=>{
    document.querySelector('.transactions').classList.add('toggle');
})

// Submit button
document.querySelector('.submit-button').addEventListener('click',()=>{
    storeData();
})

// Cancel button
document.querySelector('.cancel-button').addEventListener('click',()=>{
    document.querySelector('.transactions').classList.remove('toggle');
})


export function tableData() {
    let html = ``;
    transactionData.forEach((ele)=>{
        html += `
        <div class="table-data">
            <div class="date-data">${ele.transactionDate}</div>
            <div class="category-data">${ele.transactionCategory}</div>
            <div class="type-data">${ele.transactionType}</div>
            <div class="amount-data">${ele.transactionAmount}</div>
        </div>
        
        `
    })
    document.querySelector('.transaction-table-data').innerHTML=html;
}
tableData();