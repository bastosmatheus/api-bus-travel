class Passenger {
  private constructor(
    public id: number | null,
    public name: string,
    public rg: string,
    public seat: number,
    public id_travel: number
  ) {}

  static create(name: string, rg: string, seat: number, id_travel: number) {
    return new Passenger(null, name, rg, seat, id_travel);
  }

  static restore(id: number, name: string, rg: string, seat: number, id_travel: number) {
    return new Passenger(id, name, rg, seat, id_travel);
  }

  public cancelTravel(exitDate: Date, currentDate: Date) {
    const exitTime = exitDate.getTime();
    const currentTime = currentDate.getTime();

    const diffInMs = Math.abs(exitTime - currentTime);

    const diffInHours = diffInMs / (1000 * 60 * 60);

    return diffInHours;
  }
}

export { Passenger };
