function distanceFromHqInBlocks(someValue) {
    const blocks = Math.abs(someValue - 42);
    return blocks
  }

function distanceFromHqInFeet(someValue) {
     distanceFromHqInBlocks(someValue); 
        const blocks = Math.abs(someValue - 42)
        const feet = blocks * 264
    return feet
}
function distanceTravelledInFeet(start, destination) {
    const feets = (Math.abs(start - destination) * 264)
return feets
}
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <=400 )
        {return 0}
    else if (distance >= 400 && distance <= 2000)
        {return ((distance - 400) * 0.02)}
    else if (distance > 2000 && distance  <= 2500)
        {return 25}
    else if (distance > 2500)
        {return 'cannot travel that far'}
}