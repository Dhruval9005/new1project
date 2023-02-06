import { useState } from "react";
import {
  createStyles,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
} from "@mantine/core";
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconChevronDown,
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  user: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  userActive: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },
}));

interface HeaderTabsProps {
  user: { fname: string; lname: string; image: string };
}

const UserinfoDropdown = ({ user }: HeaderTabsProps) => {
  const { classes, theme, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <div>
      <Menu
        width={220}
        position="bottom-end"
        transition="pop-top-right"
        onClose={() => setUserMenuOpened(false)}
        onOpen={() => setUserMenuOpened(true)}
      >
        <Menu.Target>
          <UnstyledButton
            className={cx(classes.user, {
              [classes.userActive]: userMenuOpened,
            })}
          >
            <Group spacing={7}>
              {/* <div className="rounded-full w-7 h-7 bg-purple-700 grid justify-center content-center uppercase font-bold text-lg text-white">
                {user.fname.charAt(0)}
                {user.lname.charAt(0)}
              </div> */}
              <Avatar src={user.image} alt={user.fname} radius="xl" size={20} />
              <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                {user.fname + " " + user.lname}
              </Text>
              <IconChevronDown size={12} stroke={1.5} />
            </Group>
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            icon={
              <IconHeart size={14} color={theme.colors.red[6]} stroke={1.5} />
            }
          >
            Liked posts
          </Menu.Item>
          <Menu.Item
            icon={
              <IconStar size={14} color={theme.colors.yellow[6]} stroke={1.5} />
            }
          >
            Saved posts
          </Menu.Item>
          <Menu.Item
            icon={
              <IconMessage
                size={14}
                color={theme.colors.blue[6]}
                stroke={1.5}
              />
            }
          >
            Your comments
          </Menu.Item>

          <Menu.Label>Settings</Menu.Label>
          <Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>
            Account settings
          </Menu.Item>
          <Menu.Item icon={<IconLogout size={20} color="red" stroke={1.5}/>}>
            Logout
          </Menu.Item>

          <Menu.Divider />

          {/* <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item icon={<IconPlayerPause size={14} stroke={1.5} />}>
            Pause subscription
          </Menu.Item>
          <Menu.Item color="red" icon={<IconTrash size={14} stroke={1.5} />}>
            Delete account
          </Menu.Item> */}
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default UserinfoDropdown;
