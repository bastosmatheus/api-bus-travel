import { Passenger } from "@/core/entities/passenger";

interface PassengerRepository {
  findAll(): Promise<Passenger[]>;
  findById(id: number): Promise<Passenger | null>;
  create(passenger: Passenger): Promise<Passenger>;
  delete(id: number): Promise<Passenger>;
}

export { PassengerRepository };
