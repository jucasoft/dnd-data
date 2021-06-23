export class DndSpellSchool {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: DndSpellSchool) => string = item => item.id;
}
