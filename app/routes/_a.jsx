import { Outlet } from "@remix-run/react";

export default function A() {
    return (
        <>
            <h1>pathless</h1>
            <Outlet />
        </>
    );
}