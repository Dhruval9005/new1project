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
    display: "flex",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    width: "800px",

    [theme.fn.smallerThan("md")]: {
      display: "block",
      width: "100%",
    },
  },

  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
  },

  section: {
    padding: theme.spacing.md,
    width: "50%",

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

  function Sell() {
    naviget(`${window.location.pathname}/${data.name}`);
  }

  return (
    <Card withBorder radius="md" className={classes.card} shadow="lg">
      <Card.Section className={classes.imageSection} mb={-16}>
        <Image src={data.img} />
      </Card.Section>

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

      <Card.Section className={classes.section} mt={-16}>
        <Group position="apart" h="100%">
          <Group my="md" w="100%">
            <div>
              <Text className="text-3xl" weight={500}>
                {data.name} ( {data.value[0].for} )
              </Text>
            </div>
          </Group>

          <Group spacing={30} position="apart">
            <div>
              <Text weight={600}>Sell for :</Text>
              <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
                ₹ {data.value[0].price}
              </Text>
              <Button
                mt="lg"
                radius="md"
                variant="outline"
                color="violet"
                style={{ flex: 1 }}
                onClick={Sell}
              >
                Sell Now
              </Button>
            </div>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
}
