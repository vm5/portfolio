"use client"; // Add this line at the top

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Token() {
  const [tokenNumber, setTokenNumber] = useState(null);

  const generateToken = () => {
    const newToken = Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit token number
    setTokenNumber(newToken);
  };

  return (
    <div className="relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full w-32 h-32 flex items-center justify-center text-6xl font-bold">
        <Button onClick={generateToken} className="w-full h-full flex items-center justify-center">
          {tokenNumber || "Get Token"}
        </Button>
      </div>
    </div>
  );
}
