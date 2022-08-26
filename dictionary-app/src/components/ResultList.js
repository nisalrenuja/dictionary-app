import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { InputContext } from "../App";
import MeaningList from "./MeaningList";

axios.defaults.baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en";

const ResultList = () => {
  const { inputValue } = useContext(InputContext);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (param) => {
    try {
      setLoading(true);
      const res = await axios(`/${param}`);
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (inputValue.length) {
      fetchData(inputValue);
    }
  }, [inputValue]);

  if (loading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  if (error) {
    return (
      <h3 className="text-center mt-10 font-semibold text-gray-500">
        No Definition Found
      </h3>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      {response && (
        <div>
          <h3 className="text-2xl font-bold mt-4">Meaning & Definition:</h3>
          <MeaningList mean={response}/>
          <h3 className="text-2xl font-bold mt-4">Example:</h3>
          <h3 className="text-2xl font-bold mt-4">Synonym:</h3>
          <h3 className="text-2xl font-bold mt-4">Antonym:</h3>
        </div>
      )}
    </div>
  );
};

export default ResultList;
