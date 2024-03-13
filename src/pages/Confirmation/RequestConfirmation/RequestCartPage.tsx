import React from 'react'
import Confirmation from "@/components/Confirmation"
import RequestConfirm from "@/assets/icons/RequestConfirmation"
import { useLocation } from 'react-router-dom';

export const RequestCartPage = () => {
  const location = useLocation();
  const { category, requestText } = location.state || {};
  return (
  <Confirmation title="Yay!!" message1="Admin have been informed about your request." message2="Your request resolution" message3="time is 20 mins" message4="Thank you for your patience. Meanwhile browse our menu for a delicious meal." buttonName="Track Request" category = {category} requestText = {requestText} svg={<RequestConfirm />} /> 
  )
}


