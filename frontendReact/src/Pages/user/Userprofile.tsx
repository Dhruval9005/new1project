import { useState } from "react";
import { IconUser } from "@tabler/icons";
import { GoLocation } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Box, Center, SegmentedControl, Tabs } from "@mantine/core";

const Userprofile = () => {
  const [value, setValue] = useState("profile");
  return (
    <div className="userprofile">
      <Tabs value={value}>
        <div className="container mx-auto pt-10 h-fit mb-10">
          <div className="flex flex-row justify-center overflow-hidden">
            <div>
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
                      value: "addresses",
                      label: (
                        <Center p={7}>
                          <GoLocation size={16} />
                          <Box ml={10}>Addresses</Box>
                        </Center>
                      ),
                    },
                  ]}
                />
              </Tabs.List>
            </div>
            <div className="w-full p-2 m-auto lg:max-w-4xl">
              <div className="flex flex-col justify-center flex-wrap">
                <div>
                  <Tabs.Panel value="profile" pt="xs">
                    Gallery tab content
                  </Tabs.Panel>
                  <Tabs.Panel value="orders" pt="xs">
                    Messages tab content
                  </Tabs.Panel>
                  <Tabs.Panel value="addresses" pt="xs">
                    Settings tab content
                  </Tabs.Panel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Userprofile;
