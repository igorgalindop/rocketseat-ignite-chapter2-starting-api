import { Specification } from "../model/Specification";

interface ICreateSpecificationsDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    creste({ name, description }: ICreateSpecificationsDTO): void;
    findByName(name: string): Specification;
    list(): Specification[];
}

export { ISpecificationsRepository, ICreateSpecificationsDTO };
