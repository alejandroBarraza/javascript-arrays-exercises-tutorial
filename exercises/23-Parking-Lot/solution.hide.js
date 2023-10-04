let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(parkingArray) {
  let state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0
  }
  
  for (const row of parkingArray) {
    for (const column of row) {
      if(column == 1){
        state.occupiedSlots += 1
        state.totalSlots += 1
      }else if(column ===2){
        state.availableSlots += 1
        state.totalSlots += 1
      }
    }
  }

  return state
}
    

console.log(getParkingLotState(parkingState));
