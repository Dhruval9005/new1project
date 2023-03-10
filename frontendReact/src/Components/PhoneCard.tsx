import { Carousel } from "@mantine/carousel";
import { useNavigate } from "react-router-dom";
import { Button, Card, Group, Image, Text, createStyles } from "@mantine/core";

interface PhoneProps {
  name: string;
  phones: {
    name: string;
    img: string;
    link: string;
    value: { for: string; price: Number }[];
  }[];
  path: string;
}
const useStyles = createStyles((theme) => ({
  card: {
    width: "300px",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,

    [theme.fn.smallerThan("md")]: {
      display: "block",
    },
  },

  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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

    [theme.fn.smallerThan("md")]: {
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

const PhoneCard = ({ name, phones, path }: PhoneProps) => {
  const naviget = useNavigate();
  const { classes } = useStyles();

  function Sell(name: string) {
    naviget(`${window.location.pathname}buy/${name}`);
  }

  return (
    <div className="container mx-auto pt-10">
      <h2 className="text-3xl">{name}</h2>
      <Carousel
        loop
        height={500}
        slideSize="20%"
        slideGap="md"
        align="start"
        controlSize={40}
        styles={{
          control: {
            backgroundColor: "#374151",
            marginLeft: "-70px",
            marginRight: "-70px",
            borderRadius: "10%",
            height: "100px",
          },
          controls: {
            height: "0px",
          },
        }}
      >
        {phones.map((x, n) => (
          <Carousel.Slide key={n}>
            <div className="p-4">
              <Card withBorder radius="md" className={classes.card} shadow="lg">
                <Card.Section className={classes.imageSection} mb={-16}>
                  <Image width={300} height={300} fit="contain" src={x.img} />
                </Card.Section>

                <Card.Section className={classes.section} mt={-16}>
                  <Group position="apart" h="100%">
                    <Group my="md" w="100%">
                      <div>
                        <Text className="text-2xl" weight={500}>
                          {x.name}
                        </Text>
                      </div>
                    </Group>

                    <Group spacing={50} position="apart">
                      <Text size="xl" weight={500} sx={{ lineHeight: 1 }}>
                        {`??? ${x.value[0].price}`.replace(
                          /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                          ","
                        )}
                      </Text>
                      <Button
                        radius="md"
                        variant="outline"
                        color="violet"
                        style={{ flex: 1 }}
                        onClick={() => Sell(x.name)}
                      >
                        Buy
                      </Button>
                    </Group>
                  </Group>
                </Card.Section>
              </Card>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default PhoneCard;
