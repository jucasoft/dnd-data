export class Png {
    public _id: string = undefined;
    public name: string = undefined;
    public class: string = undefined;
    public user: string = undefined;

    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: Png) => string = item => item._id;
}
