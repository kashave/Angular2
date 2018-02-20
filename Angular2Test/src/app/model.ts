export class Model
{
    user: any;
    items: any;
    constructor()
    {
        this.user = "Admin2";
        this.items = [new TodoItem("Buy Flowers", false),
        new TodoItem("Get Shoes", false),
        new TodoItem("Collect Tickets", false),
        new TodoItem("Call Joe", false)];
    }
}
export class TodoItem {
    action:any;
   done:any ;
    constructor(action:any, done:any) {
        this.action = action;
        this.done = done;
    }
}