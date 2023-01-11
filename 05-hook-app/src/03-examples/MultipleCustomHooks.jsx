import {useFetch} from "../Hooks/useFetch";

export const MultipleCustomHooks = () => {

    const {data, isLoading, hasError} =
        useFetch('https://api.quotable.io/quotes?page=1&limit=1')
    const { author, content } = !!data && data.results[0];

    return (
        <>
            <hr />
            <h1>Breaking Bad Quotes</h1>

            {
                (isLoading) ? (
                    <div className={"alert alert-info text-center"}>
                        Loading...
                    </div>
                ) : (
                    <blockquote className={"blockquote text-end"}>
                        <p className={"mb-1"}>{content}</p>
                        <footer className={"blockquote-footer"}>{author}</footer>
                    </blockquote>
                )
            }

            <button className={"btn btn-primary"}>
                Next quote VIDEO 127
            </button>
        </>
    )
}