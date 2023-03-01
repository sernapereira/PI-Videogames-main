import { useState } from "react";
import { useDispatch} from "react-redux";
import { postVideogames } from "../../redux/actions";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const dispatch = useDispatch();

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handlerBlur = (e) => {
    handlerChange(e);
    setErrors(validateForm(form));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      alert("Juegos subido con exito")
      setLoading(true);
      dispatch(postVideogames(form));

      setForm({
        name: "",
        description: "",
        platforms: [],
        background_image: "",
        Fecha: "",
        rating: "",
        genres: [],
      });
      setLoading(false)
      
      setResponse(true)
    } else {
      return;
    }
  };

  const handlerSelectGenres = (e) => {
    setForm({
      ...form,
      genres: [...form.genres, e.target.value],
    });
  };

  const handlerSelectPlstaforms = (e) => {
    setForm({
      ...form,
      platforms: [...form.platforms, e.target.value],
    });
  };

  return {
    form,
    setForm,
    errors,
    loading,
    response,
    handlerChange,
    handlerBlur,
    handlerSubmit,
    handlerSelectGenres,
    handlerSelectPlstaforms,
  };
};
