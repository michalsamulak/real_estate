import { requestHandlerSet } from "../utils/firebase/requestHandlers";



export default async function addData(collection: string, id: string, data: any) {



    try {

        const result = requestHandlerSet(collection, id, data)

        return { result, error: null };


    } catch (err) {
        const error = err;
        return { result: null, error };

    }

}


