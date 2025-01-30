import "./Button.css";
import "./ButtonCounter.css";

import React, { useContext } from "react";
import Loader from "../../ui/Loader/Loader";

type ButtonContent =
    | ReturnType<typeof Button.ContentText>
    | ReturnType<typeof Button.ContentCounter>[];

type ButtonPropsType = {
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
    isLoading?: boolean;
    disabled?: boolean;
    children?: ReturnType<typeof Button.Content>;
};

const ButtonContext = React.createContext<ButtonPropsType | undefined>(undefined);

export default function Button(props: ButtonPropsType) {
    const { variant = "primary", size = "sm", children } = props;

    return (
        <ButtonContext.Provider value={props}>
            <button
                id='ripple'
                onClick={props.onClick}
                disabled={props.disabled}
                className={`button button__size-${size} button__variant-${variant} center-all 
                    ${props.disabled ? "button__disabled" : undefined} 
                    ${props.isLoading ? "button__loading" : undefined}`}>
                {props.isLoading && <Loader size={size} variant={variant} />}
                {children}
                <div className='button_overlay' />
            </button>
        </ButtonContext.Provider>
    );
}

function useButtonContext() {
    const context = useContext(ButtonContext);
    if (!context) throw new Error("Use only with <Button />");
    return context;
}

Button.ContentCounter = function ButtonCounter(props: { quantity?: number; pulse?: boolean }) {
    const { size = "sm", variant = "primary" } = useButtonContext();
    const { pulse = false, quantity } = props;
    if (!quantity && size !== "sm") return;
    return (
        <div className='center-all'>
            {pulse && size === "sm" && <div className={`pulse pulse__size-${size}`} />}
            <div className={`counter counter__variant-${variant} counter__size-${size} center-all`}>
                {size !== "sm" ? (quantity && quantity <= 999 ? quantity : 999) : undefined}
            </div>
        </div>
    );
};

Button.ContentText = function ButtonText(props: { children?: string }) {
    return <p className='button_content-group_text'>{props.children}</p>;
};

Button.Content = function ButtonContent({ children }: { children: ButtonContent }) {
    const { size = "sm", isLoading } = useButtonContext();
    return (
        <>
            {!isLoading && (
                <div
                    className={`button_content-group button_content-group__size-${size} center-all`}>
                    {children}
                </div>
            )}
        </>
    );
};
