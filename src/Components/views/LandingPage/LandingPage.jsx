import React from "react";
import DashboardLayout from "../../~reusables/components/DashBoardLayout";
import ContentArea from "./ContentArea";

const LandingPage = () => {
  return (
    <div>
      <DashboardLayout>
          <ContentArea/>
      </DashboardLayout>
    </div>
  );
};

export default LandingPage;
