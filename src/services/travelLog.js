class TravelLogService {
  data = [
    {
      passengerName: 'bamboo',
      station: 'S01',
      createdAt: 1,
      type: 'check-in',
    },
    {
      passengerName: 'panda',
      station: 'S02',
      createdAt: 1,
      type: 'check-in',
    },
    {
      passengerName: 'bamboo',
      station: 'S05',
      createdAt: 5,
      type: 'check-out',
    },
  ];

  getTravelLog() {
    return new Promise(function (resolve) {
      setTimeout(() => {
        resolve(this.data);
      }, 2000);
    });
  }
}

export const travelLogService = new TravelLogService();
