import { Method } from "axios";

interface ApiEndpoint {
  url: string;
  method: Method;
}

export const API_ENDPOINTS: { [key: string]: ApiEndpoint } = {
  getGoals: {
    url: "/goals",
    method: "GET",
  },
};
