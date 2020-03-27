const accountSid = 'ACfcb8ed72479b29b7a30a26c76542a780';
const authToken = '6658cec0c61ae6af2fe222987cb174a7';
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         url: 'https://twimlets.com/forward?PhoneNumber=%2B31644994529&Timeout=2&',
         to: '+31618220382',
         from: '+13345648639'

        //  to: '+13345648639',
        //  from: '+31618220382'
      }, function(err, call) {
          if(err) {
              console.log(err);
          }else{
              console.log(call.sid);
          }
      },
      
    )
   
    // https://handler.twilio.com/twiml/EHe32d105df1262d9f43c2483b2a66b3f8


    //   .then(call => console.log(call.sid));

    //'http://demo.twilio.com/docs/voice.xml'

    // 'http://twimlets.com/forward?PhoneNumber=+31644994529&Timeout=0s',

    //https://twimlets.com/message?Message%5B0%5D=you%20will%20now%20be%20redirected%20&