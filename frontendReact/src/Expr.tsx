import { useState } from "react";
import { Autocomplete } from "@mantine/core";
import { Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { Demo } from "./Components/Demo";
import { NotificationsProvider } from "@mantine/notifications";
import { Phone } from "./Components/Phone";
import { IconUsers } from "@tabler/icons";

import mi from "./assets/Mi10.jpg";

const Expr = () => {
  let [banner, setBanner] = useState([
    "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    "https://flowbite.com/docs/images/carousel/carousel-3.svg",
    "https://flowbite.com/docs/images/carousel/carousel-4.svg",
    "https://flowbite.com/docs/images/carousel/carousel-5.svg",
  ]);
  const phoneinfo = {
    name: "Mi 10",
    img: mi,
    brand: "Mi",
    info: [
      { label: "108MP Quad Camera + OIS", icon: IconUsers },
      { label: "Qualcomm® Snapdragon™ 865", icon: IconUsers },
      { label: "16.94cm (6.67) 3D Curved E3 AMOLED Display", icon: IconUsers },
      {
        label:
          "LiquidCool 2.0 Vapor Chamber + 6 Stack Graphite + Graphene Cooling System",
        icon: IconUsers,
      },
      { label: "LPDDR5 RAM + UFS 3.0 Storage", icon: IconUsers },
      {
        label: "30W Wireless Charging + 10W Reverse Charging",
        icon: IconUsers,
      },
    ],
    value: [
      { for: "128 Gb", price: "21,000" },
      { for: "246 Gb", price: "25,000" },
    ],
  };

  return (
    <div>
      {/* <Navbar links={link} user={users} /> */}
      {/* <NotificationsProvider position="bottom-right" zIndex={2077} limit={5}>
        <Demo />
      </NotificationsProvider> */}

      <Carousel
        // sx={{ maxWidth: "full" }}
        // mx="auto"
        withIndicators
        // height={200}
        styles={{
          indicator: {
            width: 12,
            height: 4,
            transition: "width 250ms ease",

            "&[data-active]": {
              width: 40,
            },
          },
        }}
      >
        {banner.map((x) => (
          <Carousel.Slide key={x}>
            <Image src={x} />
          </Carousel.Slide>
        ))}
      </Carousel>

      {/* <div className="container mx-auto pt-10 h-fit mb-10">
        <div className="flex flex-col justify-center overflow-hidden">
          <div className="w-full p-2 m-auto lg:max-w-4xl">
            <div className="flex flex-col justify-center flex-wrap">
              <div className="link button flex flex-col justify-center content-center flex-wrap max-h-max">
                <Phone data={phoneinfo} info="sell phone" />
                <Autocomplete
                  placeholder="Pick one"
                  label="Your favorite framework/library"
                  radius="md"
                  size="md"
                  withAsterisk
                  data={["React", "Angular", "Svelte", "Vue"]}
                />
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
