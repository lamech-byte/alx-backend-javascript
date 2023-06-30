// Import the ClassRoom class
import ClassRoom from './0-classroom';

// initializeRooms function
function initializeRooms() {
  // Create an array of ClassRoom objects with different sizes
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);

  return [room1, room2, room3];
}

export default initializeRooms;
