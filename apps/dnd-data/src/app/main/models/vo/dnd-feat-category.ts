export class DndFeatCategory {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: DndFeatCategory) => string = item => item.id;
}
