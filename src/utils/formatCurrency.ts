const CURRENCY_FORMAT = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

export const formatCurrency = (value: number) => {
  return CURRENCY_FORMAT.format(value);
};
