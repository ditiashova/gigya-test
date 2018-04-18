export class Response {

  constructor(
    public errorCode: number,
    public statusCode: number,
    public errorMessage?: string
  ) {  }

}
