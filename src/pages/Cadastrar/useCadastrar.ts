import api from '../../services/api';

export const UseCadastrar = () => {
  const casdastrar = async ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => {
    const data = { name, email, password };

    const response = await api.post('register', data);

    if (response?.status === 201) return true;
    return false;
  };

  const validarEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  return { casdastrar, validarEmail };
};
