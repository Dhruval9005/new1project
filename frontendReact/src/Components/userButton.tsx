import { useState } from "react";
import { useCookies } from "react-cookie";
import { BsCart } from "react-icons/bs";
import {
  UnstyledButton,
  UnstyledButtonProps,
  Group,
  Avatar,
  Text,
  createStyles,
  Menu,
} from "@mantine/core";
import {
  IconHeart,
  IconLogout,
  IconStar,
  IconMessage,
  IconSettings,
  IconChevronUp,
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  user: {
    display: "block",
    width: "100%",
    padding: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
    },
  },

  userActive: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },
}));

interface UserButtonProps extends UnstyledButtonProps {
  fname: string;
  lname: string;
  icon?: React.ReactNode;
}

export function UserButton({ fname, lname, icon, ...others }: UserButtonProps) {
  const [cookies, setCookie, removeCookie] = useCookies(["user", "userdata"]);
  const { classes, theme, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  function Logout() {
    removeCookie("userdata");
    removeCookie("user");
  }

  return (
    <Menu
      width={300}
      position="bottom-end"
      transition="pop-top-right"
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
    >
      <Menu.Target>
        <UnstyledButton className={classes.user} {...others}>
          <Group>
            <Avatar color="violet" size="sm" variant="filled">
              {fname.charAt(0).toUpperCase()}
              {lname.charAt(0).toUpperCase()}
            </Avatar>

            <div style={{ flex: 1 }}>
              <Text size="md" weight={500}>
                {fname + " " + lname}
              </Text>
            </div>

            {icon || <IconChevronUp size={14} stroke={1.5} />}
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item icon={<BsCart size={14} color={theme.colors.violet[6]} />}>
          Cart
        </Menu.Item>

        {/* <Menu.Item
          icon={
            <IconStar size={14} color={theme.colors.yellow[6]} stroke={1.5} />
          }
        >
          Saved posts
        </Menu.Item>
        <Menu.Item
          icon={
            <IconMessage size={14} color={theme.colors.blue[6]} stroke={1.5} />
          }
        >
          Your comments
        </Menu.Item> */}

        <Menu.Label>Settings</Menu.Label>

        <Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>
          Account settings
        </Menu.Item>

        <Menu.Item
          icon={<IconLogout size={20} color="red" stroke={1.5} />}
          onClick={Logout}
        >
          Logout
        </Menu.Item>

        {/* <Menu.Divider />
        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item icon={<IconPlayerPause size={14} stroke={1.5} />}>
          Pause subscription
        </Menu.Item>
        <Menu.Item color="red" icon={<IconTrash size={14} stroke={1.5} />}>
          Delete account
        </Menu.Item> */}
      </Menu.Dropdown>

      {/* <Menu.Dropdown>
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
            <IconMessage size={14} color={theme.colors.blue[6]} stroke={1.5} />
          }
        >
          Your comments
        </Menu.Item>

        <Menu.Label>Settings</Menu.Label>

        <Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>
          Account settings
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          icon={<IconLogout size={14} stroke={1.5} color="red" />}
          color="red"
          onClick={Logout}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown> */}
    </Menu>
  );
}
