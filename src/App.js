import React, { useEffect, useMemo, useRef } from "react";
import { activityData } from "./data";
import moment from "moment/moment";

function isTaskStartingSoon(task) {
  if (task) {
    const taskStartTime = moment(`${task.task_date} ${task.task_start_time}`);

    // console.log(taskStartTime, "tasktime");

    const currentTime = moment();
    if (taskStartTime.isSameOrAfter(currentTime)) {
      // console.log(task, "====");
      return task;
    } else {
      return null;
    }
  }
  return null;
}

function timeToMilliseconds(time) {
  const formattedTime = moment(time, "h:mm A");
  const startOfDay = moment().startOf("day"); // Start of the current day
  const diff = formattedTime.diff(startOfDay); // Difference in milliseconds
  return diff;
}

const showNotification = (nearestTask) => {
  console.log("showNotification");
  if ("Notification" in window) {
    if (Notification.permission === "granted") {
      // Create a notification
      const title = "Dyscores";
      const options = {
        body: `${nearestTask?.task_id} task for start remain 10 minutes`,
      };
      const notification = new Notification(title, options);
      // console.log(notification, "sdfsd");
      // Handle click on the notification
      notification.onclick = () => {
        // Redirect to the homepage when notification is clicked
        // navigate("/home", { state: nearestTask });
        // dispatch(closeRescheduleNotifiaction())
      };
    } else if (Notification.permission !== "denied") {
      // Ask the user for permission
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          const title = "Dyscores";
          const options = {
            body: `${nearestTask?.task_id} task for start remain 10 minutes`,
          };
          const notification = new Notification(title, options);

          // console.log(notification, "notification");
          // Handle click on the notification
          notification.onclick = () => {
            // Redirect to the homepage when notification is clicked
            // navigate("/home", { state: nearestTask });
            // dispatch(closeRescheduleNotifiaction())
          };
        }
      });
    }
  }
};

const checkUpcomingTasks = () => {
  const upcomingTasks = activityData?.filter((task) => {
    return isTaskStartingSoon(task);
  });

  // console.log(upcomingTasks, "upcoming event ======");
  if (upcomingTasks.length > 0) {
    // Sort the upcomingTasks by start time
    // upcomingTasks.sort((a, b) => {
    //   const timeA = timeToMilliseconds(a.task_start_time);
    //   const timeB = timeToMilliseconds(b.task_start_time);
    //   return timeA - timeB;
    // });

    // const sleepUpcommingUser = { ...upcomingTasks };

    // sleepUpcommingUser.sort((a, b) => {
    //   const timeA = timeToMilliseconds(a.sleep_time);
    //   const timeB = timeToMilliseconds(b.sleep_time);
    //   return timeA - timeB;
    // });

    // console.log(sleepUpcommingUser);

    // Get the nearest task
    // const nearestTask = upcomingTasks[0];

    // setDashboardState((prev) => ({
    //   ...prev,
    //   reScheduleTaskData: nearestTask,
    // }));
    // Calculate the time difference with the current time
    upcomingTasks?.forEach((element) => {
      // Calculate the time in milliseconds for the nearest task's start time
      const timeInMilliseconds = moment(
        `${element?.task_date} ${element?.task_start_time}`,
        "yyyy-MM-DD h:mm A"
      ).subtract(10, "minutes");

      const currentTime = moment();

      const timeDifference = moment
        .duration(timeInMilliseconds - currentTime)
        .asMilliseconds();
      console.log(timeDifference);
      console.log(element);
      if (timeDifference >= 0) {
        setTimeout(() => {
          // dispatch(isReschduleNotification(nearestTask));
          // alert("hello");
          showNotification(element);
          // checkUpcomingTasks();
        }, timeDifference);
      }
    });
  }
};

const App = () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log("App componet");
    if (ref.current !== "rendered") checkUpcomingTasks();
    ref.current = "rendered";
  }, []);

  return <div>App</div>;
};

export default App;
