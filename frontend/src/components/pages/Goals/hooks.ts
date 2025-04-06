import { useEffect, useState } from "react";
import * as types from "types";
import { useApi } from "@/hooks/useApi";
import { API_ENDPOINTS } from "@/api/apiEndpoints";

export const useGoals = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { data: activeGoals, loading: activeGoalLoading } = useApi<
    types.Goal[]
  >({
    url: API_ENDPOINTS.getGoals.url,
    method: API_ENDPOINTS.getGoals.method,
    queryPrams: { status: "active" },
  });
  const { data: inactiveGoals, loading: inactivevGoalsLoading } = useApi<
    types.Goal[]
  >({
    url: API_ENDPOINTS.getGoals.url,
    method: API_ENDPOINTS.getGoals.method,
    queryPrams: { status: ["completed", "abandon"] },
  });

  useEffect(() => {
    setIsLoading(activeGoalLoading || inactivevGoalsLoading);
  }, [activeGoalLoading, inactivevGoalsLoading]);

  return {
    activeGoals,
    inactiveGoals,
    isLoading,
  };
};
