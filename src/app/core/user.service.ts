import { Injectable, Optional } from '@angular/core';

let nextId = 1;

export class UserServiceConfig {
  userName = 'Philip Marlowe';
}

@Injectable()
export class UserService {
  id = nextId++;
  userName = 'Sherlock Holmes';

  constructor(@Optional() config: UserServiceConfig) {
    if (config) { this.userName = config.userName; }
  }

  getUsername() {
    const suffix = this.id > 1 ? ` times ${this.id}` : '';
    return this.userName + suffix;
  }
}
