import PropTipes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({title, stats}) => {
    return <section className={css.statistics}>
    {title ? <h2 className={css.title}>{title}</h2> : ' '}
    <ul className={css.stats}>
    {stats.map(data =>
    (<li className={css.item} key= {data.id}>
      <span className={css.label}>{data.label}</span>
      <span className={css.percentage}>{data.percentage}%</span>
    </li>)
    )}      
  </ul>
</section>
}

Statistics.propTipes = {
    title: PropTipes.string,
    stats: PropTipes.arrayOf(
        PropTipes.shape({
            id: PropTipes.string.isRequired,
            label: PropTipes.string.isRequired,
            percentage: PropTipes.number.isRequired,
        }).isRequired,
    ).isRequired,
}