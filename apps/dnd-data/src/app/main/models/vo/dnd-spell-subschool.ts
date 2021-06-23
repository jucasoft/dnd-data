export class DndSpellSubschool {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: DndSpellSubschool) => string = item => item.id;
}
