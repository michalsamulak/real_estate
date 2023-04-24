import { requestHandlerDelete } from "../../utils/firebase/requestHandlers";



export default async function removeData(collection: string, id: string) {

    try {
        const result = requestHandlerDelete(collection, id)
        return { result, error: null };
    } catch (error) {
        return { result: null, error };
    }

}

