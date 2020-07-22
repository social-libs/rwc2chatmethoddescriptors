function createLib (execlib) {
  'use strict';

  return execlib.lib.extend({
    service: {
      user: {
        initiateRelation: [{
          title: 'Initiator Name',
          type: 'string'
        },{
          title: 'Target Name',
          type: 'string'
        },{
          title: 'Reference',
          type: 'string'
        },{
          title: 'Init Message',
          type: 'string'
        }],
        acceptRelation: [{
          title: 'Target Name',
          type: 'string'
        },{
          title: 'Initiator Name',
          type: 'string'
        },{
          title: 'Reference',
          type: 'string'
        },{
          title: 'Accept Message',
          type: 'string'
        }],
        rejectRelation: [{
          title: 'Target Name',
          type: 'string'
        },{
          title: 'Initiator Name',
          type: 'string'
        }]
      }
    }
  }, require('./webindex.js'));
}
module.exports = createLib;
