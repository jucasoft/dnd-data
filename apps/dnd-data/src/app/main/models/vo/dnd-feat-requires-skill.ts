export class DndFeatRequiresSkill {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: DndFeatRequiresSkill) => string = item => item.id;
}