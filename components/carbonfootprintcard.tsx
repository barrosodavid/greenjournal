"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";

const CarbonFootPrintCard = ({ metricTons = 4.3 }) => {
  return (
    <Card
      shadow="sm"
      className="h-full w-64 aspect-square border-none backdrop-blur-[2px] border-neutral-600 bg-background/60 dark:bg-default-700/10"
    >
      <CardHeader className="flex justify-center">
        <h4 className="text-xl font-bold uppercase">Carbon Footprint</h4>
      </CardHeader>
      <CardBody className="flex flex-col items-center justify-center gap-2">
        <span className="font-nova text-8xl">{metricTons}</span>
        <p>metric tons</p>
      </CardBody>
    </Card>
  );
};

export default CarbonFootPrintCard;
