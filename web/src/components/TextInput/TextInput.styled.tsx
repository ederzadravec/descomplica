import styled from 'styled-components';

export const Container = styled.span<{ focus: boolean }>`
  position: relative;
  width: 100%;
  height: 65px;
  padding: 13px 25px;
  background: #eaf0f6;
  border-radius: 8px;
  cursor: text;
  border: 1px solid ${({ focus, theme }) => (focus ? theme.palette.primary.main : 'transparent')};
`;

export const Label = styled.span<{ floating: boolean }>`
  position: absolute;
  color: ${({ theme }) => theme.palette.text.dark};
  font-size: 12px;
  transition: 0.4s;

  ${({ floating }) => {
    if (floating)
      return `
      font-size: 12px;
      line-height: 12px;
      bottom: 38px;
      `;

    return `
      font-size: 14px;
      line-height: 14px;
      bottom: 24px;
    `;
  }};
`;

export const Input = styled.input`
  margin-top: auto;
  height: 24px;
  width: 100%;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.text.dark};
  background: transparent;
  border: none;
  outline: none;
`;
