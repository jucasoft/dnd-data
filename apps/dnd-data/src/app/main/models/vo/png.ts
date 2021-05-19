export class Png {
    public _id?: string = undefined;
    public name: string = undefined;
    public clazz: string = undefined;
    public user: string = undefined;

    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: Png) => string = item => item._id;
    static newItem: (item: Png) => Png = ({name, clazz, user}) => ({name, clazz, user});
}
