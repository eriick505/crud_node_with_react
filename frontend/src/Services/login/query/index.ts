import { useMutation } from "react-query";
import { USER_INFO_POST, USER_LOGIN_POST } from "Services/login";

import type { UserBodyGetRequest } from "Types/user";

export function useDataUserMutation() {
  return useMutation(
    (token: string) =>
      USER_INFO_POST(token).then((r) => ({ result: r.data, status: r.status })),
    {
      onMutate: () => {
        console.log("algo on mutate");
      },
    }
  );
}

export function useLoginUserMutation() {
  return useMutation((body: UserBodyGetRequest) =>
    USER_LOGIN_POST(body).then((r) => ({
      token: r.data.token,
      status: r.status,
    }))
  );
}
