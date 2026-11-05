export class CreateEventDto {
    name!: string;
    source!: string;
    payload!: Record<string, unknown>;
}