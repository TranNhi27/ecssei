import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { ArchitectureBought } from "../generated/schema"
import { ArchitectureBought as ArchitectureBoughtEvent } from "../generated/System/System"
import { handleArchitectureBought } from "../src/system"
import { createArchitectureBoughtEvent } from "./system-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let entityId = BigInt.fromI32(234)
    let mold = BigInt.fromI32(234)
    let cost = BigInt.fromI32(234)
    let newArchitectureBoughtEvent = createArchitectureBoughtEvent(
      entityId,
      mold,
      cost
    )
    handleArchitectureBought(newArchitectureBoughtEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ArchitectureBought created and stored", () => {
    assert.entityCount("ArchitectureBought", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ArchitectureBought",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "entityId",
      "234"
    )
    assert.fieldEquals(
      "ArchitectureBought",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "mold",
      "234"
    )
    assert.fieldEquals(
      "ArchitectureBought",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "cost",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
