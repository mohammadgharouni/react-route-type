import { useMemo } from "react";
import {
  useLocation as useRRDLocation,
  useParams,
  useMatch,
} from "react-router-dom";

function useLocation() {
  const { search, pathname } = useRRDLocation();
  return useMemo(
    () =>
      ({
        query: Object.fromEntries(new URLSearchParams(search).entries()),
        pathname,
      } as { pathname: string; query: object }),
    [search]
  );
}

export { useLocation, useParams, useMatch };
