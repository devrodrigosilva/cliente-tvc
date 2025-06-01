import { USER_NAME_KEY } from '../auth'

export const getUserName = async () => {
  try {
    const userName = await localStorage.getItem(USER_NAME_KEY)
    return userName
  } catch (error) {
    return ''
  }
}
