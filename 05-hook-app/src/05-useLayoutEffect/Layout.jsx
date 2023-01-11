import { useCounter, useFetch } from "../Hooks";
import { Quote, LoadingQuote } from "../Components";

export const Layout = () => {
  const { counter, incrementar, reducir, resetear } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://api.quotable.io/quotes?page=${counter}&limit=1`
  );
  const { author, content } = !!data && data.results[0];

  return (
    <>
      <hr />
      <h1>Breaking Bad Quotes</h1>

      {isLoading ? (
        <LoadingQuote />
      ) : (
        <Quote content={content} author={author} />
      )}

      <button className={"btn btn-primary"} onClick={() => incrementar()}>
        Next quote
      </button>
    </> 
  );
};
