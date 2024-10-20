"use client";
import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import { TicketPercent, LayoutDashboard, BadgePercent } from "lucide-react";

const StudentsHome: React.FC = () => {
  const router = useRouter(); // Initialize useRouter

  const onApply = () => {
    router.push("/students/apply"); // Redirect to /students/apply when the button is clicked
  };
  const onDashboard = () => {
    router.push("/students/dashboard");
  };

  const onDiscounts = () => {
    router.push("/students/discounts");
  };

  const onVerify = () => {
    router.push("/students/verify");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">For Students</h1>
      <p className="mb-4">
        Verify your credentials and access exclusive discounts.
      </p>
      <div className="flex flex-row gap-6">
        <Card title="Apply for Discount">
          <TicketPercent className="w-40 h-40 " />
          <p>
            Students can apply for discounts offered in various domains if they
            own a credential NFT in any of the enlisted institutions.
          </p>
          <Button onClick={onApply}>Apply</Button>{" "}
        </Card>
        <Card title="Student Dashboard">
          <LayoutDashboard className="w-40 h-40 " />
          <p>
            {" "}
            Verify Credentials, Check the status of your applications, owned
            credentials, and much more!
          </p>
          <Button onClick={onDashboard}>Dashboard</Button>{" "}
        </Card>
        <Card title="Check available discounts">
          <BadgePercent className="w-40 h-40 mb-6 " />
          <p> Explover various discounts available to a verified student</p>
          <Button onClick={onDiscounts}>Discounts</Button>{" "}
        </Card>
      </div>
    </div>
  );
  {
    /* Add more content about benefits for students */
  }
};

export default StudentsHome;
