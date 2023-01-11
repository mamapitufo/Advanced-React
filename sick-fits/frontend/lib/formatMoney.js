export default function formatMoney(amount) {
  const showFraction = amount % 100 !== 0;
  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: showFraction ? 2 : 0,
  });

  return formatter.format(amount / 100);
}
