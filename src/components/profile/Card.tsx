import React from "react";
import { CardProps } from "@/models/commons";
import {
  IdcardOutlined,
  SafetyOutlined,
  FlagOutlined,
  MenuOutlined,
  CompassOutlined,
  UserOutlined,
} from "@ant-design/icons";


const settingList1: CardProps[] = [
  {
    title: "Personal Data",
    icon: IdcardOutlined,
    description: "Provide your personal data and tell us how we can contact you",
  },
  {
    title: "Security",
    icon: SafetyOutlined,
    description: "Update your password and secure your account",
  },
  {
    title: "Destination data",
    icon: FlagOutlined,
    description: "You manage the application destination data",
  },
];

const settingList2: CardProps[] = [
  {
    title: "Activities Data",
    icon: MenuOutlined,
    description: "You manage the application activities data",
  },
  {
    title: "Travel data",
    icon: CompassOutlined,
    description: "You manage the application travel data",
  },
  {
    title: "Users Data",
    icon: UserOutlined,
    description: "You manage the application users data",
  },
];


interface CardOptionProps extends CardProps {}

const CardOption: React.FC<CardOptionProps> = ({ title, icon: Icon, description }) => {
  return (
    <div className="max-w-xs min-w-xs bg-white text-gray-900 rounded-xl shadow-lg p-6 flex flex-col justify-between m-3">
      <div className="mb-4">
        <Icon className="text-2xl text-gray-900" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
};

const CardOptionsContainer = () => {
  return (
    <div className="max-w-3xl flex flex-col justify-center items-center mx-auto p-4 space-y-6">
      <div className="flex justify-center gap-4">
        {settingList1.map((item, index) => (
          <CardOption key={index} {...item} />
        ))}
      </div>
      <div className="flex justify-center gap-4">
        {settingList2.map((item, index) => (
          <CardOption key={index + settingList1.length} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardOptionsContainer;
