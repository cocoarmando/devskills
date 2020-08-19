const skills = [
    {id: 125223, skill: 'HTML', done: true},
    {id: 127904, skill: 'Learn Express', done: false},
    {id: 139608, skill: 'Javascript', done: false}
  ];
  module.exports = {
    getAll,
    getOne
  };
  function getAll() {
    return skills;
  }

  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
  }
