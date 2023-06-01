//import PropTypes from 'prop-types';
import { StatisticsContainer, StatisticItem } from './Statistics.styled';

const Statistics = () => (
  <StatisticsContainer>
    <StatisticItem>Good: </StatisticItem>
    <StatisticItem>Neutral: </StatisticItem>
    <StatisticItem>Bad: </StatisticItem>
    <StatisticItem>Total: </StatisticItem>
    <StatisticItem>Positive feedback: %</StatisticItem>
  </StatisticsContainer>
);

export default Statistics;
