import React, { useState } from "react";
import { onAuthStateChanged, User, getAuth } from "firebase/auth";
import firebase_app from "../lib/firebase/firebase";

const auth = getAuth(firebase_app);

// export const AuthContext = React.createContext({});
// export const useAuthContext = () => React.useContext(AuthContext);

type IUser = User | null;
type ContextState = { user: IUser };

// AuthContext

export const FirebaseAuthContext = React.createContext<ContextState>(
    {} as ContextState
);

export const useAuthContext = () => React.useContext(FirebaseAuthContext);

export const AuthContextProvider = ({ children }: any) => {
    const [user, setUser] = React.useState<User | null>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            // if (user) {
            //     setUser(user);
            // } else {
            //     setUser(null);
            // }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <FirebaseAuthContext.Provider value={{ user }}>
            {loading ? <div>Loading...</div> : children}
        </FirebaseAuthContext.Provider>
    );
};
