export class DndSpellDescriptors {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: DndSpellDescriptors) => string = item => item.id;
}
