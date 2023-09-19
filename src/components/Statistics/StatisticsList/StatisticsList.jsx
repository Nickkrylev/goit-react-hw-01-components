import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/getRandomHexColor';
import {StatisticsList, StatisticsItem, StatisticsLabel, StatisticsPercentage } from 'components/Statistics/StatisticsList/StatisticsList.styled';

export const StatisticsListItems = ({ stats }) => {
    return ( <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} style={{ backgroundColor: getRandomHexColor()}}>
            <StatisticsLabel>{label}</StatisticsLabel>
            <StatisticsPercentage>{percentage}%</StatisticsPercentage>
        </StatisticsItem>))}
      </StatisticsList>)
}

StatisticsListItems.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }))
};