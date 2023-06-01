//import PropTypes from 'prop-types';
import { StatisticsContainer, StatisticItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total }) => (
  <StatisticsContainer>
    <StatisticItem>Good: {good}</StatisticItem>
    <StatisticItem>Neutral: {neutral} </StatisticItem>
    <StatisticItem>Bad: {bad} </StatisticItem>
    <StatisticItem>Total: {total} </StatisticItem>
    <StatisticItem>Positive feedback: %</StatisticItem>
  </StatisticsContainer>
);

export default Statistics;
