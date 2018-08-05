/* eslint-disable */
module.exports=(app)=>{
  app.post('/register' , (req,res) =>{
    res.send( {
      message: `${req.body.email} has been registered`
    });
  } )
}
