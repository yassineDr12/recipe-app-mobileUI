export type IBadge = {
  label: string;
  action: "success" | "error" | "warning" | "info" | "muted" | undefined;
  condition?: boolean;
};
