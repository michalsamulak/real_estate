// import React from 'react'
// import addData from '../../../lib/firebase/firebaseAddToDB'


// const Sell = () => {
  


//   const handleForm = async () => {
//     const data = {
//       name: 'John snow2',
//       house: 'Stark2'
//     }
//     const { result, error } = await addData('users', 'user-id2ssss', data)
//     console.log(result);
//     if (error) {
//       return console.log(error)
//     }
//   }

//   return (
//     <div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
//        tets
//        <button onClick={handleForm}>clic</button>
//     </div>
//   )
// }



import useAddData from '../../../lib/hooks/useAddData';

const Sell = () => {
  const [addData, result, error] = useAddData();

  const handleAddData = async () => {
    const data = { name: 'John', age: 30 };
    await addData({ collection: 'users',id: 'test2', data });
  };
  
  return (
    <div><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <button onClick={handleAddData}>Add Data</button>
      {result && <p>{result}</p>}
      {error && <p>{error.message}</p>}
    </div>
  );
};

  export default Sell