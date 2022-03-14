const tasks = [
    {
      id: "53a0724c-a416-4cac-ae45-bfaedce1f147",
      title: "Setup Virtual Office",
      isComplete: true,
      phaseId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
    },
    {
      id: "c2af9adc-d0b8-4d44-871f-cef66f86f7f6",
      title: "Set mission & vision",
      isComplete: true,
      phaseId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
    },
    {
      id: "2c931e7e-510f-49e5-aed6-d6b44087e5a1",
      title: "Select business name",
      isComplete: true,
      phaseId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
    },
    {
      id: "404daf2a-9b97-4b99-b9af-614d07f818d7",
      title: "Buy domains",
      isComplete: true,
      phaseId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
    },
    {
      id: "6379c436-9fad-4b3f-a427-2d7241f5c1b1",
      title: "Create roadmap",
      isComplete: true,
      phaseId: "34115aac-0ff5-4859-8f43-10e8db23602b",
    },
    {
      id: "f01bcdec-6783-464e-8f9e-8416830f7569",
      title: "Competitor analysis",
      isComplete: false,
      phaseId: "34115aac-0ff5-4859-8f43-10e8db23602b",
    },
    {
      id: "a4824a31-5c83-42af-8c1b-6e2461aae1ef",
      title: "Release marketing website",
      isComplete: false,
      phaseId: "d914aec0-25b2-4103-9ed8-225d39018d1d",
    },
    {
      id: "b553085a-a7e0-4c9b-8a12-f971919c3683",
      title: "Release MVP",
      isComplete: false,
      phaseId: "d914aec0-25b2-4103-9ed8-225d39018d1d",
    },
  ];
  
  const phases = [
    {
      id: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
      title: "Foundation",
    },
    {
      id: "34115aac-0ff5-4859-8f43-10e8db23602b",
      title: "Discovery",
    },
    {
      id: "d914aec0-25b2-4103-9ed8-225d39018d1d",
      title: "Delivery",
    },
];
  
exports.db = {
    tasks,
    phases
}