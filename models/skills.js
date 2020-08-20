const skills = [
    {id: 125223, skill: 'HTML', done: true},
    {id: 127904, skill: 'Learn Express', done: false},
    {id: 139608, skill: 'Javascript', done: false}
  ];
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function deleteOne(skillId) {
    const idx = skills.findIndex(skill => skill.id === parseInt(skillId));
    skills.splice(idx, 1);

  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);

  }


  function getAll() {
    return skills;
  }

  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
  }
