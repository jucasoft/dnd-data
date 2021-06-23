export class DndFeatRequiresFeat {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: DndFeatRequiresFeat) => string = item => item.id;
}
