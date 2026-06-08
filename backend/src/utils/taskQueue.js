const Bull = require('bull');

const reportQueue = new Bull('reportQueue', {
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});

const initBullQueue = () => {
  reportQueue.process(async (job) => {
    // Process tasks here
    console.log(`Processing job ${job.id}`);
  });

  reportQueue.on('completed', (job) => {
    console.log(`Job ${job.id} completed`);
  });

  reportQueue.on('failed', (job, err) => {
    console.log(`Job ${job.id} failed with error ${err.message}`);
  });
};

module.exports = { reportQueue, initBullQueue };
