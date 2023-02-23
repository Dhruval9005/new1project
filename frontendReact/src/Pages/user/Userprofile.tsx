import { useState } from "react";
import { IconUser } from "@tabler/icons";
import { GoLocation } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Box, Center, SegmentedControl, Tabs } from "@mantine/core";

const Userprofile = () => {
  const [value, setValue] = useState("profile");
  return (
    <div className="userprofile h-screen">
      <Tabs value={value}>
        <div className="container mx-auto pt-10 h-fit mb-10">
          <div className="flex flex-row justify-center overflow-hidden">
            <>
              <Tabs.List>
                <SegmentedControl
                  orientation="vertical"
                  onChange={setValue}
                  transitionDuration={500}
                  transitionTimingFunction="linear"
                  data={[
                    {
                      value: "profile",
                      label: (
                        <Center p={7}>
                          <IconUser size={16} />
                          <Box ml={10}>Profile</Box>
                        </Center>
                      ),
                    },
                    {
                      value: "orders",
                      label: (
                        <Center p={7}>
                          <AiOutlineShoppingCart size={16} />
                          <Box ml={10}>Orders</Box>
                        </Center>
                      ),
                    },
                    {
                      value: "address",
                      label: (
                        <Center p={7}>
                          <GoLocation size={16} />
                          <Box ml={10}>Address</Box>
                        </Center>
                      ),
                    },
                  ]}
                />
              </Tabs.List>
            </>
            <div className="w-full p-2 m-auto lg:max-w-4xl">
              <div className="flex flex-col justify-center flex-wrap">
                <>
                  <Tabs.Panel value="profile" pt="xs">
                    <div></div>
                    Profile
                  </Tabs.Panel>
                  <Tabs.Panel value="orders" pt="xs">
                    orders
                  </Tabs.Panel>
                  <Tabs.Panel value="address" pt="xs">
                    address
                  </Tabs.Panel>
                </>
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Userprofile;
