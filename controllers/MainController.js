class MainController {
  example(req, res) {
    res.render("example.ejs", {
      text: "This is an example API Route",
    });
  }

   index(req, res) {
    const Todo = req.models.Todo;
    // console.log(req.session)
     Todo.find({ username: req.session.username }, (err, taskList) => {
      if (err) {
        res.status(400).send(err);
      } else {
        var complete = 0;
        let pending = [];
        let arrcomplete = [];

        taskList.forEach((todo) => {
          if (todo.completed == true) {
            complete = complete + 1;
            arrcomplete.push(todo);
          } else {
            pending.push(todo);
          }
        //   console.log(todo.priority);
        });
      
        res.render("index.ejs", {
          pending: pending,
          completedTask: arrcomplete,
          complete: complete,
          username: req.session.username 
        })
      }
    })
    ;
  }

  new(req, res) {
    res.render("new.ejs");
  }

  async create(req, res) {
    const Todo = req.models.Todo;

    const { message, priority } = req.body;
    if (!message || !priority) {
      res.status(400).json({ success: false });
      res.end();
    }
    if( priority > 9 || priority < 1){
        // res.
        // res.redirect("/todo");
        res.status(400).send('{success:false}');
        res.end();
    }
    const newTask = new Todo({
      message: message,
      priority: priority,
      username: req.session.username,
    });

    await Todo.create(newTask, (err, todo) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.redirect("/todo");
      }
    });
  }

  show(req, res) {
    const id = req.params.id;
    const Todo = req.models.Todo;
    Todo.findById(id, (err, todo) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.render("show.ejs", { todo });
      }
    });
  }

  complete(req, res) {
    const id = req.params.id;
    const Todo = req.models.Todo;
    Todo.findByIdAndUpdate(
      id,
      { completed: true },
      { new: true },
      (err, todo) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.redirect("/todo");
        }
      }
    );
  }

  destroy(req, res) {
    const id = req.params.id;
    const Todo = req.models.Todo;
    Todo.findByIdAndDelete(id, (err, todo) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.redirect("/todo");
      }
    });
  }
}

export default MainController;
