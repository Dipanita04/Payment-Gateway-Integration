import { Button, Image, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const Card = ({ name, amount, img, checkoutHandler }) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    backgroundColor: isHovered ? "#1b3282" : "#093fed",
    padding: "20px",
    cursor: "pointer",
    color: "white",
  };

  return (
    <VStack style={{ gap: "1rem" }}>
      <Image src={img} boxSize={"64"} objectFit="cover" />

      <Text
        style={{ fontWeight: "bold", fontSize: "20px", fontStyle: "italic" }}
      >
        {name}
        <br /> ₹ {amount}
      </Text>

      <Button
        onClick={() => checkoutHandler(amount)}
        style={styles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Buy Now
      </Button>
    </VStack>
  );
};

export default Card;
