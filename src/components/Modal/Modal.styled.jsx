import styled from '@emotion/styled';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(12px);
`;

export const ModalContetnt = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px 16px;
  width: 100%;
  max-width: 420px;
  background-color: #fcfcfc;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transition: transform 250ms linear;
`;

export const FirstContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.button`
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-bottom: 24px;
  background-color: ${(props) => props.theme.colors.secondary};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: ${(props) => props.theme.radius.round};
  box-shadow: ${(props) => props.theme.shadows.boxShadowCard};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: #403d43;
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Select = styled.select`
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

export const SaveButton = styled.button`
  padding: 4px;
  border-radius: 8px;
  border: 1px solid transparent;
  box-shadow: ${(props) => props.theme.shadows.boxShadowCard};

  font-size: 18px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-family: inherit;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover {
    color: #ffffff;
    background-color: #403d43;
  }
`;
