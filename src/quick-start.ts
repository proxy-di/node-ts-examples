import { inject, ProxyDiContainer } from "proxydi";

interface Character {
  greet(): string;
}

class Actor {
  @inject("Role") role: Character;

  play = () => this.role.greet();
}

class Agent007 implements Character {
  greet = () => "Bond... James Bond";
}

const container = new ProxyDiContainer();
container.newDependency(Agent007, "Role");
container.newDependency(Actor, "Actor");

const actor = container.resolve<Actor>("Actor");
console.log(actor.play());
