import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setErro] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error(
              "Nao foi possivel buscar os dados para esse recurso..."
            );
          }
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setData(data);
          setIsPending(false);
          setErro(null);
        })
        .catch((erro) => {
          console.log(erro.message);
          setErro(erro.message);
          setIsPending(false);
        });
    }, 1200);
  }, [url]);
  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
