module.exports = {
  format_date: (date) => {
    // Check if date exists before trying to format it
    if (!date) return '';
    // Convert string date to Date object if necessary
    const dateObj = new Date(date);
    // Format the date
    return dateObj.toLocaleDateString();
  },
  format_amount: (amount) => {
    // Add null check for amount
    if (!amount) return '0';
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },
  eq: (a, b) => {
    return a === b;
  }
};
