export function formatPrice(price: number): string {
  if (price >= 100000) {
    return `₹${(price / 1000).toFixed(1)}K`;
  }
  return `₹${price.toLocaleString('en-IN')}`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function getDaysFromNow(date: Date): number {
  const today = new Date();
  const diffTime = date.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
