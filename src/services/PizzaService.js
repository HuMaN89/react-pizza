import { useHttp } from "../hooks/http.hook";

const usePizzalService = () => {
  const { loading, setLoading, error, request, clearError } = useHttp();

  const _apiBase = "https://62d838df9c8b5185c78591dc.mockapi.io/pizzas";

  const getAllPizzas = async (offset) => {
    const res = await request(`${_apiBase}`);
    return res;
  };
  const _transformCharacter = (char) => {
    return {
      name: char.name,
      nickname: char.nickname,
      thumbnail: char.img,
      charID: char.char_id,
      portrayed: char.portrayed,
      status: char.status,
      clazz: "char__item",
    };
  };
  return {
    error,
    loading,
    clearError,
    getAllPizzas,
  };
};

export default usePizzalService;
