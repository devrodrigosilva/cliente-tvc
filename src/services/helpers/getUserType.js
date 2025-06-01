import api from '../api';

export default async function getUserType() {
  try {
    const { data } = await api.get('users/getType');
    return data.userType;
  } catch (error) {
    return null;
  }
}
