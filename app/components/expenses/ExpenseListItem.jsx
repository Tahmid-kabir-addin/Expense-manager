import { Link, useFetcher, useNavigation, useSubmit } from "@remix-run/react";
import { deleteExpense } from "../../data/expenses.server";

function ExpenseListItem({ id, title, amount }) {
  const submit = useSubmit();
  const navigation = useNavigation();
  const isDeleting = navigation.state !== "idle";
  const fetcher = useFetcher();
  function deleteExpenseItemHandler(event) {
    const proceed = confirm("Are you sure? Do you want to delete this?");
    if (proceed) {
      fetcher.submit(null, {
        method: "DELETE",
        action: `/expenses/${id}`,
      });
    } else return;
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        <button
          onClick={deleteExpenseItemHandler}
          disabled={isDeleting}
          key={id}
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
        {/* <Form method="delete" action={`/expenses/${id}`}>
          <button>Delete</button>
        </Form> */}
        <Link to={id}>Edit</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;

export async function action({ request, params }) {
  try {
    await deleteExpense(params.id);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
