import React from 'react'
import Confirmation from "../../components/Confirmation"
import RequestConfirm from "../../assets/icons/RequestConfirmation"

export const RequestPage = () => {
  return (
  <Confirmation title="Yay!!" message1="Admin have been informed about your request." message2="Your request resolution" message3="time is 20 mins" message4="Thank you for your patience. Meanwhile browse our menu for a delicious meal." buttonName="Track Request" svg={<RequestConfirm />} /> 
  )
}


