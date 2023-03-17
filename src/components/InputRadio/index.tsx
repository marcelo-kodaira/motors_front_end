import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import { Container } from './styles';

interface InputRadioProps<T extends FieldValues> {
  label: string;
  value: string;
  id: string;
  name: Path<T>;
  rules?: RegisterOptions;
  register: UseFormRegister<T>;
  errors?: Partial<DeepMap<T, FieldError>>;
  onClick?: () => void;
  checked?: boolean;
}

export const InputRadio = <T extends Record<string, any>>({
  label,
  value,
  id,
  name,
  register,
  rules = {},
  errors,
  onClick,
  checked,
}: InputRadioProps<T>) => {
  return (
    <Container onClick={onClick}>
      <input
        id={id}
        type="radio"
        defaultChecked={!!checked}
        {...register(name, rules)}
        value={value}
      />
      <label htmlFor={id}>{label}</label>
    </Container>
  );
};
