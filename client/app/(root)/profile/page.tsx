"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

//Contexts
import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";
import { useOrder } from "@/context/OrderContext";

//Components
import LoadingScreen from "@/components/Loading/LoadingScreen";
import UserInfo from "@/components/Home/Profile/UserInfo";
import UserAddress from "@/components/Home/Profile/UserAddress";
import UserOrders from "@/components/Home/Profile/UserOrders";

export default function ProfilePage() {
  const router = useRouter();
  const { fetchOrders } = useOrder();
  const { user, authLogout } = useAuth();
  const { openModal } = useModal();

  useEffect(() => {
    fetchOrders();
    // eslint-disable-next-line
  }, []);

  if (!user) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex flex-col md:flex-row max-w-[800px] justify-center mx-auto gap-5 my-5">
      <div className="flex flex-col flex-1 border p-4 py-[20px] rounded-md shadow-sm gap-4">
        <UserInfo email={user?.email as string} />
        <UserAddress
          title={user?.address?.title as string}
          details={user?.address?.details as string}
          contactNumber={user?.address?.contactNumber as string}
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={() => openModal("password")}
            className="font-semibold border p-2 hover:border-black transition-all ease-linear"
          >
            Change Password
          </button>
          <button
            onClick={authLogout}
            className="font-semibold border p-2 hover:border-red-500 hover:text-red-500 transition-all ease-linear"
          >
            Log out
          </button>
        </div>
        {user.role === "ADMIN" && (
          <button
            onClick={() => router.push("/dashboard")}
            className="font-semibold border p-2 hover:border-black transition-all ease-linear"
          >
            Admin Dashboard
          </button>
        )}
      </div>
      <div className="flex flex-col flex-1 border p-4 rounded-md shadow-sm">
        <h1 className="text-md font-bold">Orders</h1>
        <div className="w-full h-[2px] bg-black my-2" />
        <UserOrders />
      </div>
    </div>
  );
}
