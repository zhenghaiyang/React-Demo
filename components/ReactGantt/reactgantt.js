import React from 'react';
import ReactGantt from 'gantt-for-react';

// console.log("--------------")
// console.log(ReactGantt)
// console.log("--------------")
export default class ReactForGantt extends React.Component{

  constructor(props){
    super(props);
    //this.tasks=this.tasks.bind(this);
    this.customPopupHtml=this.customPopupHtml.bind(this);
    this.state={
      viewMode: 'Day',
      tasks:  [ { start: '2017-06-28T16:00:00.000Z',
          end: '2017-07-05T16:00:00.000Z',
          name: 'Redesign website',
          id: 'Task 0',
          progress: 60,
          custom_class: 'bar-milestone' },
        { start: '2017-06-29T16:00:00.000Z',
          end: '2017-07-02T16:00:00.000Z',
          name: 'Write new content',
          id: 'Task 1',
          progress: 70,
          dependencies: 'Task 0' },
        { start: '2017-07-01T16:00:00.000Z',
          end: '2017-07-04T16:00:00.000Z',
          name: 'Apply new styles',
          id: 'Task 2',
          progress: 6,
          dependencies: 'Task 1, Task 0' },
        { start: '2017-07-05T16:00:00.000Z',
          end: '2017-07-05T16:00:00.000Z',
          name: 'Review',
          id: 'Task 3',
          progress: 10,
          dependencies: 'Task 2' },
        { start: '2017-07-06T16:00:00.000Z',
          end: '2017-07-07T16:00:00.000Z',
          name: 'Deploy',
          id: 'Task 4',
          progress: 14 },
        { start: '2017-07-08T16:00:00.000Z',
          end: '2017-07-08T16:00:00.000Z',
          name: 'Go Live!',
          id: 'Task 5',
          progress: 12,
          dependencies: 'Task 4' } ],
      scrollOffsets:{
       'Quarter Day': 10,
       'Half Day': 4,
       'Day': 10,
       'Week': 2,
       'Month': 1
     }
    }
  }

  tasks(){
    let names = [
     ["Redesign website", [0, 7]],
     ["Write new content", [1, 4]],
     ["Apply new styles", [3, 6]],
     ["Review", [7, 7]],
     ["Deploy", [8, 9]],
     ["Go Live!", [10, 10]]
   ];
   console.log("tasks")
   console.log(names)
   console.log("tasks")
   var tasks = names.map((name, i)=>{
     let today = new Date();
     let start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
     let end = new Date(today.getFullYear(), today.getMonth(), today.getDate());
     start.setDate(today.getDate() + name[1][0]);
     end.setDate(today.getDate() + name[1][1]);
     return {
       start: start,
       end: end,
       name: name[0],
       id: "Task " + i,
       progress: parseInt(Math.random() * 100, 10)
     }
   })
   tasks[1].dependencies = "Task 0";
   tasks[2].dependencies = "Task 1, Task 0";
   tasks[3].dependencies = "Task 2";
   tasks[5].dependencies = "Task 4";
   tasks[0].custom_class = "bar-milestone";
   tasks[0].progress = 60;
   return tasks;
  }


  componentDidMount(){
    setInterval(function() {
      this.setState({
        viewMode: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'][parseInt(Math.random() * 5 + 1) - 1],
        tasks: this.tasks.slice(0, parseInt(Math.random() * 4 + 1))
      });
    }.bind(this), 5000)
  }


  customPopupHtml(task) {
    console.log("999999999999")
    console.log(task)
    console.log("999999999999")
    const end_date = task._end.format('MMM D');
    return `
      <div class="details-container">
        <h5>${task.name}</h5>
        <p>Expected to finish by ${end_date}</p>
        <p>${task.progress}% completed!</p>
      </div>
    `;
  }



  render(){

    return (
      <div>
        hello world
      <ReactGantt
        tasks={this.state.tasks}
        viewMode={this.state.viewMode}
        customPopupHtml={this.customPopupHtml}
        scrollOffsets={this.state.scrollOffsets}
      />
      </div>
    )
  }
}
