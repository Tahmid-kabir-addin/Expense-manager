import {
  Form,
  Link,
  useActionData,
  useMatches,
  useNavigation,
  useParams,
} from "@remix-run/react";

function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10
  const errorData = useActionData();
  const routes = useMatches();
  const { id } = useParams();
  let expense = null;

  // catch parent data using useMatches()
  if (routes.length > 2)
    expense = routes
      .filter((route) => route.id === "routes/expenses")[0]
      .data.filter((obj) => obj.id === id)[0];

  // const function submitHandler(event) {
  //     event.preventDefault();
  //     // validation or other codes

  //     submit(event.target, {
  //         method: 'post',
  //         // action: '/expenses/add'
  //     })
  // }

  const navigation = useNavigation();

  const isSubmitting = navigation.state !== "idle";

  let { title, amount, date } = expense ?? { title: "", amount: "", date: "" };
  if (date !== "") {
    date = new Date(date);
    date = date.toISOString().substring(0, 10);
  }
  console.log(title, amount, date);

  return (
    <Form
      method={expense ? "patch" : "post"}
      className="form"
      id="expense-form"
    >
      <p>
        <label htmlFor="title">Expense Title</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          maxLength={30}
          defaultValue={title}
        />
      </p>

      <div className="form-row">
        <p>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="0"
            step="0.01"
            required
            defaultValue={amount}
          />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            max={today}
            required
            defaultValue={date}
          />
        </p>
      </div>
      {errorData &&
        Object.values(errorData).map((err) => (
          <ul>
            <li key={err}>{err}</li>
          </ul>
        ))}
      <div className="form-actions">
        <button disabled={isSubmitting}>
          {" "}
          {isSubmitting ? "Saving..." : "Save Expense"}
        </button>
        <Link to="..">Cancel</Link>
      </div>
    </Form>
  );
}

export default ExpenseForm;
