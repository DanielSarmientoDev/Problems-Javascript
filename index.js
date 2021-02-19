const delegations = [
  {
    id: "104",
    plant: {
      id: "1",
      name: "CITIX",
      franchise: null,
      __typename: "Plant",
    },
    deliveryman: {
      id: "1",
      user: {
        id: "1",
        phone: "3107665574",
        first_name: "Jonathan",
        last_name: "Tovar",
        __typename: "UserDeliveryman",
      },
      delegations: [
        {
          environment: "PLANNED",
          __typename: "PlantDelegation",
        },
      ],
      __typename: "Deliveryman",
    },
    monday: true,
    tuesday: true,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
    assignedDays: [
      {
        day: "monday",
        start: "1614307042694",
        end: "1614307042694",
      },
      {
        day: "tuesday",
        start: "1614307042694",
        end: "1614307042694",
      },
    ],
    environment: "PLANNED",
    __typename: "PlantDelegation",
  },
];
let dateActual = new Date();
console.log(dateActual);
const events = [];
for (const element of delegations) {
  for (const day of element.assignedDays) {
    console.log(day);
    let changeTime = dateActual;
    let duration = 7; //In Days
    let addDays = changeTime.setTime(
      changeTime.getTime() + duration * 24 * 60 * 60 * 1000
    );
    console.log(addDays);
  }
}
