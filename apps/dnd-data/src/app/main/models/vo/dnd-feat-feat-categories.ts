export class DndFeatFeatCategories {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: DndFeatFeatCategories) => string = item => item.id;
}
