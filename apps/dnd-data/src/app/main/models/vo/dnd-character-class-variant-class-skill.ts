export class DndCharacterClassVariantClassSkill {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: DndCharacterClassVariantClassSkill) => string = item => item.id;
}
