export class DndSkillVariant {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: DndSkillVariant) => string = item => item.id;
}
