import api from '../../services/api';
import { setId, setToken, setUserName, setUserType } from '../../services/auth';
import getUserType from '../../services/helpers/getUserType';

export const UsePodcast = () => {
  const logar = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {};

  return { logar };
};
