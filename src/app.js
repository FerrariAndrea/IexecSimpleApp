const Worker = require('./components/worker');
const worker = new Worker();


worker.work(
    process.argv[2],
    process.argv[3],
    (ris_delivered)=>{console.log("ris_delivered",ris_delivered)}
);