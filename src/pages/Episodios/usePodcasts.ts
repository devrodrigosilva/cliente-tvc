import api from '../../services/api';
import { setId, setToken, setUserName, setUserType } from '../../services/auth';
import getUserType from '../../services/helpers/getUserType';

export const UseLogin = () => {
  const logar = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const data = { email, password };

    const response = await api.post('logar', data);

    if (response?.status !== 201) return false;

    const { token, id, userName } = response?.data;

    if (id) {
      setToken(token);
      setId(id);
      setUserName(userName);

      const userType = await getUserType();
      setUserType(userType);

      return { id, token, userName };
    } else return false;
  };

  return { logar };
};
