import { Link, Outlet, useLoaderData, useMatches } from "@remix-run/react";
import { FaDownload, FaPlus } from "react-icons/fa/index.js";

import ExpensesList from "../components/expenses/ExpensesList";
import ExpensesHeader from "../components/navigation/ExpenseHeader";
import { getExpenses } from "../data/expenses.server";
import styles from "../styles/expenses.css";

const dummy_expenses = [
  {
    id: "e1",
    title: "First Expense",
    amount: 12.99,
    date: new Date().toISOString(),
  },
  {
    id: "e2",
    title: "First Expense",
    amount: 2.99,
    date: new Date().toISOString(),
  },
  {
    id: "e3",
    title: "First Expense",
    amount: 20.99,
    date: new Date().toISOString(),
  },
];

export default function Expenses() {
  const routeData = useMatches();
  const showExpanseList = routeData
    .slice(-1)[0]
    .pathname.includes("expenses/analysis");

  console.log("expenses loading");
  const expenses = useLoaderData();

  return (
    <>
      <main>
        <ExpensesHeader />
        <Outlet />
        <section id="expenses-actions">
          <Link to="add">
            <FaPlus />
            <span>Add Expense</span>
          </Link>
          <a href="/expenses/raw">
            <FaDownload />
            <span>Load Raw Data</span>
          </a>
        </section>
        {!showExpanseList && <ExpensesList expenses={expenses} />}
      </main>
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function loader() {
  console.log("loading from expenses");
  const data = await getExpenses();
  return data;
}

