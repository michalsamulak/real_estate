import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User, getAuth } from "firebase/auth";
import firebase_app from "../firebase/firebase";
import data from "../../data/staticData.json"

const auth = getAuth(firebase_app);

type IUser = User | null;
type ISearch = typeof data | null
type ContextState = { user: IUser, search: ISearch, updateSearch: any };


export const AuthContext = createContext<ContextState>(
    {} as ContextState
);

export const SearchContext = createContext<any>('')

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: any) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState<ISearch | null>(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const updateSearch = (value: any) => {
        setSearch(value)
    }

    return (
        <AuthContext.Provider value={{ user, search, updateSearch }}>
            {/* <SearchContext.Provider value={updateSearch}> */}

            {loading ? <div>Loading...</div> : children}
            {/* </SearchContext.Provider> */}
        </AuthContext.Provider>
    );
};
