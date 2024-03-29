export class BaseResponse {
    private status: boolean;
    private message: string;
    private data: any;

    constructor(status: boolean, message: string, data: any) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}