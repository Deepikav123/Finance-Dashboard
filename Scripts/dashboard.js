import { storeData, transactionData } from "./transaction.js";
//  SummaryCard
function SummaryCards() {

    let income = 0;
    let expense = 0;
    transactionData.forEach((ele) => {
        if (ele.transactionType == 'Income') {
            income += Number(ele.transactionAmount);
        }
        else {
            expense += Number(ele.transactionAmount);
        }
    })
    document.querySelector('.balance-value').innerHTML = `₹${income - expense}`;
    document.querySelector('.income-value').innerHTML = `₹${income}`;
    document.querySelector('.expenses-value').innerHTML = `₹${expense}`;

}
SummaryCards();

// Category Chart
function categoryChart() {
    let foodCategory = 'food';
    let travelCategory = 'travel';
    let shoppingCategory = 'shopping';

    let food = 0;
    let travel = 0;
    let shopping = 0;

    transactionData.forEach((ele) => {
        if (ele.transactionCategory == foodCategory && ele.transactionType == 'Expenses') {
            food += Number(ele.transactionAmount);
        }
        else if (ele.transactionCategory == travelCategory && ele.transactionType == 'Expenses') {
            travel += Number(ele.transactionAmount);
        }
        else if (ele.transactionCategory == shoppingCategory && ele.transactionType == 'Expenses') {
            shopping += Number(ele.transactionAmount);
        }
    })
    let maximum = food;
    if (travel > food) {
        maximum = travel;
    }
    else if (shopping > food) {
        maximum = shopping;
    }

    let categoryCard = `
       <div class="food-category">
                                <div class="food-title category-title">Food</div>
                                <div class="food-bar bar" style="width:${(food / maximum) * 100}%;"></div>
                                <span class="category-amount">₹${food}</span>
                            </div>
                            <div class="travel-category">
                                <div class="travel-title category-title">Travel</div>
                                <div class="travel-bar bar" style="width:${(travel / maximum) * 100}%;"></div>
                                <span class="category-amount">₹${travel}</span>

                            </div>
                            <div class="shopping-category">
                                <div class="shopping-title category-title">Shopping</div>
                                <div class="shopping-bar bar" style="width:${(shopping / maximum) * 100}%;" ></div>
                                <span class="category-amount">₹${shopping}</span>

                            </div>
    `;

    document.querySelector('.category-container').innerHTML = categoryCard;
}
categoryChart();


// Monthly trend
function monthlyTrend() {


    let trendCard = ``;

    let months = [0, 0, 0, 0, 0, 0];

    transactionData.forEach((ele) => {

        const date = new Date(ele.transactionDate);

        const year = date.getFullYear();
        const month = date.getMonth();

        if (year == 2005 && month <= 5) {
            if (ele.transactionType == 'Income') {
                months[month] += Number(ele.transactionAmount);
            }
            else {
                months[month] -= Number(ele.transactionAmount);
            }

        }
    })

    let maxi = Math.abs(months[0]);
    for (let i = 1; i < months.length; i++) {
        if (maxi < Math.abs(months[i])) {
            maxi = Math.abs(months[i]);
        }
    }
    console.log((Math.abs(months[4])/maxi ) * 100);
    trendCard = ` <div class="jan trend">
                                <div class="trend-amount">₹${Math.abs(months[0])}</div>
                                <div class="jan-trendBar trendBar" style="background-color:${months[0] < 0 ? "red" : "green"};
                                height:${(Math.abs(months[0])) * 100}%;"></div>
                                <div class="trend-month">Jan</div>
                            </div>

                            <div class="feb trend">
                                <div class="trend-amount">₹${Math.abs(months[1])}</div>
                                <div class="feb-trendBar trendBar" style="background-color:${months[1] < 0 ? "red" : "green"};
                                  height:${(Math.abs(months[1])/maxi) * 100}%;"></div>
                                <div class="trend-month">Feb</div>
                            </div>
                            <div class="mar trend">
                                <div class="trend-amount">₹${Math.abs(months[2])}</div>
                                <div class="mar-trendBar trendBar" style="background-color:${months[2] < 0 ? "red" : "green"};
                                  height:${(Math.abs(months[2])/maxi) * 100}%;"></div>
                                <div class="trend-month">Mar</div>
                            </div>
                            <div class="apr trend">
                                <div class="trend-amount">₹${Math.abs(months[3])}</div>
                                <div class="apr-trendBar trendBar" style="background-color:${months[3] < 0 ? "red" : "green"}; 
                                  height:${(Math.abs(months[3])/maxi ) * 100}%;"></div>
                                <div class="trend-month">Apr</div>
                            </div>
                            <div class="may trend">
                                <div class="trend-amount">₹${Math.abs(months[4])}</div>
                                <div class="may-trendBar trendBar" style="background-color:${months[4] < 0 ? "red" : "green"};
                                  height:${(Math.abs(months[4])/maxi ) * 100}%;"></div>
                                <div class="trend-month">May</div>
                            </div>
                            <div class="jun trend">
                                <div class="trend-amount">₹${Math.abs(months[5])}</div>
                                <div class="jun-trendBar trendBar" style="background-color:${months[5] < 0 ? "red" : "green"};
                                  height:${(Math.abs(months[5])/maxi ) * 100}%;"></div>
                                <div class="trend-month">Jun</div>
                            </div>`
    document.querySelector('.trend-info').innerHTML = trendCard;
}
monthlyTrend();



// Add Button
document.querySelector('.addButton').addEventListener('click', () => {
    document.querySelector('.overlay').classList.add('toggle');

})

// Submit button
document.querySelector('.submit-button').addEventListener('click', () => {
    storeData();
    SummaryCards();
    categoryChart();
})

// Cancel button
document.querySelector('.cancel-button').addEventListener('click', () => {
    document.querySelector('.overlay').classList.remove('toggle');
})
/*
// Filters

// Type-filter
document.querySelector('.type-filter').addEventListener('click', () => {
    const type = document.querySelector('.type-filter');
    const typeValue = type.value;
    const newType = transactionData.filter((f) => {
        if (typeValue == 'all') {
            return true;
        }
        else if (f.transactionType == typeValue) {
            return true;
        }
        else {
            return false;
        }
    })
    console.log(newType);
    tableData(newType);
})

// Category-filter
document.querySelector('.category-filter').addEventListener('click', () => {
    const category = document.querySelector('.category-filter');
    const categoryValue = category.value;
    console.log(categoryValue);
})
*/
export function tableData() {
    let html = ``;
    transactionData.forEach((ele) => {
        html += `
        <div class="table-data">
            <div class="date-data">${ele.transactionDate}</div>
            <div class="category-data">${ele.transactionCategory}</div>
            <div class="type-data">${ele.transactionType}</div>
            <div class="amount-data">₹${ele.transactionAmount}</div>
        </div>
        
        `
    })
    document.querySelector('.transaction-table-data').innerHTML = html;
}
tableData();
console.log(transactionData);