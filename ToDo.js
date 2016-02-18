function ToDo(tid, task) {
  this.tid = tid;
  this.task = task;
  var completed = false;
  var element = document.createElement('li');
  element.innerHTML = task;
  element.addEventListener('click', action);
  function action(e) {
    this.completed = !this.completed;
    if (element.className === 'completed') {
      element.className = '';
    } else {
      element.className = 'completed';
    }
  }
  this.getElement = function() {
    return element;
  };
}
