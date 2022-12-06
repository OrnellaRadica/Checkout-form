import { Field, useFormikContext, ErrorMessage } from "formik";
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
  const { getFieldProps } = useFormikContext();
  const { value } = getFieldProps(name);
  const classesInput = classnames({
    "placeholder-input p-3 border border-input rounded-lg placeholder:text-sm placeholder:leading-4 focus-visible:outline-input":
      true,
    "placeholder:font-bold": fontBold,
  });

  return (
    <div className="flex flex-col gap-2 w-full relative">
      <div className="flex justify-between gap-1">
        <label htmlFor={name} className="capitalize">
          {label}
        </label>
        <ErrorMessage
          name={name}
          component="span"
          className="text-secondary text-xs max-[290px]:text-[10px]"
        />
      </div>
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        value={mask ? mask(value) : value}
        className={classesInput}
      />
      {icon && <div className="absolute top-[37px] right-[12px]">{icon}</div>}
    </div>
  );
};

export default Input;
