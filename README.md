ng generate @nestjs/schematics:resource --name=spell --path=src/app --sourceRoot=apps/dnd-be  --dry-run

DOC CRUD

# DndData

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Powerful, Extensible Dev Tools**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@dnd-data/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.






## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.


import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {Rulebook} from '@models/vo/rulebook';
import {ClassLevel} from '@models/vo/class-level';
import {DomainLevel} from '@models/vo/domain-level';

@Entity('spell')
export class Spell {
@PrimaryGeneratedColumn('uuid') public id: number = undefined;
@Column() public name: string = undefined;
@Column() public source: Rulebook = undefined;
@Column() public schools: string[] = undefined; // 'Enchantment'
@Column() public subschools: string[] = undefined; // 'Compulsion'
@Column() public descriptors: string[] = undefined; // 'Mind-Affecting'
@Column() public classLevels: ClassLevel[] = undefined;
@Column() public domainLevels: DomainLevel[] = undefined;
@Column() public components: string[] = undefined; // 'Verbal','Somatic','Divine Focus'
@Column() public castingTime: string = undefined;
@Column() public range: string = undefined;
@Column() public area: string = undefined;
@Column() public target: string = undefined;
@Column() public effect: string = undefined;
@Column() public duration: string = undefined;
@Column() public savingThrow: string = undefined;
@Column() public spellResistance: string = undefined;
@Column() public description: string = undefined;

constructor(pet?: Partial<Spell>) {
Object.assign(this, pet);
}

}
