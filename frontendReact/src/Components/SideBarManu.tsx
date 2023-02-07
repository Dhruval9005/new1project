import { Navbar, Group, ScrollArea, createStyles, Text } from "@mantine/core";
import { IconGauge } from "@tabler/icons";
import { UserButton } from "./userButton";
import { LinksGroup } from "./NavbarLinksGroup";

const mockdata = [
  {
    label: "New Phone",
    icon: IconGauge,
    links: [
      { label: "Serch New Phone", link: "/newphone" },
      {
        label: "Porupar Phone",
        link: "/porupar",
      },
      {
        label: "Letest phone",
        link: "/letest",
      },
      {
        label: "Upcoming phone",
        link: "/upcoming",
      },
    ],
  },
  {
    label: "Used phone",
    icon: IconGauge,
    links: [
      { label: "Serch New Phone", link: "/newphone" },
      {
        label: "Buy Used phone",
        link: "/buyused",
      },
      {
        label: "used phone lone",
        link: "/buyused",
      },
      {
        label: "service center",
        link: "/service",
      },
    ],
  },
  {
    label: "Sell phone",
    icon: IconGauge,
    links: [
      { label: "Sell phone", link: "/sell" },
      {
        label: "Scrap phone",
        link: "/scrap",
      },
    ],
  },
  {
    label: "Compare phone",
    icon: IconGauge,
    // links: [
    //   { label: "Sell phone", link: "/sell" },
    //   {
    //     label: "Scrap phone",
    //     link: "/scrap",
    //   },
    // ],
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function SideBarManu({ user }: any) {
  const { classes } = useStyles();
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));
  const Logo = () => (
    <a
      className="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900"
      href="/"
    >
      <img src="" style={{ height: 15 }} loading="lazy" />
      <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
        Tran<span className="text-purple-700">x</span>
      </span>
    </a>
  );

  return (
    <Navbar p="lg" className={classes.navbar}>
      <Navbar.Section mt="-50px" className={classes.header}>
        <Group position="apart">
          <Logo />
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      {user ? (
        <Navbar.Section className={classes.footer}>
          <UserButton
            image={user.image}
            name={user.fname + " " + user.lname}
            // email={user.email}
          />
        </Navbar.Section>
      ) : (
        <div className="mx-3">
          {/* <a href="/login">
              <button className="text-sm w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
            </a> */}
        </div>
      )}
    </Navbar>
  );
}
