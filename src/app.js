const Worker = require('./components/worker');
const worker = new Worker();

worker.work((ris_delivered)=>{console.log("ris_delivered",ris_delivered)});