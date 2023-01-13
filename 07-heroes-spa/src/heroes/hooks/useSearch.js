import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";
import { useForm } from "../../hooks";

export const useSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    navigate(`?q=${searchText}`);
  };

  return {
    q,
    heroes,
    showSearch,
    showError,
    searchText,
    onInputChange,
    handleSearchSubmit
  };
};
