import {describe, expect, test} from '@jest/globals';
import { OmnicQuery } from "@/../dist"

describe('Test Query', () => {

  test('Test url', (done) => {

    // expect(process.env.GraphQLURL).toBeDefined()
    // expect(process.env.GraphQLURL).toEqual("http://127.0.0.1:5000/graphql")
    done()
  })

  test('Test getMessage function', (done) => {
    const omnicquery = new OmnicQuery()
    omnicquery.getMessage("0x5e6264a9637ab2783b5f3537a73fdd9c2e5c98f506aa0c314e680b5b146e4b00").then((res) => {
      
      expect(res.success).toEqual(true)
      expect(res.errors).toBeNull()
      expect(res.message).toBeDefined()
      expect(res.message.destination).toEqual(0)
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
    const limit = 5
    omnicquery.getLatestBridgeMessage(0, limit, false).then((res) => {
      
      console.log(res.message)
      expect(res.success).toEqual(true)
      expect(res.errors).toBeNull()
      expect(res.message).toBeDefined()
      expect(res.message.length).toEqual(limit)
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
      expect(res.message.amounts.length).toBeGreaterThan(0)
      expect(res.message.fees.length).toBeGreaterThan(0)
      done()
    }).catch((reason)=>{
      done('it should not reach here: ' + reason);
    })
  })

  test('Test getBridgeMessage function', (done) => {
    const omnicquery = new OmnicQuery()
    omnicquery.getBridgeMessage("70a97869de08a57dbbdb96b1c5611ba5ea766f938b21be63794825e8d78c0698").then((res) => {

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

  test('Test getBridgeMessage function', (done) => {
    const omnicquery = new OmnicQuery()
    omnicquery.getBridgeMessage("4").then((res) => {

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
      expect(res.pools.length).toBeGreaterThan(0)
      done()
    }).catch((reason)=>{
      done('it should not reach here: ' + reason);
    })
  })

  test('Test getUserTransferHistory function for evm address', (done) => {
    const omnicquery = new OmnicQuery()
    omnicquery.getUserTransferHistory("0xe6797e1918b3e3708278dbaf9dd6aa73d5cf8a3f", 0, 10).then((res) => {

      expect(res).toBeDefined()
      expect(res.message.length).toBeGreaterThan(0)
      done()
    }).catch((reason)=>{
      done('it should not reach here: ' + reason);
    })
  })

  test('Test getUserTransferHistory function for principal ID', (done) => {
    const omnicquery = new OmnicQuery()
    omnicquery.getUserTransferHistory("gtivl-de57g-wfda6-jun36-smgwb-6fql7-esrb2-gqm5q-dr2mg-fiakp-jae", 0, 10).then((res) => {
      
      expect(res).toBeDefined()
      expect(res.message.length).toBeGreaterThan(0)
      done()
    }).catch((reason)=>{
      done('it should not reach here: ' + reason);
    })
  })
})