// import { OmnicQuery } from ";
// import { Message } from '@/declearation'

// import { getMessageResult } from "@/index"
import {describe, expect, test} from '@jest/globals';
import { OmnicQuery } from "@/index"

describe('Test Query', () => {
  test('Test getMessage function', () => {
    const omnicquery = new OmnicQuery()
    omnicquery.getMessage("0x24f383855abb67fe3a2826983233778a5891c2b556b61c7064c99db4bf1a5ff0").then((res) => {
      
      expect(res.success).toEqual(true)
      expect(res.errors).toBeNull()
      expect(res.message).toBeDefined()
      expect(res.message.destination).toEqual(0)
      expect(res.message.block_number).toEqual(30445293)
    })
  })

  test('Test getLatestBridgeMessage function', () => {
    const omnicquery = new OmnicQuery()
    omnicquery.getLatestBridgeMessage(0, 5, false).then((res) => {

      expect(res.success).toEqual(true)
      expect(res.errors).toBeNull()
      expect(res.message.length).toEqual(5)
    })
  })

  test('Test getLatestBridgeMessage function Limit', () => {
    const omnicquery = new OmnicQuery()
    omnicquery.getLatestBridgeMessage(0, 5, false).then((res) => {
      
      expect(res.success).toEqual(true)
      expect(res.errors).toBeNull()
      expect(res.message).toBeDefined()
      expect(res.message[0].method).toBeLessThan(5)
    })
  })

  test('Test getBridgeStatistic function', () => {
    const omnicquery = new OmnicQuery()
    omnicquery.getBridgeStatistic().then((res) => {

      expect(res.success).toEqual(true)
      expect(res.errors).toBeNull()
      expect(res.message).toBeDefined()
      expect(res.message.total_fee).toBeDefined()
      expect(res.message.total_fee).toBeDefined()
    })
  })

  test('Test getBridgeMessage function', () => {
    const omnicquery = new OmnicQuery()
    omnicquery.getBridgeMessage("0x24f383855abb67fe3a2826983233778a5891c2b556b61c7064c99db4bf1a5ff0").then((res) => {

      expect(res.success).toEqual(true)
      expect(res.errors).toBeNull()
      expect(res.message).toBeDefined()
      expect(res.message.method).toBeDefined()
      expect(res.message.amount).toBeDefined()
    })
  })
  
})