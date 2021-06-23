export class DndRaceSpeedType {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: DndRaceSpeedType) => string = item => item.id;
}
