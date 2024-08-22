import { $hostAuth } from "./index";

export const createGoal = async (title, description, end_at, category = "") => {
  const { data } = await $hostAuth.post("goals/create", {
    title,
    description,
    end_at,
    category,
  });
  console.log("CREATED GOAL DATA:", data);
  return data;
};

export const getAllGoals = async () => {
  const { data } = await $hostAuth.get("goals/");
  console.log("ALL GOALS DATA:", data);
  return data;
};

export const getGoal = async (id) => {
  const { data } = await $hostAuth.get("goals/" + id);
  console.log("GOAL DATA:", data);
  return data;
};

export const updateGoal = async (
  id,
  title,
  description,
  end_at,
  category = ""
) => {
  const { data } = await $hostAuth.put("goals/" + id, {
    title,
    description,
    end_at,
    category,
  });
  console.log("UPDATED GOAL DATA:", data);
  return data;
};

export const deleteGoal = async (id) => {
  const { data } = await $hostAuth.delete("goals/" + id);
  console.log("DELETED GOAL DATA:", data);
  return data;
};
