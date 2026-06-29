type ResetButtonProps = {
  onClick: () => void;
  disabled: boolean;
};

export default function ResetButton(props: ResetButtonProps) {
  return (
    <button type="button" onClick={props.onClick} disabled={props.disabled}>
      RESET
    </button>
  );
}