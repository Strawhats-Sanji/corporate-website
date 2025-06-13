export interface ButtonInterface {
  text?: string;
  buttonFn: any;
  loading?: boolean;
  custom?: any;
  type?: "primary" | "secondary" | "outline";
  children?: React.ReactNode;
}
