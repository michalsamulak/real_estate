import { requestHandlerGet } from "../../utils/firebase/requestHandlers";


export default async function getDocument() {

    try {
      const result =  requestHandlerGet('properties')
        return { result, error: null };
    } catch (err) {
        return { result: null, error: err };
    }
}




