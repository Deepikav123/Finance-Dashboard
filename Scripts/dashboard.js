import { storeData, transactionData } from "./transaction.js";

// Role based Access

function Role() {
    const role = document.querySelector('.role');
    if (role.value == 'Admin') {
        document.querySelector('.dashboard').classList.add('roleBased');
    }
    else {
        document.querySelector('.dashboard').classList.remove('roleBased');

    }
}
Role();

document.querySelector('.role').addEventListener('click', () => {
    Role();
})

//  SummaryCard
function IncomeAndExpense() {

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
    let majority;
    if (income > expense) {
        majority = 'income';
    }
    else {
        majority = 'expense';
    }
    return {
        income,
        expense,
        majority
    };
}
function SummaryCards() {
    const incomeAndExpenseDetails = IncomeAndExpense();
    const balance = incomeAndExpenseDetails.income - incomeAndExpenseDetails.expense;
    document.querySelector('.balance-value').innerHTML = `${balance < 0 ? '-' : ''}₹${Math.abs(balance)}`;
    document.querySelector('.income-value').innerHTML = `₹${incomeAndExpenseDetails.income}`;
    document.querySelector('.expenses-value').innerHTML = `₹${incomeAndExpenseDetails.expense}`;

}
SummaryCards();


function categoryMaximum() {
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
    let maximum =0;
    let maximumCategory = 'None';
    if (travel > food) {
        maximum = travel;
        maximumCategory = 'Travel';

    }
    else if (shopping > food) {
        maximum = shopping;
        maximumCategory = 'Shopping';

    }

    return {
        food,
        travel,
        shopping,
        maximum,
        maximumCategory
    };
}
// Category Chart
function categoryChart() {
    const categoryObject = categoryMaximum();
    let categoryCard = `
       <div class="food-category">
                                <div class="food-title category-title">Food</div>
                                <div class="food-bar bar" style="width:${Math.floor((categoryObject.food / categoryObject.maximum) * 100)}%;"></div>
                                <span class="category-amount">₹${categoryObject.food}</span>
                            </div>
                            <div class="travel-category">
                                <div class="travel-title category-title">Travel</div>
                                <div class="travel-bar bar" style="width:${Math.floor((categoryObject.travel / categoryObject.maximum) * 100)}%;"></div>
                                <span class="category-amount">₹${categoryObject.travel}</span>

                            </div>
                            <div class="shopping-category">
                                <div class="shopping-title category-title">Shopping</div>
                                <div class="shopping-bar bar" style="width:${Math.floor((categoryObject.shopping / categoryObject.maximum) * 100)}%;" ></div>
                                <span class="category-amount">₹${categoryObject.shopping}</span>

                            </div>
    `;

    document.querySelector('.category-container').innerHTML = categoryCard;
}
categoryChart();


// Monthly trend
function monthDetails() {

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
    let maxiIndex = 0;
    let maxi = Math.abs(months[0]);
    for (let i = 1; i < months.length; i++) {
        if (maxi < Math.abs(months[i])) {
            maxi = Math.abs(months[i]);
            maxiIndex = i;
        }
    }

    return {
        months,
        maxi,
        maxiIndex
    };
}

