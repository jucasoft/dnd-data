export class DndRaceFavoredCharacterClass {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: DndRaceFavoredCharacterClass) => string = item => item.id;
}
