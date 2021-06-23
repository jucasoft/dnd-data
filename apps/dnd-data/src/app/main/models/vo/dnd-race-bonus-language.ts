export class DndRaceBonusLanguage {
    public id: string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: DndRaceBonusLanguage) => string = item => item.id;
}
