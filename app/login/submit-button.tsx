"use client";

import { useFormStatus } from "react-dom";
import { ReactNode } from "react";

export function SubmitButton({
  children,
  pendingText,
  ...props
}: {
  children: ReactNode;
  pendingText: string;
  formAction: string;
}) {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  return (
    <button {...props} type="submit" aria-disabled={pending}>
      {isPending ? pendingText : children}
    </button>
  );
}
