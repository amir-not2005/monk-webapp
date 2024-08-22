import { $hostAuth } from "./index";

export const createGoalsCompletion = async (goal_id, commentary) => {
  const { data } = await $hostAuth.post("/goals_completion/create", {
    goal_id,
    commentary,
  });
  console.log("CREATE GOAL COMPLETION DATA", data);
  return data;
};

export const getAllGoalsCompletion = async (goal_id) => {
  const { data } = await $hostAuth.get("/goals_completion/" + goal_id, {
    goal_id,
  });
  console.log("GOALS COMPLETION DATA", data);
  return data;
};

export const getGoalCompletion = async (goal_id, completion_id) => {
  const { data } = await $hostAuth.get(
    "/goals_completion/" + goal_id + "/" + completion_id,
    {
      goal_id,
      completion_id,
    }
  );
  console.log("GOAL COMPLETION DATA", data);
  return data;
};

export const deleteGoalCompletion = async (goal_id, completion_id) => {
  const { data } = await $hostAuth.delete(
    "/goals_completion/" + goal_id + "/" + completion_id,
    {
      goal_id,
      completion_id,
    }
  );
  console.log("DELETED GOAL COMPLETION DATA", data);
  return data;
};
