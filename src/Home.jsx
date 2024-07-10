import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";

const Home = () => {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://www.localhost:5000/api/getkey");

    const {
      data: { order },
    } = await axios.post("http://localhost:5000/api/checkout", {
      amount,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Coding World",
      description: "Payment Gateway",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*P_H_UpQahH0juwQpXWXnpQ.jpeg",
      order_id: order.id,
      callback_url: "http://localhost:5000/api/paymentverification",
      prefill: {
        name: "Suresh Ranjan",
        email: "Sureshranjan2@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#e6071d",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <Box>
      <Stack
        h={"100vh"}
        alignItems="center"
        justifyContent="center"
        direction={["column", "row"]}
        style={{ gap: "2rem" }}
      >
        <Card
          name="MacBook Pro"
          amount={44999}
          img={
            "https://www.ecom.soroltechnologies.com/images/thumbs/0000024_apple-macbook-pro-13-inch.jpeg"
          }
          checkoutHandler={checkoutHandler}
        />
        <Card
          name="Canon EOS 3000D"
          amount={45999}
          img={
            "https://detec.in/cdn/shop/products/WhatsAppImage2022-03-25at17.25.05_1_590x.jpg?v=1648209373"
          }
          checkoutHandler={checkoutHandler}
        />
      </Stack>
    </Box>
  );
};

export default Home;
