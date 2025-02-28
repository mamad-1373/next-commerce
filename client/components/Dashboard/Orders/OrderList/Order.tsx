import { OrderListProps } from "@/lib/types";

export default function Order({
  orderId,
  name,
  contact,
  orderStatus,
  orderTotal,
  orderDate,
}: OrderListProps) {
  const status = {
    preparing: <Preparing />,
    shipping: <Shipping />,
    delivered: <Delivered />,
  }[orderStatus];

  return (
    <li className="flex justify-between items-center text-xs md:text-base border-b py-2 px-3">
      <div className="flex flex-1 items-start justify-start">
        <span className="text-gray-500">{orderId}</span>
      </div>
      <div className="flex flex-1 items-start justify-start">
        <span className="font-semibold">{name}</span>
      </div>
      <div className="flex flex-1 items-start justify-start">
        <span>{contact}</span>
      </div>
      <div className="hidden md:flex flex-1 items-start justify-start">
        <span>{"$" + orderTotal}</span>
      </div>
      <div className="flex flex-1 items-start justify-start">{status}</div>
      <div className="flex-1 items-start justify-start hidden md:flex">
        <span>{orderDate}</span>
      </div>
    </li>
  );
}

const Preparing = () => {
  return (
    <div className="bg-orange-100 text-orange-600 py-1 px-2 rounded-full text-xs font-semibold md:text-sm">
      Preparing
    </div>
  );
};

const Shipping = () => {
  return (
    <div className="bg-purple-100 text-purple-600 py-1 px-2 rounded-full text-xs font-semibold md:text-sm">
      Shipping
    </div>
  );
};

const Delivered = () => {
  return (
    <div className="bg-green-100 text-green-600 py-1 px-2 rounded-full text-xs font-semibold md:text-sm">
      Delivered
    </div>
  );
};
