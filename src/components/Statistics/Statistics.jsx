//import PropTypes from 'prop-types';
import { StatisticsContainer, StatisticItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticsContainer>
    <StatisticItem>Good: {good}</StatisticItem>
    <StatisticItem>Neutral: {neutral} </StatisticItem>
    <StatisticItem>Bad: {bad} </StatisticItem>
    <StatisticItem>Total: {total} </StatisticItem>
    <StatisticItem>Positive feedback: {positivePercentage} %</StatisticItem>
  </StatisticsContainer>
);

export default Statistics;
