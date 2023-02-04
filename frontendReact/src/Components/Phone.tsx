import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Center,
  Button,
} from "@mantine/core";
import {
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconUsers,
  IconCamera,
} from "@tabler/icons";
import mi from "../assets/Mi10.jpg";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    width: "400px",
  },

  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
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
    padding: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: 5,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[9],
  },
}));

const mockdata = [
  { label: "4 passengers", icon: IconUsers },
  { label: "100 km/h in 4 seconds", icon: IconGauge },
  { label: "Automatic gearbox", icon: IconManualGearbox },
  { label: "Electric", icon: IconGasStation },
  { label: "20-megapixel", icon: IconCamera },
];

export function Phone() {
  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size={18} className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={mi} alt="Tesla Model S" />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text className="text-3xl" weight={500}>Mi 10</Text>
          {/* <Text size="xs" color="dimmed">
            Free recharge at any station
          </Text> */}              
        </div>
        <Badge color="indigo" variant="outline">
          25% off
        </Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text size="sm" color="dimmed" className={classes.label}>
          Basic configuration
        </Text>

        <Group spacing={8} mb={-8}>
          {features}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
              ₹ 31,000
            </Text>
            {/* <Text
              size="sm"
              color="dimmed"
              weight={500}
              sx={{ lineHeight: 1 }}
              mt={3}
            >
              per day
            </Text> */}
          </div>

          <Button
            className="text-purple-600 hover:text-purple-700 rounded-md border-purple-700"
            radius="xl"
            variant="outline"
            style={{ flex: 1 }}
          >
            Buy now
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}