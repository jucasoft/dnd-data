export class DndCharacterClassVariantRequiresRace {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: DndCharacterClassVariantRequiresRace) => string = item => item.id;
}
