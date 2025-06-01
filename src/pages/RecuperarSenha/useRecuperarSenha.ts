import api from '../../services/api';
import { setId, setToken, setUserName, setUserType } from '../../services/auth';
import getUserType from '../../services/helpers/getUserType';

export const useRecuperarSenha = () => {
  const enviarCodigo = async ({ email }: { email: string }) => {
    api.post('changePasswordCode', { email });
  };

  const trocarDeSenha = async ({
    email,
    password,
    code,
  }: {
    email: string;
    password: string;
    code: string;
  }) => {
    api.post('changePassword', { email, password, code });
  };

  return { enviarCodigo, trocarDeSenha };
};
