import {
  createStyles,
  Header,
  Autocomplete,
  Group,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import UserinfoDropdown from "../UserinfoDropdown";
import Sidebar from "../SideBar";

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.violet[6]
          : theme.colors.violet[0],
      color:
        theme.colorScheme === "dark"
          ? theme.colors.violet[0]
          : theme.colors.violet[7],
    },
  },
}));

interface HeaderSearchProps {
  links: { link: string; label: string }[];
  user?: { fname: string; lname: string; image: string };
}

export function Navbar({ links, user }: HeaderSearchProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <a key={link.label} href={link.link} className={classes.link}>
      {link.label}
    </a>
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
    <Header height={56} className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Sidebar user={user} />
          <Logo />
        </Group>

        <Group>
          <Group ml={50} spacing={5} className={classes.links}>
            {items}
          </Group>
          {/* <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<IconSearch size={16} stroke={1.5} />}
            data={[
              "React",
              "Angular",
              "Vue",
              "Next.js",
              "Riot.js",
              "Svelte",
              "Blitz.js",
            ]}
          /> */}
        </Group>
        {user ? (
          <UserinfoDropdown user={user} />
        ) : (
          <div className="mx-3">
            <a href="/login">
              <button className="text-sm w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
            </a>
          </div>
        )}
      </div>
    </Header>
  );
}
