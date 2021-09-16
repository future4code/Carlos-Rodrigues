import { insertPost } from "../../data/post/insertPost";
import { Authenticator } from "../../services/Authenticator";
import { IdGenerator } from "../../services/IdGenerator";
import { authenticationData } from "../../types/authenticationData";

export const createPostBusiness = async ({ postData }: any) => {
  const authenticator = new Authenticator();
  
  const tokenData: authenticationData = authenticator.getTokenData(
    postData.token
  );

  const idGenerator = new IdGenerator();
  const id: string = idGenerator.generateId();

  await insertPost({
    id,
    ...postData,
  });
};
