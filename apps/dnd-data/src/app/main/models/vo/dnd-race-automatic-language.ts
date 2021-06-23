export class DndRaceAutomaticLanguage {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: DndRaceAutomaticLanguage) => string = item => item.id;
}
