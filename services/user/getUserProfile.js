import {httpRequest} from "@/services/httpBase";

export async function getUserProfile(id) {
  const {data} = await httpRequest.get(`/account/getuserinfo?id=${id}`);
  return data;
}