function monthlyTrend() {

    let monthDetail = monthDetails();

    let trendCard = ` <div class="jan trend">
                                <div class="trend-amount">₹${Math.abs(monthDetail.months[0])}</div>
                                <div class="jan-trendBar trendBar" style="background-color:${monthDetail.months[0] < 0 ? "red" : "green"};
                                height:${(Math.abs(monthDetail.months[0]) / monthDetail.maxi) * 100}%;"></div>
                                <div class="trend-month">Jan</div>
                            </div>

                            <div class="feb trend">
                                <div class="trend-amount">₹${Math.abs(monthDetail.months[1])}</div>
                                <div class="feb-trendBar trendBar" style="background-color:${monthDetail.months[1] < 0 ? "red" : "green"};
                                  height:${(Math.abs(monthDetail.months[1]) / monthDetail.maxi) * 100}%;"></div>
                                <div class="trend-month">Feb</div>
                            </div>
                            <div class="mar trend">
                                <div class="trend-amount">₹${Math.abs(monthDetail.months[2])}</div>
                                <div class="mar-trendBar trendBar" style="background-color:${monthDetail.months[2] < 0 ? "red" : "green"};
                                  height:${(Math.abs(monthDetail.months[2]) / monthDetail.maxi) * 100}%;"></div>
                                <div class="trend-month">Mar</div>
                            </div>
                            <div class="apr trend">
                                <div class="trend-amount">₹${Math.abs(monthDetail.months[3])}</div>
                                <div class="apr-trendBar trendBar" style="background-color:${monthDetail.months[3] < 0 ? "red" : "green"}; 
                                  height:${(Math.abs(monthDetail.months[3]) / monthDetail.maxi) * 100}%;"></div>
                                <div class="trend-month">Apr</div>
                            </div>
                            <div class="may trend">
                                <div class="trend-amount">₹${Math.abs(monthDetail.months[4])}</div>
                                <div class="may-trendBar trendBar" style="background-color:${monthDetail.months[4] < 0 ? "red" : "green"};
                                  height:${(Math.abs(monthDetail.months[4]) / monthDetail.maxi) * 100}%;"></div>
                                <div class="trend-month">May</div>
                            </div>
                            <div class="jun trend">
                                <div class="trend-amount">₹${Math.abs(monthDetail.months[5])}</div>
                                <div class="jun-trendBar trendBar" style="background-color:${monthDetail.months[5] < 0 ? "red" : "green"};
                                  height:${(Math.abs(monthDetail.months[5]) / monthDetail.maxi) * 100}%;"></div>
                                <div class="trend-month">Jun</div>
                            </div>`
    document.querySelector('.trend-info').innerHTML = trendCard;
}
monthlyTrend();

// Insights
function Insights() {
    let insightCard = ``;
    const maxCategory = categoryMaximum();
    let monthDetail = monthDetails();
    const incomeAndExpenseDetails = IncomeAndExpense();
    const month = ['January', 'February', 'March', 'April', 'May', 'June'];
    insightCard = `
     <div class="insight-category">
                            Highest Spendings-<strong>${maxCategory.maximumCategory}</strong>
                        </div>
                        <div class="insight-month">
                            Highest Spend Month-<strong>${month[monthDetail.maxiIndex]}</strong>
                        </div>
                        <div class="insight-expenses">
                            Majority of transactions are ${incomeAndExpenseDetails.majority}
                        </div>`

    document.querySelector('.insight-info').innerHTML = insightCard;
}
Insights();
// Add Button
document.querySelector('.addButton').addEventListener('click', () => {
    document.querySelector('.overlay').classList.add('toggle');

})

// Submit button
document.querySelector('.submit-button').addEventListener('click', () => {
    storeData();
    SummaryCards();
    categoryChart();
    monthlyTrend();
    Insights();

})

// Cancel button
document.querySelector('.cancel-button').addEventListener('click', () => {
    document.querySelector('.overlay').classList.remove('toggle');
})


function Filter() {

    const category = document.querySelector('.category-filter');
    const categoryValue = category.value;

    
    const type = document.querySelector('.type-filter');
    const typeValue = type.value;

    const newCategory = transactionData.filter((f) => {
        if ((categoryValue == f.transactionCategory || categoryValue == 'category')&&(f.transactionType == typeValue || typeValue == 'all') ) {
            return true;
        }
    })
    return newCategory;
}


document.querySelector('.type-filter').addEventListener('click', () => {
    const type = Filter();
    tableData(type);
})
document.querySelector('.category-filter').addEventListener('click', () => {
    const category = Filter();
    tableData(category);
})

export function tableData(transactionData) {

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
tableData(transactionData);
console.log(transactionData);