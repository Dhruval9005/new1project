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
import { useState } from "react";

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
  image: string;
  name: string;
  icon?: React.ReactNode;
}

export function UserButton({ image, name, icon, ...others }: UserButtonProps) {
  const defoltimage =
    "https://png.pngtree.com/png-vector/20190909/ourlarge/pngtree-outline-user-icon-png-image_1727916.jpg";
  const { classes, theme, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

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
            {<Avatar src={image} alt={name} radius="xl" size={20} /> || (
              <Avatar src={defoltimage} alt={name} radius="xl" size={20} />
            )}

            <div style={{ flex: 1 }}>
              <Text size="md" weight={500}>
                {name}
              </Text>
            </div>

            {icon || <IconChevronUp size={14} stroke={1.5} />}
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
            <IconMessage size={14} color={theme.colors.blue[6]} stroke={1.5} />
          }
        >
          Your comments
        </Menu.Item>

        <Menu.Label>Settings</Menu.Label>
        <Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>
          Account settings
        </Menu.Item>
        <Menu.Item icon={<IconLogout size={14} stroke={1.5} />}>
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
  );
}
