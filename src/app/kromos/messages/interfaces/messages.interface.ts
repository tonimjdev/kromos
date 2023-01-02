export interface MessagesResponse {
    messages: Messages[];
}

export interface Messages {
    content: string;
    sender: string;
    recipient: string;
    timestamp: string;
    read:boolean;

}