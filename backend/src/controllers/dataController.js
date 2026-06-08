const { fetchDataFromSources } = require('../services/dataService');

exports.fetchData = async (req, res) => {
  try {
    await fetchDataFromSources();
    return res.json({ status: 'success', message: 'Data fetched successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching data' });
  }
};
