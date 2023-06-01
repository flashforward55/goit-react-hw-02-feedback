//import PropTypes from 'prop-types';
import { StatisticsContainer, StatisticItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad }) => (
  <StatisticsContainer>
    <StatisticItem>Good: {good}</StatisticItem>
    <StatisticItem>Neutral: {neutral} </StatisticItem>
    <StatisticItem>Bad: {bad} </StatisticItem>
    <StatisticItem>Total: </StatisticItem>
    <StatisticItem>Positive feedback: %</StatisticItem>
  </StatisticsContainer>
);

export default Statistics;
