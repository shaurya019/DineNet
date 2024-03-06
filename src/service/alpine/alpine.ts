import { generateUrl } from "@utils/serviceUtils";
import { requestHandler } from "../requestHandler";
const BASE_URL =
  "http://alpine-staging-lb-1249159613.ap-south-1.elb.amazonaws.com/api/v1";
export class Alpine {
  userLogin = (mobile_number: string, firebase_token: string) => {
    return requestHandler({
      method: "post",
      url: generateUrl(BASE_URL, "users/customer/authenticate"),
      data: {
        mobile_number,
        firebase_token,
      },
    });
  };
  getClientProducts = (client_id: string) => {
    return requestHandler({
      method: "get",
      url: generateUrl(BASE_URL, "products/client_products/" + client_id),
    });
  };
}

