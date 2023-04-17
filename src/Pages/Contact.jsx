import React from 'react'
import { constantActions } from "../store/constantSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Contact() {

  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.constant.companyTitle)

  dispatch(constantActions.updatePageTitles(companyName+" . "+"Contact"));
  dispatch(constantActions.setCurrentPage("Contact"));

  return (
    <div>Contact</div>
  )
}
