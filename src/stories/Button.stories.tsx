import "../App.css";
import "../../src/index.css";
import "../../Components/shared/Button/Counter.css";
import "../../Components/shared/Button/Button.css";
import "../../Components/ui/Loader/Loader.css";
import Button from "../Components/shared/Button/Button.tsx";

import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Button> & {
    pulse: boolean;
    quantity: number;
    outerWidth: number;
    text: string;
    backgroundColor: string;
};

const meta: Meta<StoryProps> = {
    component: Button,
    argTypes: {
        backgroundColor: {
            control: "color",
        },
        variant: {
            control: "select",
        },
        size: {
            control: "select",
        },
        text: {
            control: "text",
        },
        outerWidth: {
            control: "number",
        },
        quantity: {
            control: "number",
        },
        pulse: {
            description: "allowed only with size sm",
        },
    },
    args: {
        onClick: fn(),
    },
};
export default meta;

type Story = StoryObj<StoryProps>;

export const Enabled: Story = {
    args: {
        backgroundColor: "#1f1f1f",
        outerWidth: 200,
        variant: "primary",
        size: "md",
        text: "Some very long text it should be wrapped",
        isLoading: false,
        disabled: false,
        quantity: 1,
        pulse: true,
    },
    render: ({ backgroundColor, outerWidth, text, quantity, pulse, ...args }) => {
        document.body.style.backgroundColor = backgroundColor;
        return (
            <div style={{ width: outerWidth }}>
                <Button {...args}>
                    <Button.Content>
                        <Button.ContentText>{text}</Button.ContentText>
                        <Button.ContentCounter quantity={quantity} pulse={pulse} />
                    </Button.Content>
                </Button>
            </div>
        );
    },
};

export const Loading: Story = {
    args: {
        backgroundColor: "#1f1f1f",
        outerWidth: 200,
        variant: "primary",
        size: "md",
        isLoading: true,
    },
    render: ({ backgroundColor, outerWidth, text, ...args }) => {
        document.body.style.backgroundColor = backgroundColor;
        return (
            <div style={{ width: outerWidth }}>
                <Button {...args}>
                    <Button.Content>
                        <Button.ContentText>{text}</Button.ContentText>
                        <Button.ContentCounter />
                    </Button.Content>
                </Button>
            </div>
        );
    },
};

export const Disabled: Story = {
    args: {
        backgroundColor: "#1f1f1f",
        outerWidth: 200,
        variant: "primary",
        size: "md",
        text: "Some very long text it should be wrapped",
        disabled: true,
    },
    render: ({ backgroundColor, outerWidth, text, ...args }) => {
        document.body.style.backgroundColor = backgroundColor;
        return (
            <div style={{ width: outerWidth }}>
                <Button {...args}>
                    <Button.Content>
                        <Button.ContentText>{text}</Button.ContentText>
                        <Button.ContentCounter />
                    </Button.Content>
                </Button>
            </div>
        );
    },
};
