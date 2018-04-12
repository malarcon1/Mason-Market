export class BookContract {
    /**
     * This is a standardized way of creating a Book object to insert in the database.
     * @param title
     * @param price
     * @param description
     * @param imagesrc
     * @param owner
     * @param condition
     * @param createdAt
     */
    constructor(title, price, description, imagesrc, owner, condition){
        this.title = title;
        this.price = price;
        this.description = description;
        this.imagesrc = imagesrc;
        this.owner = owner;
        this.condition = condition;
        this.createdAt = new Date();
    }
}