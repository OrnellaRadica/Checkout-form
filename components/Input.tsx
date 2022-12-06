import { Field, useFormikContext } from "formik";

interface Props {
  label: JSX.Element | string;
  name: string;
  type: "text" | "number";
  placeholder: string;
  maxLength?: number;
  mask?: (value: any) => string;
}

const Input: React.FC<Props> = ({
  label,
  name,
  type,
  placeholder,
  maxLength,
  mask,
}) => {
  const error = "";
  const { getFieldProps } = useFormikContext();
  const { value } = getFieldProps(name);

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
        maxLength={maxLength}
        value={mask ? mask(value) : value}
        className="placeholder-input p-3 border border-input rounded-lg"
      />
      {error && <span>{error} </span>}
    </div>
  );
};

export default Input;
