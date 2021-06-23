export class DndSpellClassLevel {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: DndSpellClassLevel) => string = item => item.id;
}
