import {describe, expect, test} from '@jest/globals';
import { OmnicQuery } from "@/../dist"

describe('Test Query', () => {

  test('Test url', (done) => {

    expect(process.env.GraphQLURL).toBeDefined()
    expect(process.env.GraphQLURL).toEqual("http://127.0.0.1:5000/graphql")
    done()
  })

  test('Test getMessage function', (done) => {
    const omnicquery = new OmnicQuery()
    omnicquery.getMessage("0x24f383855abb67fe3a2826983233778a5891c2b556b61c7064c99db4bf1a5ff0").then((res) => {
      
      expect(res.success).toEqual(true)
      expect(res.errors).toBeNull()
      expect(res.message).toBeDefined()
      expect(res.message.destination).toEqual(0)
      expect(res.message.block_number).toEqual(30445293)
      done()
    }).catch((reason)=>{
      done('it should not reach here: ' + reason);
    })
  })

  test('Test getLatestBridgeMessage function', (done) => {
    const omnicquery = new OmnicQuery()
    omnicquery.getLatestBridgeMessage(0, 5, false).then((res) => {

      expect(res.success).toEqual(true)
      expect(res.errors).toBeNull()
      expect(res.message.length).toEqual(5)
      done()
    }).catch((reason)=>{
      done('it should not reach here: ' + reason);
    })
  })

  test('Test getLatestBridgeMessage function Limit', (done) => {
    const omnicquery = new OmnicQuery()
    omnicquery.getLatestBridgeMessage(0, 5, false).then((res) => {
      
      expect(res.success).toEqual(true)
      expect(res.errors).toBeNull()
      expect(res.message).toBeDefined()
      expect(res.count).toBeDefined()
      expect(res.message[0].method).toBeLessThan(5)
      done()
    }).catch((reason)=>{
      done('it should not reach here: ' + reason);
    })
  })

  test('Test getBridgeStatistic function', (done) => {
    const omnicquery = new OmnicQuery()
    omnicquery.getBridgeStatistic().then((res) => {

      expect(res.success).toEqual(true)
      expect(res.errors).toBeNull()
      expect(res.message).toBeDefined()
      expect(res.message.total_fee).toBeDefined()
      expect(res.message.total_fee).toBeDefined()
      done()
    }).catch((reason)=>{
      done('it should not reach here: ' + reason);
    })
  })

  test('Test getBridgeMessage function', (done) => {
    const omnicquery = new OmnicQuery()
    omnicquery.getBridgeMessage("0x24f383855abb67fe3a2826983233778a5891c2b556b61c7064c99db4bf1a5ff0").then((res) => {

      expect(res.success).toEqual(true)
      expect(res.errors).toBeNull()
      expect(res.message).toBeDefined()
      expect(res.message.method).toBeDefined()
      expect(res.message.amount).toBeDefined()
      done()
    }).catch((reason)=>{
      done('it should not reach here: ' + reason);
    })
  })
  
  test('Test getPoolsInfo function', (done) => {
    const omnicquery = new OmnicQuery()
    omnicquery.getPoolsInfo().then((res) => {

      expect(res).toBeDefined()
      expect(res.length).toBeGreaterThan(0)
      done()
    }).catch((reason)=>{
      done('it should not reach here: ' + reason);
    })
  })
})