import styled from '@emotion/styled';

export const FilterWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelSearch = styled.label`
  margin: 0 auto;
  margin-bottom: 30px;
  display: block;
  font-weight: 700;
  cursor: pointer;
  font-size: 22px;
`;

export const InputSearch = styled.input`
  margin-top: 10px;
  display: block;
  width: 400px;
  font-size: 16px;
  padding: 8px 0 6px 10px;
  background-color: #fdfefd;
  border: ${(p) => p.theme.borders.normal};
  border-radius: ${(p) => p.theme.radius.normal};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ::placeholder {
    color: #212529;
    opacity: 0.4;
  }

  :focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: ${(props) => props.theme.shadows.boxShadowCard};
  }
`;
