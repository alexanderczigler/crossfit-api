'use strict'

const nordic = require('crossfit-nordic')

module.exports = {
  getWods: (date) => {
    date = '2017-01-16'
    // waitinglistsize
    return nordic.getActivities(date, date)
    .then(data => {
      let wods = data.activities.activity.map(wod => {
        console.log('wod type', wod.product.name)
        let coach = ''
        wod.resources.map(r => {
          if (r.type === 'Personal') {
            coach = r.employee.name
          }
        })
        return `${wod.product.name} at ${wod.start.timepoint.time} with ${coach}. ${wod.freeslots} of ${wod.totalslots} available.`
      })

      let speech = `There are ${wods.length} wods.`
      wods.map(wod => {
        speech = `${speech} ${wod}`
      }) 

      return {
        speech: speech,
        displayText: `There are ${wods.length} wods`,
        data: wods,
        contextOut: [],
        source: 'Crossfit Nordic'
      }
    })
  }
}