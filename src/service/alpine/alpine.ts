/* eslint-disable no-template-curly-in-string */
import { generateUrl } from "@utils/serviceUtils";
import { requestHandler } from "../requestHandler";
import { BASE_URL } from "@/utils/constants";

export class Alpine {
  userLogin = (mobile_number: string, firebase_token: string) => {
    return requestHandler({
      method: "post",
      url: generateUrl(BASE_URL, "v1/users/customer/authenticate"),
      data: {
        mobile_number,
        firebase_token,
      },
    });
  };
  
  getClientProducts = (clientId: string) => {
    return requestHandler({
      method: "get",
      url: generateUrl(BASE_URL, "v1/products/client_products/" + clientId),
    });
  };

  getComplimentaryProductData = (id: string) => {
    return requestHandler({
      method: "get",
      url: generateUrl(BASE_URL, "v1/complimentary_order/find_order/" + id),
    });
  };
  
  // getClientProductsTax = (items: any) => {
  //   const productQuantities = Object.values(items).map((item: any) => ({
  //     product_id: item.id,
  //     quantity: item.qty
  //   }));
  //   return requestHandler({
  //     method: "post",
  //     url: generateUrl(BASE_URL, "orders/amount_breakup"),
  //     data: {
  //       product_quantities: productQuantities
  //     },
  //   });
  // };

   getClientProductsTax = (items: any) => {
    // Filter out items with availability set to false
    const availableItems = Object.values(items).filter((item: any) => item.availability);
  
    // Map the available items to product quantities
    const productQuantities = availableItems.map((item: any) => ({
      product_id: item.id,
      quantity: item.qty
    }));
  
    return requestHandler({
      method: "post",
      url: generateUrl(BASE_URL, "v1/orders/amount_breakup"),
      data: {
        product_quantities: productQuantities
      },
    });
  };
  
  complimenatryProductCategory = (clientId: string) => {
    return requestHandler({
      method: "get",
      url: generateUrl(BASE_URL, "v1/complimentary_products/client_products/" + clientId),
    });
  };
  getOrderHistory = (page: any) => {
    return requestHandler({
      method: "get",
      url: generateUrl(BASE_URL, "v1/orders/customer_orders?page=" + page),
    });
  };
  getTransactionStatus = (id: string) => {
    return requestHandler({
      method: "get",
      url: generateUrl(BASE_URL, "v1/payment/transaction_status/" + id),
    });
  };
  getOrderDetails = () => {
    return requestHandler({
      method: "get",
      url: generateUrl(BASE_URL, "v1/orders/customer_orders"),
    });
  };
  getOrderedDetails = (id: any) => {
    return requestHandler({
      method: "get",
      url: generateUrl(BASE_URL, "v1/orders/" + id),
    });
  };
  getComplimenatryProductHistory = (page: any) => {
    return requestHandler({
      method: "get",
      url: generateUrl(BASE_URL, "v1/complimentary_order/customer_orders?page=" + page + "&size=10"),
    });
  };
  postOrderDetails = (name: any, phone: any, instruction: any, firebaseToken: any, ChooseOption: any, items: any, clientId: any, source: any) => {
    const paymentSource = ChooseOption === "ONLINE" ? 'ONLINE' : 'OFFLINE';
    const orderItems = Object.values(items).map((item: any) => ({
      quantity: item.qty,
      product_id: item.id,
      ...(item.campaignName && { campaign_name: "Test" }),
    }));
    const x = parseInt(clientId);
    const body = {
      customer_name: name,
      customer_phone: phone,
      client_id: x,
      source: source,
      customization: instruction ?? ' ',
      order_items: orderItems,
      payment_source: paymentSource,
      firebase_token: firebaseToken,
    };

    return requestHandler({
      method: "post",
      url: generateUrl(BASE_URL, "v1/orders"),
      headers: {
        'Content-Type': 'application/json'
      },
      data: body,
    });
  };
  postComplimentaryOrder = (productId: any, textRequest: any, imageFile: any, source: any) => {
    const formData = new FormData();
    formData.append('product_id', productId ?? 0);
    formData.append('text', textRequest ?? '');
    formData.append('source', source);
    if (imageFile) {
      formData.append('image', imageFile);
    }

    return requestHandler({
      method: "post",
      url: generateUrl(BASE_URL, "v1/complimentary_order"),
      headers: {
        'Content-Type': 'application/multipart/form-data'
      },
      data: formData,
    });
  };
  signOut = () => {
    return requestHandler({
      method: "post",
      url: generateUrl(BASE_URL, "v1/users/logout"),
    });
  };
  getDownloadInvoice = (id:string) => {
    return requestHandler({
      method: "get",
      url: generateUrl(BASE_URL,"v1/orders/" + id + "/invoice"),
    });
  };
}

