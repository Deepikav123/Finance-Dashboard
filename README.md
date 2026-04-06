# 💰 Finance Dashboard UI

A clean and interactive **Finance Dashboard** built using **HTML, CSS, and JavaScript** to help users track, analyze, and understand their financial activity.

---

## 🚀 Overview

This project simulates a simple financial tracking dashboard where users can:

* View overall financial summary
* Analyze spending patterns
* Manage transactions
* Gain meaningful insights from data

The focus of this project is on **UI design, state handling, and user experience**, rather than backend integration.

---

## ✨ Features

### 📊 Dashboard Overview

* Total Balance calculation (Income − Expenses)
* Separate cards for Income and Expenses
* Dynamic updates based on transaction data

---

### 📈 Visualizations

* **Category Chart**

  * Displays expense distribution across categories
* **Monthly Trend Chart**

  * Shows income vs expenses month-wise
  * Uses color indication:

    * 🟢 Green → Income
    * 🔴 Red → Expenses

---

### 📋 Transactions Section

* Displays list of transactions with:

  * Date
  * Category
  * Type (Income/Expense)
  * Amount
* Dynamic rendering from local storage
* Filtering:

  * By Type (Income / Expense)
  * By Category

---

### 🔐 Role-Based UI (Frontend Simulation)

* **Viewer**

  * Can only view data
* **Admin**

  * Can add transactions

Role can be switched using a dropdown.

---

### ➕ Add Transaction (Modal)

* Form-based input:

  * Amount
  * Category
  * Type
  * Date
* Data stored in **localStorage**
* UI updates instantly after submission

---

### 🧠 Insights Section

Provides meaningful observations:

* Highest spending category
* Majority transaction type (income/expense)
* Savings insight:

  * ✔ You saved ₹X
  * ❌ You overspent by ₹X

---

### 💾 State Management

* Uses **localStorage** for persistence
* Central transaction array used across features
* UI updates dynamically after every change

---

### 📱 Responsive Design

* Grid-based layout
* Adapts to smaller screens
* Mobile-friendly structure

---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3**
* **JavaScript (ES6 Modules)**

---

## 📂 Project Structure

```
/project
│── index.html
│── dashboard.css
│── Scripts/
│     ├── dashboard.js
│     └── transaction.js
```

---

## ⚙️ Deployment Link

(https://personalfinancial-dashboard.netlify.app/)
---

## 🧪 Key Concepts Implemented

* DOM Manipulation
* Event Handling
* Modular JavaScript
* Local Storage Persistence
* Dynamic UI Rendering
* Conditional Rendering (Role-based UI)
* Data-driven visualizations

---

## 🎯 Design Approach

* Clean and minimal UI for clarity
* Focus on readability and structure
* Logical grouping of components
* Simple and intuitive user interactions

---

## ⚠️ Assumptions

* Data is stored locally (no backend)
* Limited categories (Food, Travel, Shopping)
* Trends calculated for selected months
* Role-based access is simulated on frontend

---

## 🚀 Future Improvements

* Edit/Delete transactions
* Dark mode
* Export data (CSV/JSON)
* Advanced filtering (date range)
* Charts using libraries (Chart.js / Recharts)
* Backend integration

---

## 📌 Conclusion

This project demonstrates:

* Strong fundamentals in frontend development
* Ability to build dynamic, data-driven interfaces
* Understanding of user experience and design structure

---

## 👩‍💻 Author

**Deepika**

---
