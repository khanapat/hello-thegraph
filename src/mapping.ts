import { BigInt } from "@graphprotocol/graph-ts"
import { Event, SendItem, Start } from "../generated/Event/Event"
import { Item, Delivery } from "../generated/schema"

export function handleSendItem(event: SendItem): void {
  // let entity = ExampleEntity.load(event.transaction.from.toHex())

  // if (!entity) {
  //   entity = new ExampleEntity(event.transaction.from.toHex())

  //   entity.count = BigInt.fromI32(0)
  // }

  let delivery = new Delivery(event.params.item.toHex());
  delivery.from = event.params.from;
  delivery.to = event.params.to;
  delivery.amount = event.params.amount;
  delivery.status = event.params.status;

  delivery.save();

  // BigInt and BigDecimal math are supported
  // entity.count = entity.count + BigInt.fromI32(1)

  // // Entity fields can be set based on event parameters
  // entity.from = event.params.from
  // entity.to = event.params.to

  // // Entities can be written to the store with `.save()`
  // entity.save()
}

export function handleStart(event: Start): void { }
