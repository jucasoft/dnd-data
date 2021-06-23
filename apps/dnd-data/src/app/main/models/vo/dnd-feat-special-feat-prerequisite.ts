export class DndFeatSpecialFeatPrerequisite {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: DndFeatSpecialFeatPrerequisite) => string = item => item.id;
}
