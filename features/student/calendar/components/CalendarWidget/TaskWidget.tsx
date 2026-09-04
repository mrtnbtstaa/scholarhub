
"use client";

import Badge from "@/components/ui/Badge/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { BiTask } from "react-icons/bi";

const tasks = [
  { id: 1, title: "Review Q3 report", completed: false, due: "Today" },
  { id: 2, title: "Update documentation", completed: true, due: "Tomorrow" },
  { id: 3, title: "Team sync meeting", completed: false, due: "Wed" },
  { id: 4, title: "Client presentation", completed: false, due: "Fri" },
];

export function TaskWidget() {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <BiTask/>
            Tasks This Week
          </CardTitle>
          <Badge variant="outline">{tasks.filter(t => !t.completed).length}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <Checkbox checked={task.completed} className="size-4" />
            <span className={task.completed ? "line-through text-muted-foreground" : ""}>
              {task.title}
            </span>
            <span className="ml-auto text-xs text-muted-foreground">{task.due}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}