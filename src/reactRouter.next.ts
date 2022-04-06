//@ts-ignore
import {
  useLocation as useRRDLocation,
  useParams as useRRDParams,
  useMatch,
  useInRouterContext,
} from "react-router-dom";
import { useRouter } from "next/router";
import { useMemo } from "react";

const useParams = () => {
  const hasRouter = useInRouterContext();

  if (hasRouter) {
    const params = useRRDParams();
    return params;
  }

  const { query } = useRouter();
  return query;
};

function useReactLocation() {
  const { search, pathname } = useRRDLocation();
  return useMemo(
    () =>
      ({
        query: Object.fromEntries(new URLSearchParams(search).entries()),
        pathname,
      } as any),
    [search]
  );
}

function useLocation() {
  const hasRouter = useInRouterContext();
  const location = (
    hasRouter
      ? // eslint-disable-next-line react-hooks/rules-of-hooks
        useReactLocation()
      : useRouter()
  ) as {
    pathname: string;
    query: object;
  };

  return location;
}

export { useLocation, useParams, useMatch };
