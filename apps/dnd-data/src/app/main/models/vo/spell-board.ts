export class SpellBoard {
    public id: string = undefined;
    public name: string = undefined;
    public class: string = undefined;

    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: SpellBoard) => string = item => item.id;
}
