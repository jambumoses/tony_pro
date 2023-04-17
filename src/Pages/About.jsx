import React from 'react'
import { constantActions } from "../store/constantSlice";
import { useDispatch, useSelector } from "react-redux";

export default function About() {

  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.constant.companyTitle)

  dispatch(constantActions.updatePageTitles(companyName+" . "+"About"));
  dispatch(constantActions.setCurrentPage("About"));

  return (
    <div>About</div>
  )
}
