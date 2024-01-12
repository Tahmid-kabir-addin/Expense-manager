import { json, useNavigate } from "@remix-run/react";
import ExpenseForm from "../components/expenses/ExpenseForm";
import Modal from "../components/util/Modal";
import { deleteExpense, updateExpenseData } from "../data/expenses.server";
import { validateExpenseInput } from "../data/validation.server";
// import Modal from "../components/util/Modal";

export default function SingleExpense() {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("..");
  }

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
}

export async function action({ request, params }) {
  if (request.method === "PATCH") {
    const formData = await request.formData();
    const expenseData = Object.fromEntries(formData);

    try {
      validateExpenseInput(expenseData);
    } catch (error) {
      return error;
    }

    await updateExpenseData(params.id, expenseData);
  } else if (request.method === "DELETE") {
    try {
      await deleteExpense(params.id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  return json({ message: params.id });
}
