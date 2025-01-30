import "./Loader.css";

export default function Loader({
    variant,
    size,
}: {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
}) {
    return <div className={`loader loader__variant-${variant} loader__size-${size}`} />;
}
