import { UserButton } from "@clerk/nextjs";
import React from "react";

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <div>
      <p>DashboardPage</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
