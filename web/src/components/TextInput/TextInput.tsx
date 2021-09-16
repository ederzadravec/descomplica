import React from 'react';
import MaskedInput from 'react-text-mask';

import { useState } from 'hooks';

import BaseInput from '../BaseInput/BaseInput';
import { MASKS } from './utils';
import * as Types from './types';
import * as S from './TextInput.styled';

interface ITextInputProps {
  label?: string;
  placeholder?: string;
  value?: string | number;
  error?: string;
  onChange?: (value?: string | number) => void;
  mask?: Types.TMasks;
  type: 'text' | 'password';
}

const TextInput: React.FC<ITextInputProps> = ({
  value,
  label,
  placeholder,
  mask,
  onChange,
  error,
  type = 'text',
}) => {
  const inputRef = React.useRef<any>();
  const [state, setState] = useState({ focus: false });

  const setInputFocus = () => {
    inputRef?.current?.inputElement?.focus();
  };

  const handleOnChange = (e: any) => {
    if (!onChange) return;

    onChange(e.target.value);
  };

  const handleOnFocus = () => {
    setState({ focus: true });
  };

  const handleOnBlur = () => {
    setState({ focus: false });
  };

  const maskProps = React.useMemo(
    () => {
      if (mask && MASKS[mask]) {
        return  { as: MaskedInput, ...MASKS[mask]() }
      }

      return {}
    },
    [mask]
  );

  const floating = state.focus || value || placeholder;

  return (
    <BaseInput error={error}>
      <S.Container onClick={setInputFocus} focus={state.focus}>
        <S.Label floating={floating} onClick={setInputFocus}>
          {label}
        </S.Label>

        <S.Input
          ref={inputRef}
          {...maskProps}
          guide={false}
          value={value}
          placeholder={placeholder}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          type={type}
        />
      </S.Container>
    </BaseInput>
  );
};

export default TextInput;
