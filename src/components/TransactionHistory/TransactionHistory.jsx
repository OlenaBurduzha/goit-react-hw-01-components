import PropTipes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return <table className={css.transaction}>
  <thead>
    <tr>
      <th className={css.title}>Type</th>
      <th className={css.title}>Amount</th>
      <th className={css.title}>Currency</th>
    </tr>
  </thead>

    <tbody>
    {items.map(item => (
    <tr className={css.items} key={item.id}>
      <td className={css.item}>{item.type}</td>
      <td className={css.item}>{item.amount}</td>
      <td className={css.item}>{item.currency}</td>
    </tr>)
    )}
   
  </tbody>
</table>
}

TransactionHistory.PropTipes = {
    id: PropTipes.string.isRequired,
    type : PropTipes.string.isRequired,
    amount : PropTipes.string.isRequired,
    currency : PropTipes.string.isRequired,
}