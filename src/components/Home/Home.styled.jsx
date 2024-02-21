import styled from '@emotion/styled';
import { IoIosAddCircleOutline } from 'react-icons/io';

export const Section = styled.section`
  margin-bottom: 35px;
`;

export const TripsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 29px;
  margin: 0px auto;
`;

export const ListItem = styled.li`
  border-radius: 8px;
  width: 260px;
  text-align: center;
  box-shadow: ${(props) => props.theme.shadows.boxShadowCard};
  cursor: pointer;
  img {
    display: block;
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;

export const TripWrapper = styled.div`
  padding: 32px 16px;
  border: ${(props) => props.theme.borders.normal};
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const Title = styled.h2`
  margin-bottom: 8px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-size: 20px;
  line-height: 1.2;
`;

export const TripDates = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-size: 16px;
  line-height: ${(props) => props.theme.lineHeights.body};
`;

export const AddTripButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  padding-left: 90px;
  padding-right: 90px;
  border-radius: 8px;
  border: 1px solid transparent;
  box-shadow: ${(props) => props.theme.shadows.boxShadowCard};

  font-size: 20px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-family: inherit;

  background-color: #f9f9f9;
  transition: border 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover {
    border-color: #646cff;
  }
  :focus,
  :focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

export const AddSvg = styled(IoIosAddCircleOutline)`
  font-size: 24px;
`;
