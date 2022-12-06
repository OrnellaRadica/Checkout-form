import { Field } from "formik";

interface Props {
  label: JSX.Element | string;
  name: string;
  type: "text" | "number";
  placeholder: string;
}

const Input: React.FC<Props> = ({ label, name, type, placeholder }) => {
  const error = "";
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={name} className="capitalize">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="placeholder-input p-3 border border-input rounded-lg"
      />
      {error && <span>{error} </span>}
    </div>
  );
};

export default Input;
