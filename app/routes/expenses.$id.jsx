import { useNavigate } from "@remix-run/react";
import ExpenseForm from "../components/expenses/ExpenseForm";
import Modal from "../components/util/Modal";
import { getSingleExpense } from "../data/expenses.server";
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

// export async function loader({ params }) {
//   console.log("laoding from id");
//   return await getSingleExpense(params.id);
// }
