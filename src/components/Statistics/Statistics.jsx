import PropTypes from 'prop-types';
import { StatisticsSection, StatisticsTitle} from 'components/Statistics/Statistics.styled.jsx';
import {StatisticsListItems} from 'components/Statistics/StatisticsList/StatisticsList'
 
export const Statistics = ({title, stats}) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsListItems stats={stats}/>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

