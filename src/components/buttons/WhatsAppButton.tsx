import React from "react";
import { Button, type ButtonProps } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export interface WhatsAppButtonProps
  extends Omit<ButtonProps, "href" | "variant"> {
  variant?: "whatsapp" | "whatsapp-outline";
  message?: string;
}

const WhatsAppButton = ({
  variant = "whatsapp",
  message,
  children = "WhatsApp Us",
  ...props
}: WhatsAppButtonProps) => (
  <Button variant={variant} href={getWhatsAppUrl(message)} {...props}>
    {children}
  </Button>
);

WhatsAppButton.displayName = "WhatsAppButton";

export { WhatsAppButton };
