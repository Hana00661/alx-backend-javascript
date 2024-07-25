import ClassRoom from './0-classroom';

export default function initializeRooms() {
  // Call the map method on the array [19, 20, 34], which applies the
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
