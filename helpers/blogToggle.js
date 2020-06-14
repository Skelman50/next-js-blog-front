export const blogToggle = (id, list) => {
  const newList = [...list];
  const isNotEmpty = newList.findIndex((element) => element === id);

  if (isNotEmpty !== -1) {
    newList.splice(isNotEmpty, 1);
    return newList;
  }
  newList.push(id);
  return newList;
};
