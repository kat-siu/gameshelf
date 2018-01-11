export const createGameshelfMembership = gameshelf_membership => {
  return $.ajax({
    url: '/api/gameshelf_memberships',
    method: 'post',
    data: { gameshelf_membership },
  });
};

export const deleteGameshelfMembership = id => {
  return $.ajax({
    url: `/api/gameshelf_memberships/${id}`,
    method: 'delete'
  });
};
