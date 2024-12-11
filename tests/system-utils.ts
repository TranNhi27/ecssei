import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import {
  ArchitectureBought,
  ArchitectureUpgraded,
  AutoGeneratedPeople,
  BaseClickUpgraded,
  ClickEvent
} from "../generated/System/System"

export function createArchitectureBoughtEvent(
  entityId: BigInt,
  mold: BigInt,
  cost: BigInt
): ArchitectureBought {
  let architectureBoughtEvent = changetype<ArchitectureBought>(newMockEvent())

  architectureBoughtEvent.parameters = new Array()

  architectureBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "entityId",
      ethereum.Value.fromUnsignedBigInt(entityId)
    )
  )
  architectureBoughtEvent.parameters.push(
    new ethereum.EventParam("mold", ethereum.Value.fromUnsignedBigInt(mold))
  )
  architectureBoughtEvent.parameters.push(
    new ethereum.EventParam("cost", ethereum.Value.fromUnsignedBigInt(cost))
  )

  return architectureBoughtEvent
}

export function createArchitectureUpgradedEvent(
  entityId: BigInt,
  newLevel: BigInt,
  newAddPeople: BigInt
): ArchitectureUpgraded {
  let architectureUpgradedEvent = changetype<ArchitectureUpgraded>(
    newMockEvent()
  )

  architectureUpgradedEvent.parameters = new Array()

  architectureUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "entityId",
      ethereum.Value.fromUnsignedBigInt(entityId)
    )
  )
  architectureUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "newLevel",
      ethereum.Value.fromUnsignedBigInt(newLevel)
    )
  )
  architectureUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "newAddPeople",
      ethereum.Value.fromUnsignedBigInt(newAddPeople)
    )
  )

  return architectureUpgradedEvent
}

export function createAutoGeneratedPeopleEvent(
  entityId: BigInt,
  peopleGenerated: BigInt,
  totalPeople: BigInt
): AutoGeneratedPeople {
  let autoGeneratedPeopleEvent = changetype<AutoGeneratedPeople>(newMockEvent())

  autoGeneratedPeopleEvent.parameters = new Array()

  autoGeneratedPeopleEvent.parameters.push(
    new ethereum.EventParam(
      "entityId",
      ethereum.Value.fromUnsignedBigInt(entityId)
    )
  )
  autoGeneratedPeopleEvent.parameters.push(
    new ethereum.EventParam(
      "peopleGenerated",
      ethereum.Value.fromUnsignedBigInt(peopleGenerated)
    )
  )
  autoGeneratedPeopleEvent.parameters.push(
    new ethereum.EventParam(
      "totalPeople",
      ethereum.Value.fromUnsignedBigInt(totalPeople)
    )
  )

  return autoGeneratedPeopleEvent
}

export function createBaseClickUpgradedEvent(
  entityId: BigInt,
  newAddPeople: BigInt,
  newLevel: BigInt
): BaseClickUpgraded {
  let baseClickUpgradedEvent = changetype<BaseClickUpgraded>(newMockEvent())

  baseClickUpgradedEvent.parameters = new Array()

  baseClickUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "entityId",
      ethereum.Value.fromUnsignedBigInt(entityId)
    )
  )
  baseClickUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "newAddPeople",
      ethereum.Value.fromUnsignedBigInt(newAddPeople)
    )
  )
  baseClickUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "newLevel",
      ethereum.Value.fromUnsignedBigInt(newLevel)
    )
  )

  return baseClickUpgradedEvent
}

export function createClickEventEvent(
  entityId: BigInt,
  peopleAdded: BigInt,
  totalPeople: BigInt
): ClickEvent {
  let clickEventEvent = changetype<ClickEvent>(newMockEvent())

  clickEventEvent.parameters = new Array()

  clickEventEvent.parameters.push(
    new ethereum.EventParam(
      "entityId",
      ethereum.Value.fromUnsignedBigInt(entityId)
    )
  )
  clickEventEvent.parameters.push(
    new ethereum.EventParam(
      "peopleAdded",
      ethereum.Value.fromUnsignedBigInt(peopleAdded)
    )
  )
  clickEventEvent.parameters.push(
    new ethereum.EventParam(
      "totalPeople",
      ethereum.Value.fromUnsignedBigInt(totalPeople)
    )
  )

  return clickEventEvent
}