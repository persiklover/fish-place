import './Input.scss';

export default function Input (props) {
  const { placeholder, label, style } = props;

  return (
    <div
      className="input__container"
      style={style}
    >
      <label>{label}</label>
      <input placeholder={placeholder}/>
    </div>
  );
}
