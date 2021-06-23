export class DndRaceType {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: DndRaceType) => string = item => item.id;
}
