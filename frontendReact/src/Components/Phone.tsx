import { useNavigate } from "react-router-dom";
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
  TablerIcon,
} from "@tabler/icons";
// import mi from "../assets/Mi10.jpg";

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

interface phoneInfo {
  data: {
    name: string;
    img: string;
    brand: string;
    info: { label: string; icon: TablerIcon }[];
    value: { for: string; price: string }[];
  };
  info: string;
}

export function Phone({ data, info }: phoneInfo) {
  const naviget = useNavigate();
  const { classes } = useStyles();
  const features = data.info.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size={18} className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  function badding(phone: string) {
    naviget(`${window.location.pathname}/${phone}`);
  }

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={data.img} />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text className="text-3xl" weight={500}>
            {data.name}
          </Text>
        </div>
        <Badge color="red" variant="outline">
          25% off
        </Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text size="sm" color="dimmed" className={classes.label}>
          Basic Info
        </Text> 

        <Group spacing={8} mb={-8}>
          {features}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
              {data.value[0].price}
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
            onClick={(e) => badding(data.name)}
          >
            {info}
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
