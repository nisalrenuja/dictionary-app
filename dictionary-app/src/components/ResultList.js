import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { InputContext } from "../App";
import Antonym from "./Antonym";
import Example from "./Example";
import MeaningList from "./MeaningList";
import Synonym from "./Synonym";

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
    return (
      <div className="flex flex-col space-y-3 animate-pulse p-4 container mx-auto max-w-2xl">
        <div className="h-6 bg-gray-300 mt-5 rounded-md"></div>
        <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
        <div className="h-8 bg-gray-300 mt-5 rounded-md"></div>
        <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl md:text-3xl">
            Sorry, we couldn't find the definition for this word.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl mb-10">
      {response && (
        <div>
          <h3 className="text-2xl font-bold mt-4">Meaning & Definitions:</h3>
          <MeaningList mean={response} />
          <h3 className="text-2xl font-bold mt-4">Example:</h3>
          <Example mean={response} />
          <br />

          {/* <h3 className="text-2xl font-bold mt-4">Synonym:</h3>
          <Synonym mean={response} />
          <h3 className="text-2xl font-bold mt-4">Antonym:</h3>
          <Antonym mean={response} /> */}
        </div>
      )}
    </div>
  );
};

export default ResultList;
