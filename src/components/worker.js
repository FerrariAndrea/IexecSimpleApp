const axios = require('axios');
const { Http2ServerRequest } = require('http2');
const fsPromises = require('fs').promises;
// const web3 = require('web3');
const coder = require('web3-eth-abi')



const default_lat = "44.49";
const default_long = "11.34";
const gen_api_uri = (lat=default_lat,lon=default_long)=>{
  var valid_lat = lat;
  var valid_lon = lon;
  if(isNaN(Number(valid_lat))){
    valid_lat=default_lat;
  }
  if(isNaN(Number(valid_lon))){
    valid_lon=default_lat;
  }
  return "http://www.7timer.info/bin/api.pl?lon="+valid_lon+"&lat="+valid_lat+"&product=astro&output=xml";
}

class Worker{

      constructor(){
            this.work=this.work.bind(this);
            this.err=this.err.bind(this);
      }

      err(e,cbErr){
        console.log("ERROR: "+e);
        if(cbErr!==null && cbErr!==undefined){
          cbErr(e);
        }else{
          process.exit(1);
        }
      }

      work(lat,lon,flag="A",cb,cbErr){
          (async () => {
            console.log("lat: "+lat);
            console.log("lon: "+lon);
            try {
              const iexecOut = process.env.IEXEC_OUT;
              // Do whatever you want (let's write hello world here)
              const url = gen_api_uri(lat,lon);
              const message = await axios.get(url);
              var msgRandom = 10; 
              if(flag==="D" || flag==="C"){
                msgRandom=Math.trunc(Math.random()*(10**10));
              }
              //var callback_data =coder.encodeParameter(['uint256', 'string'], [msgRandom,'CIAO']).hex()
              var callback_data =coder.encodeParameter('uint256', msgRandom);
              console.log('result: '+msgRandom);
              console.log('result.encode_abi:'+callback_data);

            
              if(message.status===200){
                // Append some results in /iexec_out/
                await fsPromises.writeFile(`${iexecOut}/result.txt`,callback_data);
                // Declare everything is computed
                // const computedJsonObj = {
                //   'deterministic-output-path': `${iexecOut}/result.txt`
                //   // 'callback-data': "0x"+md5(`CIAO`)
                // };
                const computedJsonObj = {
                  'deterministic-output-path': `${iexecOut}/result.txt`,
                  //'callback-data': callback_data
                };
                if(flag==="B" || flag==="C"){
                  computedJsonObj.r="random"+msgRandom;
                }
                
                await fsPromises.writeFile(
                  `${iexecOut}/computed.json`,
                  JSON.stringify(computedJsonObj),
                );
                cb(computedJsonObj);
              }else{
                this.err("Get status code "+ message.status+ " from api.",cbErr);
              }
            } catch (e) {
                this.err(e,cbErr);
            }
          })();
      }
  }

  module.exports = Worker;
  
