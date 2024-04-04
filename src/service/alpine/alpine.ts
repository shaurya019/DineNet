/* eslint-disable no-template-curly-in-string */
import { generateUrl } from "@utils/serviceUtils";
import { requestHandler } from "../requestHandler";
const BASE_URL =
  "https://staging-api.cubik.in/api/v1";
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
  getComplimentaryProductData = (client_id: string) => {
    return requestHandler({
      method: "get",
      url: generateUrl(BASE_URL, "complimentary_order/find_order/" + client_id),
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
  getOrderHistory = (page: any) => {
    return requestHandler({
      method: "get",
      url: generateUrl(BASE_URL,"orders/customer_orders?page=" + page),
    });
  };
  getTransactionStatus = (id: string) => {
    return requestHandler({
      method: "get",
      url: generateUrl(BASE_URL,"payment/transaction_status/"+ id),
    });
  };
  getOrderDetails = () => {
    return requestHandler({
      method: "get",
      url: generateUrl(BASE_URL,"orders/customer_orders"),
    });
  };
  getOrderedDetails = (id:string) => {
    console.log("AlpineId",id,typeof id);
    return requestHandler({
      method: "get",
      url: generateUrl(BASE_URL,"orders/" + id),
    });
  };
  getComplimenatryProductHistory = (page:any) => {
    return requestHandler({
      method: "get",
      url: generateUrl(BASE_URL,"complimentary_order/customer_orders?page=" + page + "&size=10"),
    });
  };
  postOrderDetails = (name:any, phone:any,instruction:any, firebaseToken:any, ChooseOption:any,items:any) => {
    // console.log("postOrderDetails",instruction,typeof instruction);
    const paymentSource = ChooseOption === "ONLINE" ? 'ONLINE' : 'OFFLINE';
    const orderItems = Object.values(items).map((item:any) => ({
      quantity: item.qty,
      product_id: item.id,
      campaign_name: 'TEST'
    }));
    const body = {
      customer_name: name,
      customer_phone: phone,
      client_id: 1,
      source: 'Room 1',
      customization: instruction ?? "Need spicy",
      order_items: orderItems,
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
  postComplimentaryOrder = (productId:any,textRequest:any,imageFile:any) => {
    const formData = new FormData();
    formData.append('product_id',productId ?? 0);
    formData.append('text', textRequest ?? '');
    formData.append('source','Room 1');
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
  signOut = ()=>{
    return requestHandler({
      method: "post",
      url: generateUrl(BASE_URL, "users/logout"),
    });
  }
}


