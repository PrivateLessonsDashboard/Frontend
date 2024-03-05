import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export const Default: Story = {
  args: {
    children: "Default Button",
  },
  render: ({ children }) => <Button>{children}</Button>,
};

export default meta;
