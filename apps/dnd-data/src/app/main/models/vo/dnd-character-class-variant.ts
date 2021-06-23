export class DndCharacterClassVariant {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: DndCharacterClassVariant) => string = item => item.id;
}
