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
  TablerIcon,
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    display: "flex",

    [theme.fn.smallerThan("md")]: {
      display: "block",
      width: "100%",
    },
  },

  imageSection: {
    padding: theme.spacing.md,
    width: "50%",

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
    width: "fit-content",
  },

  section: {
    marginLeft: "20px",
    padding: theme.spacing.md,
    width: "50%",
    display: "grid",

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

interface phoneInfo {
  info: {
    name: string;
    img: { label: string; img: string }[];
    brand: string;
    info: { label: string; icon: TablerIcon }[];
    value: { for: string; price: string }[];
  };
}

export function BuyPhone({ info }: phoneInfo) {
  const { classes } = useStyles();
  const features = info.info.map((feature) => (
    <div className="w-full flex" key={feature.label}>
      <feature.icon size={18} className={classes.icon} stroke={1.5} />
      <Text size="xs" className="text-start">
        {feature.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder radius="md" className={classes.card} shadow="lg">
      <Card.Section className={classes.imageSection} mb={-16}>
        <Tabs defaultValue={info.img[0].label} inverted className="">
          {info.img.map((x, n) => (
            <Tabs.Panel key={n} value={x.label} pb="xs">
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
            {info.img.map((x, n) => (
              <Tabs.Tab key={n} value={x.label}>
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

      <Card.Section className={classes.section} p={0} mt={-16}>
        <Group my="md" className="w-fit">
          <div>
            <Text className="text-3xl" weight={500}>
              {info.name}
            </Text>
          </div>
        </Group>

        <Group my="md" spacing={30} className="w-fit">
          <div>
            <Text className="text-3xl mb-2" weight={400} sx={{ lineHeight: 1 }}>
              ₹ {info.value[0].price}
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

        <Group my="md" spacing={8} className="w-fit">
          {features}
        </Group>

        <div className=" w-fit">
          <Button
            className="w-fit mb-5 mr-5"
            mt={20}
            size="md"
            radius="md"
            variant="outline"
            color="violet"
            style={{ flex: 1 }}
          >
            Add To Card
          </Button>
          <Button
            className="w-fit mb-5"
            mt={20}
            size="md"
            radius="md"
            variant="outline"
            color="violet"
            style={{ flex: 1 }}
          >
            Buy Now
          </Button>
        </div>
      </Card.Section>
    </Card>
  );
}
