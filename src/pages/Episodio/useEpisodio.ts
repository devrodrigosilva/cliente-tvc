import api from '../../services/api';

export const UseEpisodio = () => {
  const fetchEpisodio = async ({ id }: { id: string }) => {
    const episodio = (await api.get(`episodes/${id}`))?.data || {};
    return episodio;
  };

  const fetchComentarios = async ({ episodeId }: { episodeId: string }) => {
    const comentarios =
      (await api.get(`comments/by-episode/${episodeId}`))?.data || [];
    return comentarios;
  };

  const saveComment = async ({
    comment,
    episodeId,
  }: {
    comment: string;
    episodeId: string;
  }) => {
    const data = {
      comment,
      episodeId,
    };

    await api.post(`comments`, data);
  };

  const deleteComment = async ({ id }: { id: string }) => {
    await api.delete(`comments/${id}`);
  };

  return { fetchEpisodio, fetchComentarios, saveComment, deleteComment };
};
