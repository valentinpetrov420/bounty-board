export default function StatusMessage(props) {
    const msgType = props.type;
    const msgText = props.text;

    let className;

    if (props.type === "error") {
        className = "form-error";
    } else if (props.type === "success") {
        className = "form-success";
    } else {
        className = "form-default";
    }

    return <p className={className}>{props.text}</p>
}