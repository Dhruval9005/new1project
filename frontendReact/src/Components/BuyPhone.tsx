import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Center,
  Button,
  Tabs,
  Rating,
} from "@mantine/core";
import {
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconUsers,
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    display: "flex",

    [theme.fn.smallerThan("md")]: {
      display: "block",
      width: "100%"
    },
  },

  imageSection: {
    padding: theme.spacing.md,
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: "uppercase",
  },

  section: {
    marginLeft: "20px",
    padding: theme.spacing.md,

    [theme.fn.smallerThan("md")]: {
      width: "100%",
      marginLeft: "0px",
    },
  },

  icon: {
    marginRight: 5,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

const image = [
  {
    img: "https://m.media-amazon.com/images/I/71yXShgxvpL._SX679_.jpg",
    label: "1",
  },
  {
    img: "https://m.media-amazon.com/images/I/71JDQBpNROL._SX569_.jpg",
    label: "2",
  },
  {
    img: "https://m.media-amazon.com/images/I/61RG72HmHGL._SX679_.jpg",
    label: "3",
  },
];

const mockdata = [
  {
    label: "13MP+2MP dual rear camera | 8MP front facing camera",
    icon: IconUsers,
  },
  {
    label: "15.79 centimeters (6.22-inch) with 1520 x 720 pixels resolution",
    icon: IconGauge,
  },
  {
    label:
      "Memory, Storage & SIM: 3GB RAM | 64GB internal memory expandable up to 512GB | Dual SIM (nano+nano) dual-standby (4G+4G)",
    icon: IconManualGearbox,
  },
  {
    label:
      "Android Pie v9.0 operating system with 1.95Ghz Snapdragon 439 processor",
    icon: IconGasStation,
  },
  {
    label: "5000mAH lithium polymer large battery",
    icon: IconGasStation,
  },
  {
    label:
      "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
    icon: IconGasStation,
  },
  {
    label:
      "Box also Includes: Power adapter, USB cable, SIM eject tool, warranty card and user guide. The box does not include earphones",
    icon: IconGasStation,
  },
];

export function BuyPhone() {
  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <Center className="text-left" key={feature.label}>
      <feature.icon size={18} className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius="md" className={classes.card} shadow="lg">
      <Card.Section className={classes.imageSection} ml={0}>
        <Tabs defaultValue={image[0].label} inverted className="">
          {image.map((x) => (
            <Tabs.Panel value={x.label} pb="xs">
              <Image
                width={300}
                height={400}
                className="object-cover mx-auto"
                src={x.img}
                alt="Tesla Model S"
              />
            </Tabs.Panel>
          ))}
          <Tabs.List className="w-fit mx-auto">
            {image.map((x) => (
              <Tabs.Tab value={x.label}>
                <Image
                  width={50}
                  height={50}
                  className="object-cover"
                  src={x.img}
                  alt="Tesla Model S"
                />
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group my="md">
          <div>
            <Text className="text-3xl" weight={500}>
              Redmi 8A
            </Text>
          </div>
        </Group>

        <Group my="md" spacing={30}>
          <div>
            <Text className="text-3xl mb-2" weight={400} sx={{ lineHeight: 1 }}>
              ₹ 9,490
            </Text>
            <Rating fractions={5} defaultValue={4.1} size="md" />
          </div>
          <Badge color="red" size="lg" variant="outline" radius="md">
            25% off
          </Badge>
        </Group>

        <Text my="md" size="sm" color="dimmed" className={classes.label}>
          Basic Information
        </Text>

        <Group ml={9} spacing={8}>
          {features}
        </Group>

        <Button
          className="w-full mb-5"
          mt={20}
          size="md"
          radius="md"
          variant="outline"
          color="violet"
          style={{ flex: 1 }}
        >
          Buy now
        </Button>
      </Card.Section>
    </Card>
  );
}
