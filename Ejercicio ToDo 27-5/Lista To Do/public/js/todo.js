
//closure
var iniciando = (function todo(){
  tarea = $(#templates);
})

  var tarea = (function(){
         var $form = $('form'),
              taskInput = $form.find('input[type=text]'),
              taskDate = $form.find('input[type=date]'),
              showTasksButton = $form.find('.showTasks');
              tasks = [],
              templateContainer = $('#templates'),
              taskTemplate="";

            
      
    function init(){
      templateContainer.find('#todoTemplate').load('/todo/task-template.html', function(){
      taskTemplate = templateContainer.find('#todoTemplate').val();
      });

      $form.on('submit', onSubmit);
      showTasksButton.on('click', showTasks);
    }


    function onSubmit(){
      if(taskInput.val().length && taskDate.val().length){
        tasks.push({
          name:  taskInput.val(),
          date: taskDate.val()
        });
      }
      return false;
    }
   
    function showTasks(){
      $( "li" ).remove()
      var tasksHtml = '';
      for(var i=0; i< tasks.length; i++){
        tasksHtml += getTaskHtml(tasks[i]);
      }
      $form.find('ul').append(tasksHtml);
      $(".remove").on('click', remove);
    }
   
    function getTaskHtml(task){
      return taskTemplate
        .replace(/%name%/gi, task.name)
        .replace(/%date%/g, task.date);
    }

    function remove(){
      var tarea = $(this).parent().parent();
      tarea.remove();
    }

    return {
      onSubmit: onSubmit,
      showTasks: showTasks,
      getTaskHtml: getTaskHtml,
      init: init
    }
  })();

$(function(){
  iniciando.init();

});









