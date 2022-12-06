import { PaymentIcon, LockIcon } from "./Icons";
import Button from "./Button";
import { Form, Formik } from "formik";
import Input from "./Input";

function PaymentForm() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center bg-white w-[319px] rounded-lg p-8 sm:shadow-lg sm:border sm:border-gray-50">
      <div className="flex flex-col justify-center items-center gap-2">
        <PaymentIcon />
        <h1 className="font-bold text-xl leading-6">Payment info</h1>
      </div>
      <Formik
        onSubmit={(values) => {
          console.log(values);
        }}
        initialValues={{ full_name: "" }}
      >
        <Form className="w-full flex flex-col gap-6 justify-center items-center">
          <Input
            label="Full name"
            name="full_name"
            type="text"
            placeholder="Your Name"
          />
          <Input
            label="Card number"
            name="card_number"
            type="number"
            placeholder="1234 1234 1234 1234"
          />
          <div className="grid grid-cols-2 gap-6">
            <Input
              label="Expiration"
              name="expiration"
              type="text"
              placeholder="MM/YY"
            />
            <Input label="CVV" name="cvv" type="number" placeholder="..." />
          </div>
          <Input
            label="Zip code"
            name="zip_code"
            type="number"
            placeholder="Your zip"
          />

          <div className="w-full flex flex-col justify-center items-center gap-2">
            <Button
              ariaLabel="Confirm payment"
              isFullWidth={true}
              icon={<LockIcon />}
            >
              confirm payment
            </Button>
            <span className="text-[12px] leading-[16px] text-grey">
              You verify that this info is correct
            </span>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default PaymentForm;
