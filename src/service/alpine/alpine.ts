import { generateUrl } from "../../utils/serviceUtils";
import { requestHandler } from "../requestHandler";
const BASE_URL =
  "http://alpine-staging-lb-1249159613.ap-south-1.elb.amazonaws.com/api/v1";
class Alpine {
  userLogin = (mobile_number: string, password: string) => {
    return requestHandler({
      method: "post",
      url: generateUrl(BASE_URL, "users/login"),
      data: {
        mobile_number,
        password,
      },
    });
  };
}
const AlpineInstance = new Alpine()
export default AlpineInstance;
