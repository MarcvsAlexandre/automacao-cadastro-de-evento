function getTomorrowDate() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1); // Converter data em um dia
  
    // Retorna a data no formato YYYY-MM-DD
    return tomorrow.toISOString().split('T')[0];
  }
  
  module.exports = {
    getTomorrowDate,
  };