// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  const matchedDrivers = drivers.filter(function (driver) {
    return driver.revenue > revenue
  })
  return matchedDrivers
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const matchedDrivers = driversWithRevenueOver(drivers, revenue)
  const matchedDriverNames = matchedDrivers.map(function (driver) {
    return driver.name
  })
  return matchedDriverNames
}

function exactMatch(drivers, object) {
  const matchedDrivers = drivers.filter(function (driver) {
    const key = Object.keys(object)[0]
    const value = object[key]
    return driver[key] === value
  })
  return matchedDrivers
}

function exactMatchToList(drivers, object) {
  const matchedDrivers = exactMatch(drivers, object)
  const matchedDriverNames = matchedDrivers.map(function (driver) {
    return driver.name
  })
  return matchedDriverNames
}
