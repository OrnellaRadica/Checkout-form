import Image from "next/image";
import PaymentImage from "../public/images/payment.png";

export function PaymentIcon() {
  return <Image src={PaymentImage} height={71} width={90} alt="Payment icon" />;
}

export function LockIcon() {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 5.33334H11.8333V4.00001C11.8333 2.16001 10.34 0.666672 8.5 0.666672C6.66 0.666672 5.16666 2.16001 5.16666 4.00001V5.33334H4.5C3.76666 5.33334 3.16666 5.93334 3.16666 6.66667V13.3333C3.16666 14.0667 3.76666 14.6667 4.5 14.6667H12.5C13.2333 14.6667 13.8333 14.0667 13.8333 13.3333V6.66667C13.8333 5.93334 13.2333 5.33334 12.5 5.33334ZM8.5 11.3333C7.76666 11.3333 7.16666 10.7333 7.16666 10C7.16666 9.26667 7.76666 8.66667 8.5 8.66667C9.23333 8.66667 9.83333 9.26667 9.83333 10C9.83333 10.7333 9.23333 11.3333 8.5 11.3333ZM10.5667 5.33334H6.43333V4.00001C6.43333 2.86001 7.36 1.93334 8.5 1.93334C9.64 1.93334 10.5667 2.86001 10.5667 4.00001V5.33334Z"
        fill="white"
      />
    </svg>
  );
}

export function CreditCardIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3333 2.66667H2.66667C1.92667 2.66667 1.34 3.26 1.34 4L1.33334 12C1.33334 12.74 1.92667 13.3333 2.66667 13.3333H13.3333C14.0733 13.3333 14.6667 12.74 14.6667 12V4C14.6667 3.26 14.0733 2.66667 13.3333 2.66667ZM13.3333 12H2.66667V8H13.3333V12ZM13.3333 5.33333H2.66667V4H13.3333V5.33333Z"
        fill="#A7BAC5"
      />
    </svg>
  );
}

export function InformationIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1.33334C4.32 1.33334 1.33334 4.32 1.33334 8C1.33334 11.68 4.32 14.6667 8 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8C14.6667 4.32 11.68 1.33334 8 1.33334ZM8.66667 11.3333H7.33334V7.33334H8.66667V11.3333ZM8.66667 6H7.33334V4.66667H8.66667V6Z"
        fill="#A7BAC5"
      />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg
      fill="#f81100"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="30px"
      height="30px"
    >
      <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z" />
    </svg>
  );
}

export function CircleIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="16px"
      height="16px"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}
