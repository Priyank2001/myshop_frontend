import { Pagination } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminTopBar from "../AdminTopBar";
import { UserListPageActions } from "../../actions/ManageUserDataActions";
import UsersTable from "../utils/UsersTable";
function UsersListPage() {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const dispatch = useDispatch();
  const manageUsersDataReducer = useSelector(
    (state) => state.manageUsersDataReducer
  );
  const { getUserListByPage } = manageUsersDataReducer;
  const handleOnClickPagination = (event, value) => {
    setCurrentPageNumber(value);
  };
  useEffect(() => {}, [getUserListByPage]);
  useEffect(() => {
    dispatch(UserListPageActions.fetchUsersByPage(currentPageNumber));
  }, [currentPageNumber]);
  return (
    <div>
      <AdminTopBar />
      <h3> User Details</h3>
      {getUserListByPage.data !== null ? (
        <UsersTable data={getUserListByPage.data} />
      ) : (
        <></>
      )}
      <Pagination
        count={10}
        page={currentPageNumber}
        onChange={handleOnClickPagination}
      />
    </div>
  );
}

export default UsersListPage;
