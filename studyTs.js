var arrProto = [
    { name: 'Max1', age: 17, gender: 'male', hasWork: false },
    { name: 'Max2', age: 17, gender: 'male', hasWork: false },
    { name: 'Max3', age: 17, gender: 'male', hasWork: false },
    { name: 'Max4', age: 17, gender: 'male', hasWork: false },
];
var optionValid = { name: 'Olga', age: 15 };
arrProto.forEach(function (protoEl) { return protoEl.hasWork = true; });
