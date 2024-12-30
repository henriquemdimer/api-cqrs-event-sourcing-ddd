import { CommandBus } from "@core/infrastructure/bus/CommandBus";
import { CreateUserCommandHandler } from "./application/handler/CreateUserCommandHandler";
import { InMemoryUserRepository } from "./infrastructure/persistence/repository/InMemory/InMemoryUserRepository";
import { EventBus } from "@core/infrastructure/bus/EventBus";
import { UserCreatedEventHandler } from "./application/handler/UserCreatedEventHandler";
import { CreateUserAction } from "./presentation/users/user.create";
import { QueryBus } from "@core/infrastructure/bus/QueryBus";
import { FindUserQueryHandler } from "./application/handler/FindUserQueryHandler";
import { FetchUserAction } from "./presentation/users/user.fetch";
import { Server } from "@core/infrastructure/server/Server";
import { ExpressDriver } from "@core/infrastructure/server/drivers/ExpressDriver";

const commandBus = new CommandBus();
const eventBus = new EventBus();
const queryBus = new QueryBus();

const userRepo = new InMemoryUserRepository();

commandBus.registerHandler(new CreateUserCommandHandler(userRepo, eventBus));
eventBus.subscribe(new UserCreatedEventHandler());
queryBus.registerHandler(new FindUserQueryHandler(userRepo));

new Server(new ExpressDriver()).withControllers(
  new CreateUserAction(commandBus),
  new FetchUserAction(queryBus)
).start();
