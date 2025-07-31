// import Raect from "react";
// import Balance from "./components/Balance";
// import IncomeExpense from "./components/IncomeExpense";
// import TransactionList from "./components/TransactionList";
// import AddTransaction from"./components/AddTransaction";
// import { GlobalProvider} from "./context/GlobalState";
// import './App.css';
// function App(){
//   return(
//     <GlobalProvider>
//        <div className="container">
//         <h2>Expense Tracker</h2> 
//         <Balance/>
//         <IncomeExpense/>
//         <TransactionList/>
//         <AddTransaction/>
//        </div>
//     </GlobalProvider>
//   );
// }
// export default App;



// import React from "react";
// import Header from './components/Header';
// import Balance from './components/Balance';
// import IncomeExpenses from './components/IncomeExpense';
// import TransactionList from './components/TransactionList';
// import AddTransaction from './components/AddTransaction';
// import  IncomeExpensesChart from './components/IncomeExpensesChart';
// import { GlobalProvider } from "./context/GlobalState";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Doughnut } from "react-chartjs-2";
// import './App.css';

// function App() {
//   return (
//     <GlobalProvider>
//       <Header />
//       <div className="container">
//         <div className="card">
//           <Balance />
//           <IncomeExpenses />
//           <TransactionList />
//           <AddTransaction />
//         </div>
//         <div className="chart-card">
//           <DoughnutChart />
//         </div>
//       </div>
//       <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar theme="colored" />
//     </GlobalProvider>
//   );
// }

// function DoughnutChart() {
//   const income = JSON.parse(localStorage.getItem("transactions"))?.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0) || 0;
//   const expense = JSON.parse(localStorage.getItem("transactions"))?.filter(t => t.amount < 0).reduce((acc, t) => acc + Math.abs(t.amount), 0) || 0;

//   const data = {
//     labels: ['Income', 'Expense'],
//     datasets: [
//       {
//         data: [income, expense],
//         backgroundColor: ['#28a745', '#dc3545'],
//         hoverOffset: 6,
//       }
//     ]
//   };

//   return (
//     <div className="chart-wrapper">
//       <h3>Income vs Expense</h3>
//       <Doughnut data={data} />
//     </div>
//   );
// }

// export default App;


import React from "react";
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from "./context/GlobalState";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Doughnut } from "react-chartjs-2";
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <div className="card">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
        <div className="chart-card">
          <DoughnutChart />
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar theme="colored" />
    </GlobalProvider>
  );
}

function DoughnutChart() {
  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  const income = transactions
    .filter(t => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter(t => t.amount < 0)
    .reduce((acc, t) => acc + Math.abs(t.amount), 0);

  const data = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        data: [income, expense],
        backgroundColor: ['#28a745', '#dc3545'],
        hoverOffset: 6,
      }
    ]
  };

  return (
    <div className="chart-wrapper">
      <h3>Income vs Expense</h3>
      <Doughnut data={data} />
    </div>
  );
}

export default App;
