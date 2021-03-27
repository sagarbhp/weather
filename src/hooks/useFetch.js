/******************************************************************
# useFetch is a custom hook to simplify api calls using fetch function
# It returns 3 states data, error, and loading
# On successful api call the json data is set in the data state 
# While api call is being made, the loading state becomes true
# If error is encountered, the error state holds the error object
**********************************************************************/

import { useState, useEffect } from "react";

function useFetch(link) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setData(null);
      setError(null);
      try {
        let response = await fetch(link);
        if (response.ok) {
          let data = await response.json();
          setData(data);
          setLoading(null);
        } else {
          let data = await response.json();
          setError(data);
          setLoading(null);
        }
      } catch (err) {
        setError(true);
        setLoading(null);
      }
    };
    if (link) {
      getData();
    }
  }, [link]);

  return { data, error, loading };
}

export default useFetch;
