import React from "react";
import { useSelector } from "react-redux";

function DashEmail({data}) {
  return (
    <div className="dashContentItem-list">
      <span className="dashContentItem-list-title">{data.email}</span>
      <span className="dashContentItem-list-buttons">
        <button>
          <i className="fa fa-save"></i>
        </button>
      </span>
    </div>
  );
}

export default function DashEmails() {
  const dashEmailList = useSelector(
    (state) => state.constant.data.dashboardData.emailList
  );
  return (
    <>
      <div className="DashHeader">
        <h2>Email List</h2>
        <div className="search-cont">
          <input type="search" name="" placeholder="Search For Email" id="" />
        </div>
      </div>
      <section className="DashContentContainer">
        {
          dashEmailList.map(function(item){
            return <DashEmail key={item._id} data={item}/>
          })
        }
      </section>
    </>
  );
}
