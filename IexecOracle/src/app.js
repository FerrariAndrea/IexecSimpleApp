const Worker = require('./components/worker');
const worker = new Worker();

//dsfjhnsdjhf
worker.work(
    process.argv[2],
    process.argv[3],
    process.argv[4],
    (ris_delivered)=>{console.log("Priced result V7: ",ris_delivered)}
);