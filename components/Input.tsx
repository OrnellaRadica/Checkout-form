import { Field, useFormikContext } from "formik";
import classnames from "classnames";

interface Props {
  label: JSX.Element | string;
  name: string;
  type: "text" | "number";
  placeholder: string;
  maxLength?: number;
  mask?: (value: any) => string;
  fontBold?: boolean;
  icon?: JSX.Element;
}

const Input: React.FC<Props> = ({
  label,
  name,
  type,
  placeholder,
  maxLength,
  mask,
  fontBold,
  icon,
}) => {
  const error = "";
  const { getFieldProps } = useFormikContext();
  const { value } = getFieldProps(name);
  const classesButton = classnames({
    "placeholder-input p-3 border border-input rounded-lg ": true,
    "placeholder:font-bold": fontBold,
  });

  return (
    <div className="flex flex-col gap-2 w-full relative">
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
        className={classesButton}
      />
      {icon && <div className="absolute top-[34px] right-[10px]">{icon}</div>}

      {error && <span>{error} </span>}
    </div>
  );
};

export default Input;
