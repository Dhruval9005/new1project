import { useState } from "react";
import { Drawer, Group, Burger } from "@mantine/core";
import { SideBarManu } from "./SideBarManu";

interface HeaderSearchProps {
  user?: { fname: string; lname: string };
}

function Sidebar({ user }: HeaderSearchProps) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer opened={opened} onClose={() => setOpened(false)}>
        <SideBarManu user={user} />
      </Drawer>

      <Group position="center">
        <Burger opened={opened} onClick={() => setOpened(true)} size="md" />
      </Group>
    </>
  );
}

export default Sidebar;
