export class Offer {
    authorId: string;
    authorEmail: string;
    title: string;
    category: string;
    startDate: Date;
    endDate: Date;
    text: string;
    isRead: boolean;

    constructor(title, category, startDate, endDate, text) {
        this.title = title;
        this.category = category;
        this.startDate = startDate;
        this.endDate = endDate;
        this.text = text;
        this.isRead = false;
    }
}
