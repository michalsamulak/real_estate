import useAddData from '../../../lib/hooks/useAddData';

const Sell = () => {
  const [addData, error] = useAddData();

  const handleAddData = async () => {
    const data = { name: 'John', age: 30 };
    await addData({ collection: 'users',id: 'test2', data });
  };
  
  return (
    <div><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <button onClick={handleAddData}>Add Data</button>
      {/* {result && <p>{result}</p>} */}
      {error && <p>{error.message}</p>}
    </div>
  );
};

  export default Sell