export class DndRaceSpeed {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: DndRaceSpeed) => string = item => item.id;
}
