/**
 * Zadanie 5.
 *
 * Rozszerz typ `Wydatek` o dwa nowe typy/interfejsy:
 * - `WydatekSzefa` - dodaj pole `isSzef` typu `true`
 * - `WycieczkaSzefaNaKosztFirmy` - dodaj pole `cel` typu `string`
 *
 */

export type Wydatek = {
    kwota: number;
    opis: string;
}

//# ---

//export type WydatekSzefa = any;
export interface WydatekSzefa extends Wydatek {
    isSzef: true;
}

export interface WycieczkaSzefaNaKosztFirmy extends WydatekSzefa {
    cel: string;
}
//export interface WycieczkaSzefaNaKosztFirmy {};
