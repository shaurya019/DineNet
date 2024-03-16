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
  getClientProductsTax = (items:any) => {
    const productQuantities = Object.values(items).map((item:any) => ({
      product_id: item.id,
      quantity: item.qty
    }));
    return requestHandler({
      method: "post",
      url: generateUrl(BASE_URL, "orders/amount_breakup"),
      data: {
          product_quantities: productQuantities
      },
    });
  };
  complimenatryProductCategory = (client_id: any) => {
    return requestHandler({
      method: "get",
      url: generateUrl(BASE_URL, "complimentary_products/" + client_id),
    });
  };
  getOrderHistory = () => {
    return requestHandler({
      method: "get",
      url: generateUrl(BASE_URL,"orders/customer_orders"),
    });
  };
  getComplimenatryProductHistory = () => {
    return requestHandler({
      method: "get",
      url: generateUrl(BASE_URL,"complimentary_order/customer_orders"),
    });
  };
  postOrderDetails = (name:any, phone:any, firebaseToken:any, ChooseOption:any) => {
    const paymentSource = ChooseOption === "Option1" ? 'ONLINE' : 'OFFLINE';
    const body = {
      customer_name: name,
      customer_phone: phone,
      client_id: 1,
      source: 'A',
      customization: 'A',
      order_items: [
        {
          quantity: 1,
          product_id: 1,
          campaign_name: 'TEST'
        }
      ],
      payment_source: paymentSource,
      firebase_token: firebaseToken,
    };
  
    return requestHandler({
      method: "post",
      url: generateUrl(BASE_URL, "orders"),
      headers: {
        'Content-Type': 'application/json'
      },
      data: body,
    });
  };
  postComplimentaryOrder = (textRequest:any,imageFile:any) => {
   
    const formData = new FormData();
    formData.append('text', textRequest ?? '');
    if (imageFile) {
      console.log('imageFilehere', imageFile)
      formData.append('image', imageFile);
    }

    return requestHandler({
      method: "post",
      url: generateUrl(BASE_URL, "complimentary_order"),
      headers: {
        'Content-Type': 'application/multipart/form-data'
      },
      data: formData,
    });
  };
}


