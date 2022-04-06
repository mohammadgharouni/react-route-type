//@ts-ignore
import {
  useLocation,
  useParams as useRRDParams,
  useMatch,
  useInRouterContext,
} from "react-router-dom";
import { useRouter } from "next/router";

const useParams = () => {
  const hasRouter = useInRouterContext();

  if (hasRouter) {
    const params = useRRDParams();
    return params;
  }

  const { query } = useRouter();
  return query;
};

export { useLocation, useParams, useMatch };
