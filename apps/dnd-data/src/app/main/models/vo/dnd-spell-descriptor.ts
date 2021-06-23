export class DndSpellDescriptor {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: DndSpellDescriptor) => string = item => item.id;
}
