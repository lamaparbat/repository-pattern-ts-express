
export class ResponseDTO<T> {
  response: Object;

  constructor(statusCode: number, message: string | undefined, data?: T) {

    this.response = {
      statusCode,
      message,
      data
    }
  }
}


