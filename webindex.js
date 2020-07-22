module.exports = {
  user: {
    user: {
      initiateRelation: [{
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
        title: 'Initiator Name',
        type: 'string'
      }]
    }
  }
};
