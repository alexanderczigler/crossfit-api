'use strict'

const nordic = require('crossfit-nordic')

module.exports = {
  getWods: (date) => {
    console.log(nordic)
    date = '2017-01-15'
    return nordic.getActivities(date, date)
    .then(data => {
      return data.activities.activity.map(wod => {
        let coach = ''
        wod.resources.map(r => {
          if (r.type === 'Personal') {
            coach = r.employee.name
          }
        })
        return `${wod.product.name} at ${wod.start.timepoint.time} with ${coach}. ${wod.freeslots} of ${wod.bookableslots} available.`
      })
    })
  }
}