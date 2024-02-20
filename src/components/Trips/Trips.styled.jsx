import styled from '@emotion/styled';

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
  border-radius: 0px 0px 4px 4px;
  width: 260px;
  text-align: center;

  img {
    display: block;
    width: 100%;
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
