import { $hostAuth } from "./index";

export const createGroup = async () => {
  const { data } = await $hostAuth.post("groups/create");
  console.log("CREATED GROUP DATA:", data);
  return data;
};

export const loginGroup = async (groupId) => {
  const { data } = await $hostAuth.post("groups/login", { groupId });
  console.log("ALL GOALS DATA:", data);
  return data;
};

export const getGroup = async () => {
  const { data } = await $hostAuth.get("groups/info");
  console.log("GROUP DATA:", data);
  return data;
};

export const membersGroup = async () => {
  const { data } = await $hostAuth.get("groups/members");
  console.log("GROUP MEMBERS DATA:", data);
  return data;
};

export const updateGroup = async (name) => {
  const { data } = await $hostAuth.put("groups/update", { name });
  console.log("UPDATED GROUP DATA:", data);
  return data;
};

export const deleteGroup = async (id) => {
  const { data } = await $hostAuth.delete("groups/delete/" + id);
  console.log("DELETED GOAL DATA:", data);
  return data;
};
