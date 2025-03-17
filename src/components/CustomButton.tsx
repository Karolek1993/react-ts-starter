import { StyledCustomButton } from './themes/MainTheme';

interface ButtonProps {
  id: number;
  value: string;
}

export function CustomButton({ id, value }: ButtonProps) {
  return (
    <StyledCustomButton variant="contained" key={id}>
      {value}
    </StyledCustomButton>
  );
}
