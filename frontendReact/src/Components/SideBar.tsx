import { useState } from "react";
import { Drawer, Group, Burger } from "@mantine/core";
import { SideBarManu } from "./SideBarManu";

function Sidebar({ user }: any) {
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
