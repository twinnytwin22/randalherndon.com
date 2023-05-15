type ArrowProps = {
    className: string
    style: any
    onClick: any
}

export function NextArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

export function PrevArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "", }}
            onClick={onClick}
        />
    );
}
