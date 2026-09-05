export interface EventRecord {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  createdById: number;
  createdBy: { username: string };
}
export interface BookingRecord {
  id: number;
  eventId: number;
  event: EventRecord;
}
