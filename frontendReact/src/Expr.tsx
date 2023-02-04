import React, { useState } from "react";
import mi from "./assets/Mi10.jpg";
import { Card, Image, Text, Badge, Button, Group, List } from "@mantine/core";
import { HeaderTabs } from "./Components/HeaderTabs";
import { Demo } from "./Components/Demo";
import { NotificationsProvider } from "@mantine/notifications";

const Expr = () => {
  const phoneinfo = {
    name: "Mi 10",
    img: mi,
    info: [
      "108MP Quad Camera + OIS",
      "Qualcomm® Snapdragon™ 865",
      "16.94cm (6.67) 3D Curved E3 AMOLED Display",
      "LiquidCool 2.0 Vapor Chamber + 6 Stack Graphite + Graphene Cooling System",
      "LPDDR5 RAM + UFS 3.0 Storage",
      "30W Wireless Charging + 10W Reverse Charging",
    ],
    value: [
      { for: "128 Gb", price: "21,000" },
      { for: "246 Gb", price: "25,000" },
    ],
  };
  let user = {
    name: "Jane Spoonfighter",
    email: "janspoon@fighter.dev",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
  };
  let tabs = [
    "Home",
    "Orders",
    "Education",
    "Community",
    "Forums",
    "Support",
    "Account",
    "Helpdesk",
  ];

  return (
    <div>
      {/* <HeaderTabs tabs={tabs} user={user} /> */}
      <NotificationsProvider position="top-right" zIndex={2077} limit={5}>
        <Demo />
      </NotificationsProvider>
      {/* <div className="container mx-auto pt-10 h-fit mb-10">
        <div className="flex flex-col justify-center overflow-hidden">
          <div className="w-full p-2 m-auto lg:max-w-4xl">
            <div className="flex flex-col justify-center flex-wrap">
              <div className="link button flex flex-col justify-center content-center flex-wrap max-h-max">
                <Card
                  className="w-96"
                  shadow="sm"
                  p="lg"
                  radius="md"
                  withBorder
                >
                  <Card.Section>
                    <Image
                      // className="object-contain"
                      src={mi}
                      // height={160}
                      alt="mi"
                    />
                  </Card.Section>

                  <Group position="apart" mt="md" mb="xs">
                    <Text size="xl" weight={500}>
                      Mi 10
                    </Text>
                    <Badge color="pink" variant="light">
                      On Sale
                    </Badge>
                  </Group>

                  <Text size="sm" color="dimmed">
                    <List>
                      {phoneinfo.info.map((i) => (
                        <List.Item>{i}</List.Item>
                      ))}
                    </List>
                  </Text>

                  <Button
                    variant="light"
                    color="indigo"
                    fullWidth
                    mt="md"
                    radius="md"
                  >
                    Book classic tour now
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Expr;
