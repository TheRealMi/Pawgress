// Add any helper functions here
module.exports = {
    // Helper function to format date without time zone
    formatDate: function (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
      return new Date(date).toLocaleDateString('en-US', options);
    },
  };