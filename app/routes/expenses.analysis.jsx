import Chart from "../components/expenses/Chart";
import ExpenseStatistics from "../components/expenses/ExpenseStatistics";
// import styles from '../styles/expenses.css';
const dummy_expenses = [
    {
        id: 'e1',
        title: 'First Expense',
        amount: 12.99,
        date: new Date().toISOString(),
    },
    {
        id: 'e2',
        title: 'First Expense',
        amount: 2.99,
        date: new Date().toISOString(),
    },
    {
        id: 'e3',
        title: 'First Expense',
        amount: 20.99,
        date: new Date().toISOString(),
    }
]

export default function ExpenseAnalysis() {
    return (
        <>
            <Chart expenses={dummy_expenses} />
            <ExpenseStatistics expenses={dummy_expenses} />
        </>
    );
}

// export function links() {
//     return [{ rel: 'styelsheet', href: styles }];
// }
