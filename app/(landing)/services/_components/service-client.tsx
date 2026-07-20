"use client";
import React from "react";
import Pricing from "../../_common/pricing";
import { pricingData } from "@/constants/services";

const ServiceClient: React.FC = () => {
  return (
    <>
      {pricingData.map((service, index) => (
        <div key={service.title + index}>
          <Pricing
            title={service.title}
            list={service.list}
            description={service.description}
            position={service.position}
            spacing={service.spacing}
            image={service.image}
            price={service.price}
          />
        </div>
      ))}
    </>
  );
};
export default ServiceClient;
