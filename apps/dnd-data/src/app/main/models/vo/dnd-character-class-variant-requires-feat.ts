export class DndCharacterClassVariantRequiresFeat {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: DndCharacterClassVariantRequiresFeat) => string = item => item.id;
}
