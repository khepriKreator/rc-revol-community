import {faker} from "@faker-js/faker";
import {Role} from "../generated/game";

export const RoleFaker = (): Role => faker.helpers.arrayElement([Role.USER, Role.ADMIN])