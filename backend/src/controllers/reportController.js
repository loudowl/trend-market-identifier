const { fetchReportData } = require('../services/reportService');

exports.getReport = async (req, res) => {
  const { type } = req.params;
  try {
    const data = await fetchReportData(type);
    return res.json({ type, timestamp: new Date().toISOString(), data });
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching report data' });
  }
};
