import {httpRequest} from "@/services/httpBase";

export async function registerUser(userData) {
  const {data} = await httpRequest.post('/account/registeruser',{
    ...userData
  });
  return data;
}