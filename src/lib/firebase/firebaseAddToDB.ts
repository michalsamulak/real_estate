import { requestHandlerSet } from "../../utils/firebase/requestHandlers";



export default async function addData<T>(collection: string, id: string, data: T) {

    try {
        const result = requestHandlerSet(collection, id, data)
        return { result, error: null };
    } catch (error) {
        return { result: null, error };
    }

}

