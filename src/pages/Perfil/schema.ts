import * as yup from 'yup';

export const profileFormSchema = yup.object({
  email: yup.string().required(),
  name: yup.string().required(),
  newPassword: yup
    .string()
    .oneOf(
      [yup.ref('confirmNewPassword'), undefined],
      'As senhas não coincidem',
    )
    .nullable(),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), undefined], 'As senhas não coincidem')
    .nullable(),
});

export type ProfileForm = yup.InferType<typeof profileFormSchema>;
