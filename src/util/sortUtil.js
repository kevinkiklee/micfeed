export const byAuthorAsc = (a, b) => {
  const aName = `${a.profile.first_name} ${a.profile.last_name}`;
  const bName = `${b.profile.first_name} ${b.profile.last_name}`;

  if(aName < bName) return -1;
  if(aName > bName) return 1;
  return 0;
};
