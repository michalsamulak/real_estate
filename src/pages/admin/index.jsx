'use client'
import React from "react";
import { useAuthContext } from "../../contexts/AuthContext"
import { useRouter } from "next/navigation";
function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user === null) router.push("/")
    }, [router, user])

    return (<h1>Test page</h1>);
}

export default Page;