export class DndCharacterClassVariantRequiresSkill {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: DndCharacterClassVariantRequiresSkill) => string = item => item.id;
}
