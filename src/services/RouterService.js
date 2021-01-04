export default class RouterService {
  registry = [];

  addRoute(route) {
    this.registry.push(route);
  }

  get routes() {
    return this.registry.map(r => r);
  }
}
