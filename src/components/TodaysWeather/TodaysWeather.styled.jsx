import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 400px;
  height: 600px;

  border-radius: 16px;
  border: ${(props) => props.theme.borders.normal};
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08);

  overflow: auto;
  background: radial-gradient(circle at center, #3a07b0 20%, #0a366f 80%);
  animation: gradient 15s ease infinite;
  background-size: 400% 400%;
  background-attachment: fixed;

  @keyframes gradient {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;

export const TempWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Datetime = styled.p`
  margin-bottom: 30px;
  color: ${(props) => props.theme.colors.accent};
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: bold;
`;

export const Datetemp = styled.p`
  margin-bottom: 30px;
  color: ${(props) => props.theme.colors.accent};
  font-size: 24px;
  font-weight: bold;
`;

export const AddressEl = styled.p`
  margin-bottom: 30px;
  color: ${(props) => props.theme.colors.accent};
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: bold;
`;

export const CountdownWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CountdownEl = styled.p`
  color: ${(props) => props.theme.colors.accent};
  font-size: ${(props) => props.theme.fontSizes.l};

  span {
    font-size: ${(props) => props.theme.fontSizes.m};
  }
`;
