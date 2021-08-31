export class Recipe {
    
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private created_at: string,
        private author_id: string
    ) { }

    public getId() {
        return this.id
    }

    public getTitle() {
        return this.title
    }

    public getDescription() {
        return this.description
    }

    public getDate() {
        return this.created_at
    }

    public getAuthorId() {
        return this.author_id
    }

    static toRecipeModel(data: any): Recipe {
        return new Recipe(
            data.id,
            data.title,
            data.description,
            data.created_at,
            data.author_id
        )
    }

}