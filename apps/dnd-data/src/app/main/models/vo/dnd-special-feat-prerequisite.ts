export class DndSpecialFeatPrerequisite {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: DndSpecialFeatPrerequisite) => string = item => item.id;
}
