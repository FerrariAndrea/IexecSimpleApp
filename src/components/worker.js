const axios = require('axios');
const fsPromises = require('fs').promises;


// axios.post(this.props.restUrl + "room", room).then( (res) => {                
//   this.setState({
//       messageList : [],
//       new_room_id : res.data.room._id
//   })
//   this.mqttClient.subscribeToTopic(this.state.new_room_id, this.handleNewMessage);
// })
// .catch((err) => {
//   console.log(err);
// });


class Worker{
      constructor(){
            this.work=this.work.bind(this);
      }

      work(cb,cbErr){
          (async () => {
            
            const iexecOut = process.env.IEXEC_OUT;
            try {
              // Do whatever you want (let's write hello world here)
              const message = process.argv.length > 2 ? process.argv[2] : 'World';
          
              // Append some results in /iexec_out/
              await fsPromises.writeFile(`${iexecOut}/result.txt`, message);
              // Declare everything is computed
              const computedJsonObj = {
                'deterministic-output-path': `${iexecOut}/result.txt`,
              };
              await fsPromises.writeFile(
                `${iexecOut}/computed.json`,
                JSON.stringify(computedJsonObj),
              );
              cb(message);
            } catch (e) {
              console.log("ERROR: "+e);
              if(cbErr!==null && cbErr!==undefined){
                cbErr(e);
              }else{
                process.exit(1);
              }
            }
          })();
      }
  }

  module.exports = Worker;
  
