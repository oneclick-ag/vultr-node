const util = require('../util')

const mock = {
  list: {
    domain: 'example.com',
    date_created: '2014-12-11 16:20:59'
  },
  records: [
    {
      type: 'A',
      name: '',
      data: '127.0.0.1',
      priority: 0,
      RECORDID: 1265276,
      ttl: 300
    },
    {
      type: 'CNAME',
      name: '*',
      data: 'example.com',
      priority: 0,
      RECORDID: 1265277,
      ttl: 300
    }
  ]
}

const mockParameters = {
  createDomain: {
    domain: 'example.com',
    serverip: '10.0.0.0'
  },
  deleteDomain: {
    domain: 'example.com'
  },
  records: {
    domain: 'example.com'
  },
  deleteRecord: {
    domain: 'example.com',
    RECORDID: 1265277
  },
  createRecord: {
    domain: 'example.com',
    name: 'vultr',
    type: 'A',
    data: '192.0.2.1'
  },
  updateRecord: {
    domain: 'example.com',
    RECORDID: 126577
  },
  enableDNSSec: {
    domain: 'example.com',
    enable: 'yes'
  }
}

util.createTestSuite('dns', mock, mockParameters)
