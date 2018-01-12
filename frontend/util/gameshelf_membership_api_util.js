export const createGameshelfMembership = gameshelf_membership => {
  return $.ajax({
    url: '/api/gameshelf_memberships',
    method: 'post',
    data: { gameshelf_membership },
  });
};

export const deleteGameshelfMembership = gameshelf_membership => {
  console.log("meow")
  return $.ajax({
    url: '/api/gameshelf_memberships',
    method: 'delete',
    data: { gameshelf_membership }
  });
};
