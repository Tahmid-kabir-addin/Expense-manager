const DUMMY_EXPENSES = [
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


export function loader() {
    return DUMMY_EXPENSES;
}