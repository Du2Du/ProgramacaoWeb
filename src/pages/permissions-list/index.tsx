import Router from "next/router";
import React, { useEffect } from "react";
import { FixedHead } from "../../components";
import { useUserContext } from "../../global-context";
import { WithAuth } from "../../global-hoc";
import { PermissionsListMain } from "../../page-components";
import { Header } from "../../page-components/home";
import { routesName } from "../../routes-name";
import { PermissionsGroupName } from "../../utils";

const PermissionsList: React.FC = WithAuth(() => {
  const { userData } = useUserContext();

  useEffect(() => {
    if (
      userData?.permissionsGroup?.name !==
      PermissionsGroupName.SUPER_ADMINISTRATOR
    )
      Router.push(routesName.HOME);
  }, [userData]);
  return (
    <>
      <FixedHead title="Permissões" />
      <Header />
      <PermissionsListMain />
    </>
  );
}, true);

export default PermissionsList;
