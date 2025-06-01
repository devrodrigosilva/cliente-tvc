export default async function getLocalUserId() {
  try {
    const id = await localStorage.getItem('@tvc/userId');
    return id;
  } catch (error) {
    return null;
  }
}
