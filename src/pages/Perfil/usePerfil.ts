import { useForm } from 'react-hook-form';
import api from '../../services/api';
import { ProfileForm, profileFormSchema } from './schema';
import { UserInfosProps } from './Perfil';
import { useEffect, useMemo, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

export const UseProfile = () => {
  const { register, formState, setValue, watch, reset, control } =
    useForm<ProfileForm>({
      resolver: yupResolver(profileFormSchema),
      defaultValues: {
        email: '',
        name: '',
        newPassword: '',
      },
      mode: 'onChange',
    });
  const [userInfos, setUserInfos] = useState<UserInfosProps>();

  useEffect(() => {
    fetchProfileInfo().then((newUserInfos) => {
      setUserInfos(newUserInfos);
    });
  }, []);

  useEffect(() => {
    fetchProfileInfo().then((newUserInfos) => {
      setUserInfos(newUserInfos);
      if (newUserInfos) {
        reset({
          email: newUserInfos.email,
          name: newUserInfos.name,
        });
      }
    });
  }, []);

  const fetchProfileInfo = async () => {
    const response = await api.get<UserInfosProps>('profile/infos');
    return response?.data;
  };

  const form = watch();
  const { newPassword, confirmNewPassword, name } = form;

  const handleSubmit = async () => {
    const data = { newPassword, name };
    const response = await api.put('profile/updatePassword', data);

    return response?.data;
  };

  const errorPassword = useMemo(() => {
    if (newPassword || confirmNewPassword) {
      if (newPassword !== confirmNewPassword) return 'Senhas devem ser igual';
    }

    if (newPassword && newPassword?.length < 8)
      return 'A senha deve ter no mínimo 8 caracteres.';

    return '';
  }, [newPassword, confirmNewPassword]);

  const isButtonDisabled = useMemo(() => {
    if (
      !newPassword ||
      !confirmNewPassword ||
      newPassword !== confirmNewPassword ||
      newPassword.length < 8
    )
      return true;
    return false;
  }, [newPassword, confirmNewPassword]);

  return {
    fetchProfileInfo,
    register,
    handleSubmit,
    formState,
    setValue,
    watch,
    reset,
    control,
    errorPassword,
    isButtonDisabled,
    userInfos,
    setUserInfos,
    name,
  };
};
