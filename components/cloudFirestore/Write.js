
import firebase from 'firebase/app'
import 'firebase/firestore'
import {initFirebase} from '../../lib/firebase/firebase'

const WriteToCloudFirestore = () => {




    // const { user } = useUser()
    const sendData = () => {
        console.log('test');
        try {

            firebase.firestore().collection('myCollection').doc('my_document').set({
                string_data: 'Benjamin Carlson',
                number_data: 2,
              
            })
           
            alert('Data was successfully sent to cloud firestore!')
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    return (
        <div style={{ margin: '5px 0' }}>
            <button onClick={sendData} style={{ width: '100%' }}>Send Data To Cloud Firestore</button>
        </div>
    )
}

export default WriteToCloudFirestore


// https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-9