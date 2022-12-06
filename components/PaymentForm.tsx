import * as yup from "yup";
import {
  PaymentIcon,
  LockIcon,
  InformationIcon,
  CreditCardIcon,
  CircleIcon,
} from "./Icons";
import Button from "./Button";
import { Form, Formik } from "formik";
import Input from "./Input";
import Modal from "../components/Modal";
import { useState } from "react";

const initialValues = {
  full_name: "",
  card_number: "",
  expiration: "",
  cvv: "",
  zip_code: "",
};
const validateSchema = yup.object().shape({
  full_name: yup.string().required("Required"),
  card_number: yup
    .string()
    .required("Required")
    .min(19, "Must be 16 characters"),
  expiration: yup.string().required("Required").min(5, "Incorrect"),
  cvv: yup.string().required("Required").max(3).min(3, "3 numbers"),
  zip_code: yup.string().required("Required"),
});
function PaymentForm() {
  const [open, setOpen] = useState(false);

  return (
    <div
      id="form"
      className="flex flex-col gap-6 justify-center items-center w-[319px] rounded-lg p-8 sm:shadow-lg sm:border sm:border-gray-50"
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <PaymentIcon />
        <h1 className="font-bold text-xl leading-6">Payment info</h1>
      </div>
      <Formik
        onSubmit={async (values, actions) => {
          await new Promise((resolve) => setTimeout(resolve, 800));
          setOpen(true);
          actions.resetForm({ values: initialValues });
        }}
        initialValues={initialValues}
        validationSchema={validateSchema}
      >
        {({ isSubmitting, values }) => {
          return (
            <Form className="w-full flex flex-col gap-6 justify-center items-center text-sm leading-4">
              <Input
                label="Full name"
                name="full_name"
                type="text"
                placeholder="Your Name"
                mask={(value) => value && value.replace(/[^a-zA-Z\s]+/g, "")}
              />
              <Input
                label="Card number"
                name="card_number"
                placeholder="1234 1234 1234 1234"
                type="text"
                maxLength={19}
                mask={(value) =>
                  value &&
                  value
                    .replace(/\s/g, "")
                    .replace(/[^0-9]+/g, "")
                    .replace(/(\d{4})/g, "$1 ")
                    .trim()
                }
                icon={<CreditCardIcon />}
              />
              <div className="grid grid-cols-2 gap-6">
                <Input
                  label="Expiration"
                  name="expiration"
                  type="text"
                  placeholder="MM/YY"
                  maxLength={5}
                  mask={(value) => {
                    if (value === "/") return "";
                    if (value.includes("/")) {
                      const chars = value.split("");
                      // Search for / if its repeated more than once, remove the last one.
                      if (chars.filter((c: string) => c === "/").length > 1) {
                        // Remove last repetition of "/" and join the characters
                        chars.pop();
                        return chars.join("");
                      }
                    }
                    if (value.length === 2) {
                      if (parseFloat(value) > 12) {
                        const [first, second] = value.split("");
                        return "0" + first + "/" + second;
                      } else if (value.includes("/")) {
                        const [first] = value.split("");
                        return "0" + first + "/";
                      }
                    }
                    if (value.length === 3 && !value.includes("/")) {
                      const [first, second, third] = value.split("");
                      return first + second + "/" + third;
                    }
                    return value.replace(/[^0-9/]+/g, "");
                  }}
                />
                <Input
                  label="CVV"
                  name="cvv"
                  type="text"
                  placeholder="..."
                  fontBold={true}
                  maxLength={3}
                  mask={(value) =>
                    value && value.replace(/\s/g, "").replace(/[^0-9]+/g, "")
                  }
                  icon={<InformationIcon />}
                />
              </div>
              <Input
                label="Zip code"
                name="zip_code"
                type="text"
                placeholder="Your zip"
              />

              <div className="w-full flex flex-col justify-center items-center gap-2">
                <Button
                  ariaLabel="Confirm payment"
                  isFullWidth={true}
                  disabled={isSubmitting}
                  icon={
                    isSubmitting ? (
                      <CircleIcon className={"animate-spin"} />
                    ) : (
                      <LockIcon />
                    )
                  }
                  type="submit"
                >
                  {isSubmitting ? "Processing" : "confirm payment"}
                </Button>
                <span className="text-[12px] leading-[16px] text-grey">
                  You verify that this info is correct
                </span>
              </div>
            </Form>
          );
        }}
      </Formik>
      <Modal
        isOpen={open}
        handleClose={() => setOpen(false)}
        children="Payment confirmed"
      />
    </div>
  );
}

export default PaymentForm;
