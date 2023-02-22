import { useContext, useState } from "react";
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
  // IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconChevronDown,
  IconMenu,
  IconTrash,
} from "@tabler/icons";
import { useCookies } from "react-cookie";
import { BsCart } from "react-icons/bs";
import { showNotification } from "@mantine/notifications";
import { UserContext } from "../../context/UserContext";

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
  },

  userActive: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },
}));

const UserinfoDropdown = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user", "userdata"]);
  const { classes, theme, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const { user } = useContext(UserContext);
  function Logout() {
    showNotification({
      title: "Logout",
      message: "",
      autoClose: 2000,
      color: "red",
      disallowClose: false,
    });
    removeCookie("userdata");
    removeCookie("user");
  }

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
              <Avatar color="violet" size="sm" variant="filled">
                {user.fname.charAt(0).toUpperCase()}
                {user.lname.charAt(0).toUpperCase()}
              </Avatar>
              <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                {user.fname + " " + user.lname}
              </Text>
              <IconChevronDown size={12} stroke={1.5} />
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
          </Menu.Item> */}
          {/* <Menu.Item
            icon={
              <IconMessage
                size={14}
                color={theme.colors.blue[6]}
                stroke={1.5}
              />
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

          {/* <Menu.Divider /> */}

          {/* <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item icon={<IconMenu size={14} stroke={1.5} />}>
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
