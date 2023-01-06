export class ValidationModel extends Error {
  type: string;
  messages;
  constructor(errors) {
    super();
    this.type = 'Request Body Validation';
    this.messages = errors || [];
  }
}
