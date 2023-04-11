import React, { PropsWithChildren } from "react";
import ErrorBoundary from "@/ErrorBoundary";
import NavBar from "../navbar/navbar";
import { AuthContextProvider } from "../../lib/context";
const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <ErrorBoundary fallback={<div>Sorry, something went wrong.</div>}>
                
                <AuthContextProvider><NavBar />{children}</AuthContextProvider>
            </ErrorBoundary>
        </>
    );
};
export default Layout;
