class ApiError extends Error{
  constructor(
    statusCode,
    message = "Something went Wrong",
    Error = [],
    stack = ""
  ){
    super(message),
    this.statusCode=statusCode,
    this.data = null
    this.sucess=false,
    this.Error=Error;

    if(stack){
      this.stack=stack
    }else{
      Error.captureStackTrace(this,this.constractor)
    }
  }
}

export {ApiError};