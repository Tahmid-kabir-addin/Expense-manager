import { json, redirect } from "@remix-run/node";

export function loader({params}) {
    if(params['*'] == 'exp') return redirect('/expenses');

    return json({message: 'Not Found'}, {status: 404});
}