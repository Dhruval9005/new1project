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

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
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
        : theme.colors.gray[5],
  },
}));

interface phoneInfo {
  data: {
    name: string;
    img: string;
    brand: string;
    info: { label: string; icon: TablerIcon }[];
    value: { for: string; price: string }[];
  };
}

export function SellPhone({ data }: phoneInfo) {
  const naviget = useNavigate();
  const { classes } = useStyles();
  const features = data.info.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size={18} className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  // function badding(phone: string) {
  //   naviget(`${window.location.pathname}/${phone}`);
  // }

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={data.img} />
      </Card.Section>

      <Group position="apart" my="md">
        <div>
          <Text className="text-3xl" weight={500}>
            {data.name}
          </Text>
        </div>
      </Group>

      {/* <Card.Section className={classes.section}>
        <Group my="md" spacing={30} className="w-fit">
          <Text className="text-3xl mb-2" weight={400} sx={{ lineHeight: 1 }}>
            ₹ {data.value[0].price}
          </Text>
        </Group>

        <Text my="md" size="sm" color="dimmed" className={classes.label}>
          Basic Information
        </Text>

        <Group my="md" spacing={8} className="w-fit">
          {features}
        </Group>

        <Button
          className="w-fit mb-5"
          mt={20}
          size="md"
          radius="md"
          variant="outline"
          color="violet"
          style={{ flex: 1 }}
        >
          Sell Now
        </Button>
      </Card.Section> */}

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
              ₹ {data.value[0].price}
            </Text>
          </div>

          <Button
            radius="md"
            variant="outline"
            color="violet"
            style={{ flex: 1 }}
          >
            Sell Now
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
